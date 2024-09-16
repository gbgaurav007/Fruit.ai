import React from "react";

const FruitOption = (props) => {
    const fruits = [
        { name: "Apple", handler: () => props.actionProvider.handleFruitDetails("Apple"), id: 1 },
        { name: "Banana", handler: () => props.actionProvider.handleFruitDetails("Banana"), id: 2 },
        { name: "Orange", handler: () => props.actionProvider.handleFruitDetails("Orange"), id: 3 },
    ];

    const fruitMarkup = fruits.map((fruit) => (
        <button
            className="bg-gray-100 border-2 border-indigo-500 rounded-lg p-4 font-bold cursor-pointer text-center hover:bg-indigo-100 transition duration-300"
            key={fruit.id}
            onClick={fruit.handler}
        >
            {fruit.name}
        </button>
    ));

    return <div className="flex flex-wrap gap-4">{fruitMarkup}</div>;
};

export default FruitOption;