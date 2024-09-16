import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser.jsx';
import config from "./config";

function ChatbotApp() {
    return (
        <div className="bg-gradient-to-tr from-sky-950 from-40% via-blue-900 via-75% to-blue-800 to-90% min-h-screen bg-gray-50 flex items-center justify-center">
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