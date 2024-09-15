import React from "react";
import countries from "./countries";

const LanguageSelect = ({ selectedLanguage, onChange, id }) => {
    return (
        <select
            value={selectedLanguage}
            onChange={onChange}
            className="p-2 text-lg outline-none"
        >
            {Object.entries(countries).map(([code, language]) => (
                <option key={code} value={code}>
                    {language}
                </option>
            ))}
        </select>
    );
};

export default LanguageSelect;