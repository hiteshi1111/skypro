const Message = require('../schemas/message.schema');
let service = {};
service.getResponse = getResponse;

const responses = {
  "hi": "Hello! How can I help you today?",
  "how are you": "I'm just a bot, but I'm doing great! How about you?",
  "what is skypro": "Welcome to our premier IPTV company! We are a reputed and well-established IPTV and internet service provider across India. Our company, which has been providing best-in-class services for many years, has a community of thousands of satisfied customers, and we aim to extend our reach to a wider audience to provide our excellent services.",
  "skypro yearly plans": "Choose from our packages: FTA + Hindi Platinum HD at ₹490 + GST, FTA + Hindi Gold Plus HD at ₹410 + GST, FTA + Hindi Silver HD at ₹210 + GST, FTA + Hindi Bronze SD at ₹105 + GST, FTA + Hindi Gold HD at ₹350 + GST, English HD at ₹75 + GST, Kids at ₹36 + GST, Sports HD Lite at ₹75 + GST, Sports HD at ₹100 + GST, and FTA Channels at ₹75 + GST. Add these packs to your subscription to view more channels.",
  "know more about skypro": "Delve into SkyPro IPTV services’ state-of-the-art technology, our protocols used for streaming, the infrastructure of the server, and the compatibility of the devices. In order to improve the performance"
};
async function getResponse(text) {
  try {
    const lowerCaseText = text.toLowerCase();
    let responseText;

    // Check if text matches any predefined responses
    for (const word in responses) {
      if (lowerCaseText.includes(word)) {
        responseText = responses[word];
        break;
      }
    }
    // If no predefined response matches, handle phone number, email, and thank you logic
    if (!responseText) {
      const userMessages = await Message.find({ sender: 'user' }).sort({ createdAt: -1 }).limit(2).lean();

      const lastUserMessage = userMessages[0]?.text || '';
      const secondLastUserMessage = userMessages[1]?.text || '';

      const isPhoneNumber = /^\d{10}$/.test(text);
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);

      const providedPhoneNumber = /^\d{10}$/.test(lastUserMessage) || isPhoneNumber;
      const providedEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lastUserMessage) || isEmail;

      if (!providedPhoneNumber) {
        responseText = "It's very nice to meet you, What is your phone number?";
      } else if (providedPhoneNumber && !providedEmail && !isEmail) {
        responseText = "Please provide your email.";
      } else if (providedPhoneNumber && providedEmail) {
        responseText = "Thank you for providing your details!";
      } else if (!providedPhoneNumber && providedEmail) {
        responseText = "Please provide your phone number.";
      } else {
        responseText = "Sorry, I don't understand that.";
      }
    }

    const userMessage = new Message({ text, sender: 'user' });
    await userMessage.save();

    const botMessage = new Message({ text: responseText, sender: 'bot' });
    await botMessage.save();

    return responseText;
  } catch (error) {
    console.error('Error getting response:', error);
    throw new Error('Error saving messages');
  }
}



module.exports = service;
