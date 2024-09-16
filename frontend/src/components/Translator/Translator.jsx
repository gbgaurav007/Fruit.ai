import React, { useState } from "react";
import TextArea from "./Textarea";
import LanguageSelect from "./LanguageSelect";
import IconControls from "./icon-controls";
import ExchangeButton from "./ExchangeButton";
import TranslateButton from "./TranslateButton";
import { translateText } from "../../hooks/useTranslator";
import { Link } from 'react-router-dom';

function Translator() {
    const [fromText, setFromText] = useState("");
    const [toText, setToText] = useState("");
    const [fromLang, setFromLang] = useState("en-GB");
    const [toLang, setToLang] = useState("hi-IN");

    const handleExchange = () => {
        setFromText(toText);
        setToText(fromText);
        setFromLang(toLang);
        setToLang(fromLang);
    };

    const handleTranslate = async () => {
        if (!fromText.trim()) return;
        setToText("Translating...");
        const translatedText = await translateText(fromText, fromLang, toLang);
        setToText(translatedText);
    };

    const handleCopy = (id) => {
        const text = id === "from" ? fromText : toText;
        navigator.clipboard.writeText(text);
    };

    const handleSpeak = (id) => {
        const text = id === "from" ? fromText : toText;
        const lang = id === "from" ? fromLang : toLang;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        speechSynthesis.speak(utterance);
    };

    return (
        <div className="bg-gradient-to-tr from-sky-950 from-40% via-blue-900 via-75% to-blue-800 to-90% flex flex-col min-h-screen">

            <div className="absolute md:top-12 md:left-12 top-4 left-6 hover:scale-110">
                <Link to="/home" className='flex flex-row'>
                    <img
                        src='back.png'
                        alt="Back"
                        className="md:w-10 md:h-9 w-8 h-7"
                    />
                </Link>
            </div>

            <div className="p-10 mt-20 font-dosis md:text-5xl text-4xl font-bold text-transparent bg-gradient-to-tr bg-clip-text from-yellow-300 via-rose-500 to-red-600 text-center">
                Translator
            </div>

            <div className="flex items-center justify-center p-6">
                <div className="w-full bg-white p-6 shadow-lg rounded-lg max-w-xl">
                    <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
                        <div className="border border-gray-300 rounded-md w-full sm:w-1/2">
                            <TextArea
                            value={fromText}
                            onChange={(e) => setFromText(e.target.value)}
                            placeholder="Enter text"
                            className="h-64 w-full resize-none border-none outline-none bg-transparent text-lg p-4"
                        />
                        </div>

                        <div className="border border-gray-300 rounded-md w-full sm:w-1/2">
                            <TextArea
                            value={toText}
                            readOnly
                            placeholder="Translation"
                            className="h-64 w-full resize-none border-none outline-none bg-transparent text-lg p-4"
                        />
                        </div>
                    </div>

                    <div className="flex justify-between p-4">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 sm:mb-0">
                            <div className="hidden sm:flex space-x-4 mt-2">
                                <IconControls onCopy={handleCopy} onSpeak={handleSpeak} id="from" />
                            </div>
                            <div className="flex-1 overflow-x-scroll whitespace-nowrap">
                                <LanguageSelect selectedLanguage={fromLang} onChange={(e) => setFromLang(e.target.value)} />
                            </div>
                        </div>

                        <ExchangeButton onClick={handleExchange} />

                        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 sm:mb-0">
                            <div className="flex-1 overflow-x-scroll whitespace-nowrap">
                                <LanguageSelect selectedLanguage={toLang} onChange={(e) => setToLang(e.target.value)} />
                            </div>
                            <div className="hidden sm:flex space-x-4 mt-2">
                                <IconControls onCopy={handleCopy} onSpeak={handleSpeak} id="to" />
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleTranslate}
                        className="w-full py-3 mt-5 text-white bg-blue-600 rounded-md"
                    >
                        Translate
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Translator;
