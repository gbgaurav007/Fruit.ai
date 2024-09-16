import React from 'react';
import { Link } from 'react-router-dom';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser.jsx';
import config from "./config";

function ChatbotApp() {
    return (
        <div className="bg-gradient-to-tr from-sky-950 from-40% via-blue-900 via-75% to-blue-800 to-90% min-h-screen bg-gray-50 flex flex-col items-center">
            <div className="absolute md:top-12 md:left-12 top-4 left-6 hover:scale-110">
                <Link to="/home" className='flex flex-row'>
                    <img
                        src='back.png'
                        alt="Back"
                        className="md:w-10 md:h-9 w-8 h-7"
                    />
                </Link>
            </div>

            <div className="p-10 mt-20 font-dosis md:text-5xl text-4xl font-bold text-transparent bg-gradient-to-tr bg-clip-text from-green-300 via-blue-400 to-teal-500">
                Chatbot
            </div>

            <div className=" bg-gradient-to-tr from-sky-750 from-40% via-blue-800 via-75% to-blue-700 to-90% w-screen max-w-4xl p-8 flex items-center justify-center bg-white shadow-lg rounded-lg">
                <Chatbot
                    config={config}
                    actionProvider={ActionProvider}
                    messageParser={MessageParser}
                />
            </div>
        </div>
    );
}

export default ChatbotApp;
