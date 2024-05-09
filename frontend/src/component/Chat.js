import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost:3000"); // Connect to server

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]); // Use functional update
    });
  
    scrollToBottom();
  
    return () => {
      socket.off("chat message");
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async () => {
    try {
       //await axios("", { message: inputMessage });
      await axios({
        method: "post",
        url: "/Chat",
        data: {
          message: inputMessage,
        },
      });
      console.log("Message sent to backend:");
      // Handle response from backend if needed
    } catch (error) {
      console.error("Error sending message to backend:", error);
      // Handle error if needed
    }
  };
//   const sendMessage = () => {
//     if (inputMessage.trim() !== "") {
//       const newMessage = { text: inputMessage, sender: 'user' }; // Assuming the sender is the user
//       socket.emit("chat message", newMessage); // Emit the message to other clients
//       setMessages([...messages, newMessage]); // Add the new message to the state immediately
//       setInputMessage(""); // Clear the input field after sending the message
  
      // Send the message to the backend
    //   axios.post("/api/sendMessage", { message: inputMessage })
    //     .then(response => {
    //       console.log("Message sent to backend:", response.data);
    //       // Handle response from backend if needed
    //     })
    //     .catch(error => {
    //       console.error("Error sending message to backend:", error);
    //       // Handle error if needed
    //     });
    // }
 // };

  return (
    <div className="flex flex-col h-full">
      <div className="bg-white rounded-lg shadow-md mx-4 my-4 p-4">
        {/* Content above message field */}
        <h2 className="text-xl font-semibold mb-2">Chat Header</h2>
        <p className="text-gray-600">Welcome to the chat!</p>
      </div>
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-16">
        {/* Messages container */}
        {messages.map((msg, index) => (
          <div key={index} className={`flex mb-2 justify-${msg.sender === 'user' ? 'end' : 'start'}`}>
            <div className={`rounded-lg px-4 py-2 ${msg.sender === 'user' ? 'bg-blue-400 text-white self-end' : 'bg-blue-100 text-gray-700 self-start'}`}>
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 flex items-center px-4 py-2">
        {/* Message input field */}
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message here..."
          className="flex-1 px-4 py-2 rounded-full border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
        />
        <button onClick={sendMessage} className="ml-2 px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
