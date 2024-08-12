let service = {}
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const credentials = require('../credential.json');
const Contact = require('../schemas/contact.schema');

service.contactFormSubmission = contactFormSubmission
service.uploadToSheet = uploadToSheet

async function contactFormSubmission(body) {
    const { fullName, email, phone, subject, message } = body;

  const emailTemplate = `
    <html>
      <head></head>
      <body>
        <div style="max-width: 600px; margin: auto; background: #e99e7a; padding: 20px; text-align: center; color: #fff; font-family: 'Roboto', sans-serif;">
          <h1 style="color: #071e43; font-weight: 900; font-family: Roboto;">SkyPro Communication</h1>
          <h2 style="color: #071e43; font-weight: 900;">Contact Form Submission</h2>

          <div style="margin-bottom: 20px;">
            <strong>Full Name:</strong> ${fullName}
          </div>

          <div style="margin-bottom: 20px;">
            <strong>Phone:</strong> ${phone}
          </div>

          <div style="margin-bottom: 20px;">
            <strong>Email:</strong> ${email}
          </div>

          <div style="margin-bottom: 20px;">
            <strong>Subject:</strong> ${subject}
          </div>

          <div style="margin-bottom: 20px;">
            <strong>Message:</strong> ${message}
          </div>
        </div>
      </body>
    </html>
        `;
    try{
        const transporter = nodemailer.createTransport({
            host: process.env.GOOGLE_HOST,
            port: 465,
            secure: true, // true for 465, false for other ports
            // service: "gmail",
            auth: {
                user: process.env.GOOGLE_MAIL,
                pass: process.env.GOOGLE_PASS
            }
        });
        const mailOptions = {
            from: email,
            to: process.env.GOOGLE_MAIL,
            subject: `SkyPro | Contact | ${subject}`,
            html: emailTemplate
        };
        const status = await transporter.sendMail(mailOptions);      
        if(status){
            const newContact = new Contact({
            fullName: fullName,
            email: email,
            phone: phone,
            subject: subject,
            message: message
           });
          const contactData = await newContact.save(); 
          await uploadToSheet(body)
          return status
        }
    }catch(err){
        return Promise.reject({ error: 'Something went wrong.' });
    }
}


async function uploadToSheet(body) {
  console.log(body, "body")
  console.log(process.env.SPREADSHEET_ID, "spreadsheet")
  const { fullName, subject, message, phone, email } = body;
  try {
      const auth = new google.auth.GoogleAuth({
          credentials,
          scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const sheets = google.sheets({ version: 'v4', auth });

      const spreadsheetId = process.env.SPREADSHEET_ID;
      const range = 'skypro';

      const response = await sheets.spreadsheets.values.get({
          spreadsheetId,
          range,
      });

      const existingValues = response.data.values || [];
      const currentDate = await convertDate()
      const newValues = [
          ...(existingValues.length > 0 ? [] : [['Date', 'Name', 'Subject', 'Message', 'Phone', 'Email']]), // Add the header only if it doesn't exist
          ...existingValues, // Add existing values
          [currentDate, fullName, subject, message, phone, email], // Add the new data
      ];

      await sheets.spreadsheets.values.update({
          spreadsheetId,
          range,
          valueInputOption: 'RAW',
          requestBody: {
              values: newValues,
          },
      });
      return { message: 'Subscription successful' };
  } catch (error) {
      return Promise.reject({ error: 'Something went wrong.' });
  }
}


async function convertDate() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate
}

module.exports = service; 
