// import React, { useState, useEffect, useRef } from 'react';
// import indicator from '../../assets/images/indicator.webp';
// import { FaRobot } from "react-icons/fa";
// import { TbSend } from "react-icons/tb";
// import { PostRequest } from '../../utils/requests';

// const initialMessages = [
//   { text: "Welcome to Skypro.", sender: 'bot' },
//   { text: "Help me to know you better, What is your name?", sender: 'bot' }
// ];

// const defaultMessages = [
//   { text: "What is skypro", sender: 'bot' },
//   { text: "skypro yearly plans", sender: 'bot' },
//   { text: "Know more about skypro", sender: 'bot' }
// ];

// const Chatbot = () => {
//   const [messages, setMessages] = useState(initialMessages);
//   const [input, setInput] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [typing, setTyping] = useState(false);
//   const messagesEndRef = useRef(null);

//   const sendMessage = (text) => {
//     if (!text.trim()) return;

//     setMessages((prevMessages) => [...prevMessages, { text, sender: 'user' }]);
//     setInput('');
//     setLoading(true);
//     setTyping(true);
//     PostRequest(`${process.env.REACT_APP_API_URL}/chat/message`, { text })
//       .then((response) => {
//         setTimeout(() => {
//           setMessages((prevMessages) => [...prevMessages, { text: response.data.message, sender: 'bot' }]);
//           setLoading(false);
//           setTyping(false);
//         }, 1500);
//       })
//       .catch((error) => {
//         console.error('Error sending message:', error);
//         setMessages((prevMessages) => [...prevMessages, { text: 'Error: Could not send message.', sender: 'bot' }]);
//         setLoading(false);
//         setTyping(false);
//       });
//   };

//   const handleMessage = (text) => {
//     setInput(text);
//     sendMessage(text);
//   };

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   return (
//     <div className="flex justify-center items-center">
//       <div className="rounded-2xl w-80 h-[500px] flex flex-col">
//         <div className="flex items-center justify-between px-4 py-[15px] bg-[#fd5901] text-white rounded-t-xl">
//           <h3 className='mb-0 text-white' style={{ fontFamily: 'Roboto, sans-serif' }}>Chat With Us</h3>
//         </div>

//         <div className="flex-1 overflow-y-auto p-4 bg-[#f5f5f5]">
//           {messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`mb-[20px] p-3 rounded-lg flex items-center relative ${msg.sender === 'user'
//                 ? 'bg-[#d8ddf0] self-end ml-auto max-w-max	w-[calc(100%_-_40px)]'
//                 : 'bg-[#fff] ml-[40px]'
//                 }`}
//             >
//               {msg.sender === 'bot' && <FaRobot className="absolute top-0 -left-[40px] text-[30px]" />}
//               <span className="text-[16px]">{msg.text}</span>
//               {/* {msg.sender === 'user' && <FaUser className="ml-2" />} */}
//             </div>
//           ))}
//           {typing && (
//             <div className="flex items-center mb-2">
//               <img src={indicator} className="h-8 w-8 mr-2" alt="Typing..." />
//               <span className="text-[16px] text-gray-500">typing...</span>
//             </div>
//           )}
//           <div>
//             {defaultMessages.map((msg, index) => (
//               <button
//                 key={index}
//                 className="py-[10px] px-[15px] bg-[#061e43] rounded-[5px] text-white text-[16px] w-full mb-[5px]"
//                 onClick={() => handleMessage(msg.text)}
//               >
//                 {msg.text}
//               </button>
//             ))}
//           </div>
//           <div ref={messagesEndRef} />
//         </div>

//         <div className="flex items-center p-4 border-t border-gray-200 bg-[#fd5901] rounded-b-xl">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyPress={(e) => e.key === 'Enter' && !loading && sendMessage(input)}
//             disabled={loading}
//             placeholder="Type a message..."
//             className="flex-1 p-2 text-[#000] rounded-[5px] bg-white mr-2 placeholder:caret-orange-600 placeholder:text-[#000]"
//           />
//           <button
//             onClick={() => sendMessage(input)}
//             disabled={loading}
//             className={`p-2 rounded-[5px] text-white ${loading ? 'bg-[#061e43]' : 'bg-[#061e43] cursor-pointer'}`}
//           >
//             <TbSend className='text-[22px]' />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;
