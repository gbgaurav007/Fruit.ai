import React, { useState } from "react";
import TextArea from "./Textarea";
import LanguageSelect from "./LanguageSelect";
import IconControls from "./icon-controls";
import ExchangeButton from "./ExchangeButton";
import TranslateButton from "./TranslateButton";
import { translateText } from "../../hooks/useTranslator";

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
        <div className="bg-gradient-to-tr from-sky-950 from-40% via-blue-900 via-75% to-blue-800 to-90%">
        <div className="flex items-center justify-center min-h-screen p-5">
            <div className="w-full bg-white p-6 shadow-lg rounded-lg max-w-xl">
                <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
                    {/* Left Text Area (From Text) */}
                    <div className="border border-gray-300 rounded-md w-full sm:w-1/2">
                        <TextArea
                            value={fromText}
                            onChange={(e) => setFromText(e.target.value)}
                            placeholder="Enter text"
                            className="h-64 w-full resize-none border-none outline-none bg-transparent text-lg p-4"
                        />
                    </div>
                    
                    {/* Right Text Area (To Text) */}
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
                    {/* Language Selectors and Icons (Left Side) */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 sm:mb-0">
                        {/* Hide Icons on Mobile */}
                        <div className="hidden sm:flex space-x-4 mt-2">
                            <IconControls onCopy={handleCopy} onSpeak={handleSpeak} id="from" />
                        </div>
                        {/* Scrollable Language Select on Mobile */}
                        <div className="flex-1 overflow-x-scroll whitespace-nowrap">
                            <LanguageSelect selectedLanguage={fromLang} onChange={(e) => setFromLang(e.target.value)} />
                        </div>
                    </div>

                    {/* Exchange Button */}
                    <ExchangeButton onClick={handleExchange} />

                    {/* Language Selectors and Icons (Right Side) */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 sm:mb-0">
                        {/* Scrollable Language Select on Mobile */}
                        <div className="flex-1 overflow-x-scroll whitespace-nowrap">
                            <LanguageSelect selectedLanguage={toLang} onChange={(e) => setToLang(e.target.value)} />
                        </div>
                        {/* Hide Icons on Mobile */}
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