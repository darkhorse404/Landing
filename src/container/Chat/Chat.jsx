import React, { useState } from 'react';
import "../../App.css";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { FaComments, FaTimes } from "react-icons/fa";

function Chat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // For toggling chatbox

  // Sample product data
  const products = [
  ];

  // Function to handle form submission
  async function generateAnswer(e) {
    e.preventDefault();
    setGeneratingAnswer(true);
    
    // Check if the question includes "BharatSe"
    if (question.toLowerCase().includes("bharatse")) {
      setAnswer(
        `Thank you for your interest in BharatSe! We're excited to connect you with authentic traditional products. 
        Here are some popular items you might love:\n
        ${products.map(product => `${product.name} - ${product.price}`).join('\n')}
        \nFeel free to ask more about any product or our services!`
      );
      setQuestion(""); // Clear the question after generating the answer
      setGeneratingAnswer(false);
      return; // Exit the function early
    }

    setAnswer("Loading your Personalized Answer...");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBqi9tPth3tQlaWJyRzU-SVEDr3-qY9bds`, // Replace with actual key
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setQuestion(""); // Clear the question after generating the answer
    setGeneratingAnswer(false);
  }

  // Function to handle Enter key press in the textarea
  function handleKeyDown(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();  // Prevent adding a new line
      generateAnswer(e);    // Trigger the form submission
    }
  }

  return (
    <>
      {/* Floating Button with Icons */}
      <div
        className="fixed p-4 text-white transition-all duration-300 transform bg-orange-600 rounded-full shadow-lg cursor-pointer z-1000 bottom-8 right-8 hover:bg-orange-500 hover:scale-105"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <FaTimes size={24} />  // Close icon when open
        ) : (
          <FaComments size={24} />  // Chat icon when closed
        )}
      </div>

      {/* Larger Animated Chatbox */}
      <div
        className={`fixed z-1000 bottom-16 right-6 bg-white w-96 h-[30rem] rounded-lg shadow-lg p-6 flex flex-col transition-all duration-500 ease-in-out transform ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
        style={{ transformOrigin: "bottom right" }} // Animation origin for smooth open/close
      >
        {/* Heading with Animation */}
        <h2 className="mb-4 text-2xl font-bold text-orange-600">
          Your Personalized <span className='text-green-700'>Chatbot</span> 
        </h2>

        <form onSubmit={generateAnswer} className="flex flex-col flex-grow">
          <textarea
            required
            className="w-full p-3 my-2 border border-gray-300 rounded focus:border-blue-400 focus:shadow-lg"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask anything"
            onKeyDown={handleKeyDown}  // Add the key down listener here
          ></textarea>
          <button
            type="submit"
            className={`bg-orange-600 text-white p-3 rounded-md mt-2 transition-all duration-300 genarate ${
              generatingAnswer ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={generatingAnswer}
          >
            Generate Answer
          </button>
        </form>

        <div className="h-56 overflow-auto bg-gray-100 rounded-lg p-3mt-4">
          <ReactMarkdown>{answer}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default Chat;