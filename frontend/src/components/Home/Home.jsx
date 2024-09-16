import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gradient-to-tr from-sky-950 via-blue-900 to-blue-800 w-full h-screen">
      <div className="font-dosis flex justify-center pt-4 text-5xl font-semibold text-transparent bg-gradient-to-tr bg-clip-text from-sky-300 via-pink-300 to-red-500">
        Fruit.Ai
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center pt-10 p-8">

        <Link to="/chatbot" className="bg-yellow-800 border-2 border-yellow-950 rounded-lg text-white h-40 flex flex-col items-center justify-center p-2 hover:opacity-85 shadow-2xl">
          <img src='chatbot_icon.png' alt="Chatbot" className="h-14 w-14 mb-2" />
          <span className="text-lg sm:text-xl font-bold">Chatbot</span>
        </Link>

        <div className="bg-teal-500 border-2 border-teal-700 rounded-lg text-white h-40 flex items-center justify-center hover:opacity-85 shadow-2xl blur-xs">
          <span className="text-lg sm:text-xl font-bold"></span>
        </div>

        <div className="bg-sky-500 border-2 border-sky-700 rounded-lg text-white h-40 flex items-center justify-center hover:opacity-85 shadow-2xl blur-xs">
          <span className="text-lg sm:text-xl font-bold"></span>
        </div>

        <Link to="/translator" className="bg-rose-500 border-2 border-rose-700 rounded-lg text-white h-40 flex flex-col items-center justify-center p-2 hover:opacity-85 shadow-2xl">
          <img src='translate_icon.png' alt="Translator" className="h-14 w-14 mb-2" />
          <span className="text-lg sm:text-xl font-bold">Translator</span>
        </Link>

        <Link to="/faq" className="bg-purple-500 border-2 border-purple-700 rounded-lg text-white h-40 flex flex-col items-center justify-center p-2 hover:opacity-85 shadow-2xl">
          <img src='faq_icon.png' alt="FAQ" className="h-14 w-14 mb-2" />
          <span className="text-lg sm:text-xl font-bold">FAQ</span>
        </Link>

        <Link to="/about" className="bg-yellow-500 border-2 border-yellow-600 rounded-lg text-white h-40 flex flex-col items-center justify-center p-2 hover:opacity-85 shadow-2xl">
          <img src='about_icon.png' alt="About" className="h-14 w-14 mb-2" />
          <span className="text-lg sm:text-xl font-bold">About</span>
        </Link>
      </div>
    </div>
  );
}
