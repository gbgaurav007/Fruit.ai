import React, { useState } from 'react';
import appleImage from '../../assets/apple.jpeg';
import bananaImage from '../../assets/banana.jpeg';
import tangerineImage from '../../assets/tangerine.jpeg';
import mangoImage from '../../assets/mango.jpeg';
import strawberryImage from '../../assets/strawberry.jpeg';
import kiwiImage from '../../assets/kiwi.jpeg';
import watermelonImage from '../../assets/watermelon.jpeg';

const imageMap = {
  apple: appleImage,
  banana: bananaImage,
  tangerine: tangerineImage,
  mango: mangoImage,
  strawberry: strawberryImage,
  kiwi: kiwiImage,
  watermelon: watermelonImage
};

const FAQCard = ({ fruitName, question, answer, onEdit, onDelete }) => {
  const [hovered, setHovered] = useState(false);
  const fruitImage = imageMap[fruitName.toLowerCase()] || '';

  return (
    <div
      className={`relative bg-white shadow-lg rounded-lg p-6 mb-8 transition-transform transform ${
        hovered ? 'scale-105 shadow-xl' : 'scale-100'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center">
        <div className="w-24 h-24 flex-shrink-0">
          <img
            src={fruitImage}
            alt={fruitName}
            className="w-full h-full object-cover rounded-full border-4 border-green-200"
          />
        </div>

        <div className="ml-6">
          <h2 className="text-xl font-bold text-gray-800">{fruitName}</h2>
          <p className="mt-2 text-lg font-semibold text-green-600">{question}</p>
        </div>
      </div>

      <div className="mt-4 text-gray-700">
        <p className="text-base leading-relaxed">{answer}</p>
      </div>

      {hovered && (
        <div className="absolute flex top-2 right-2 space-x-2 p-1">
          <button
            onClick={onEdit}
            className="bg-blue-500 text-white px-2 py-1 text-sm rounded-lg hover:bg-blue-700 transition duration-200"
          >
            ✎ Edit
          </button>
          <button
            onClick={() => {
                onDelete();
            }}
            className="bg-red-500 text-white px-2 py-1 text-sm rounded-lg hover:bg-red-700 transition duration-200"
          >
            ✗ Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default FAQCard;
