import React from 'react';
import { Link } from 'react-router-dom';
import ChatbotImage from '/src/assets/chatbot.png';

const ChatbotContainer = () => {
  return (
    <div className="fixed md:bottom-8 bottom-4 right-0 poppins cursor-pointer">
      <Link to="/chat" className="relative flex items-center bg-[var(--opac2)] dark:bg-[var(--bg1lop)] backdrop-blur-xl border-[1px] border-[var(--opac2)] dark:border-[var(--bg1lop)] text-white rounded-l-xl shadow-black/70 dark:shadow-black-40 dark:shadow-lg shadow-2xl">
      <span className="relative animate-ping inline-flex rounded-full h-3 w-3 bg-[var(--lgold)] hidden md:inline-block"></span>
      <div className="md:mr-20 mr-14 p-3">
          <p className="font-medium text-sm md:text-lg">Got questions? Hit me up, boss!</p>
          <p className="text-sm text-[var(--lgold)] hidden md:inline-block">I'm Trevor, Your chat assistant</p>
        </div>
        <div className="absolute bg-clip-padding right-0 md:bottom-9 bottom-[35px] h-full">
          <img src={ChatbotImage} alt="Chatbot Icon" className="md:w-20 w-14" />
        </div>
      </Link>
    </div>
  );
};

export default ChatbotContainer;
