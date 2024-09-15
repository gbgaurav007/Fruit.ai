import React from "react";

const TranslateButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="w-full py-3 mt-5 text-white bg-blue-600 rounded-md"
        >
            Translate Text
        </button>
    );
};

export default TranslateButton;