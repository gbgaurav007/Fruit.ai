
import React, { useState } from "react";
import TextArea from "./Textarea";
import LanguageSelect from "./LanguageSelect";
import IconControls from "./icon-controls";
import ExchangeButton from "./ExchangeButton";
import TranslateButton from "./TranslateButton";
import { translateText } from "../../hooks/useTranslator";
import './style.css'


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
        <div className="container max-w-xl p-6 bg-white shadow-lg rounded-lg">
            <div className="wrapper border border-gray-300 rounded-md">
                <div className="text-input flex border-b border-gray-300">
                    <TextArea value={fromText} onChange={(e) => setFromText(e.target.value)} placeholder="Enter text" />
                    <TextArea value={toText} readOnly placeholder="Translation" />
                </div>
                <div className="controls flex justify-between p-4">
                    <div className="row flex items-center space-x-4">
                        <IconControls onCopy={handleCopy} onSpeak={handleSpeak} id="from" />
                        <LanguageSelect selectedLanguage={fromLang} onChange={(e) => setFromLang(e.target.value)} />
                    </div>
                    <ExchangeButton onClick={handleExchange} />
                    <div className="row flex items-center space-x-4">
                        <LanguageSelect selectedLanguage={toLang} onChange={(e) => setToLang(e.target.value)} />
                        <IconControls onCopy={handleCopy} onSpeak={handleSpeak} id="to" />
                    </div>
                </div>
            </div>
            <TranslateButton onClick={handleTranslate} />
        </div>
    );
}

export default Translator;