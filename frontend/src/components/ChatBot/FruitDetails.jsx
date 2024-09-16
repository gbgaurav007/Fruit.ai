import React from "react";

const FruitDetails = (props) => {
    console.log('Received props:', props);
    // Fruit details object
    const { fruit } = props;

    const fruitDetails = {
        Apple: { name: "Apple", color: "Red", calories: 52 },
        Banana: { name: "Banana", color: "Yellow", calories: 96 },
        Orange: { name: "Orange", color: "Orange", calories: 43 },
    };
    console.log("Selected fruit:", fruit)
    // Get details for the selected fruit
    const details = fruit && fruitDetails[fruit] ? fruitDetails[fruit] : { name: "Unknown", color: "Unknown", calories: "Unknown" };

    console.log(details);

    if (!details) {
        return (
            <div className="border-2 border-indigo-500 bg-white rounded-lg p-6 text-center mt-8">
                <h2 className="text-2xl font-semibold">Fruit not found</h2>
                <p className="mt-4 text-lg">Please select a valid fruit.</p>
            </div>
        );
    }

    return (
        <div className="border-2 border-indigo-500 bg-white rounded-lg p-6 text-center mt-8">
            <h2 className="text-2xl font-semibold">{details.name}</h2>
            <p className="mt-4 text-lg">Color: {details.color}</p>
            <p className="mt-2 text-lg">Calories: {details.calories}</p>
        </div>
    );
};

export default FruitDetails;