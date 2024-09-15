import React from "react";

const TextArea = ({ value, onChange, placeholder, readOnly = false }) => {
    return (
        <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            readOnly={readOnly}
            className="w-full h-64 p-4 resize-none border-none outline-none bg-transparent text-lg"
            spellCheck="false"
        />
    );
};

export default TextArea;