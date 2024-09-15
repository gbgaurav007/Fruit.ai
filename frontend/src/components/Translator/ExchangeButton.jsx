import React from "react";

const ExchangeButton = ({ onClick }) => {
    return (
        <div className="text-gray-500 cursor-pointer" onClick={onClick}>
            <i className="fas fa-exchange-alt text-xl"></i>
        </div>
    );
};

export default ExchangeButton;