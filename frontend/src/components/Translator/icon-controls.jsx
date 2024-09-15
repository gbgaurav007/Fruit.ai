import React from "react";

const IconControls = ({ onCopy, onSpeak, id }) => {
    return (
        <div className="flex space-x-4">
            <i
                className="fas fa-volume-up cursor-pointer"
                onClick={() => onSpeak(id)}
            ></i>
            <i
                className="fas fa-copy cursor-pointer"
                onClick={() => onCopy(id)}
            ></i>
        </div>
    );
};

export default IconControls;