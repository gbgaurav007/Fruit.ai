import React from "react";
import { Link } from "react-router-dom"

/* Fruit.Ai 

position: absolute;
width: 296px;
height: 38px;
left: 39px;
top: 54px;

font-family: 'Dosis';
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 38px;
identical to box height 
display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;

*/

export default function Home() {
    return (
        <div className="bg-gradient-to-tr from-sky-950 from-40% via-blue-900 via-75% to-blue-800 to-90% w-full h-screen ">
            <div className="font-dosis flex justify-center pt-4 text-5xl font-semibold text-transparent bg-gradient-to-tr bg-clip-text from-sky-300 via-pink-300 to-red-500">Fruit.Ai</div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center pt-10 p-4">

            <Link to="/chatbot" className="bg-green-400 rounded-lg text-white h-40 flex items-center justify-center">
                Chatbot
            </Link>

            <div className="bg-blue-400 rounded-lg text-white h-40 flex items-center justify-center">
            </div>

            <div className="bg-blue-500 rounded-lg text-white h-40 flex items-center justify-center">
            </div>

            <Link to="/translator" className="bg-blue-500 rounded-lg text-white h-40 flex items-center justify-center">
                Translator
            </Link>

            <Link to="/faq" className="bg-purple-400 rounded-lg text-white h-40 flex items-center justify-center">
                FAQ
            </Link>

            <Link to="/about" className="bg-yellow-400 rounded-lg text-white h-40 flex items-center justify-center">
                About
            </Link>
        </div>
        </div>
    );
}
