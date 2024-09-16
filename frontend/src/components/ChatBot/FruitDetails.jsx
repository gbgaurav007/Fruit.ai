import React from "react";

const FruitDetails = (props) => {
    //console.log('Received props:', props);

    const noOfMessages = props.state.messages.length;
    
    const lastMessage = props.state.messages[noOfMessages - 1];
    const fruit = lastMessage.props && lastMessage.props.fruit ? lastMessage.props.fruit : null;
    
    const fruitDetails = {
        Apple: { name: "Apple", color: "Red", calories: 52 },
        Banana: { name: "Banana", color: "Yellow", calories: 96 },
        Orange: { name: "Orange", color: "Orange", calories: 43 },
    };

    if (!fruit) {
        return (
            <div className="border-2 border-indigo-500 bg-white rounded-lg p-6 text-center mt-8">
                <h2 className="text-2xl font-semibold">No fruit selected</h2>
                <p className="mt-4 text-lg">Please select a fruit to see its details.</p>
            </div>
        );
    }

    //console.log("Selected fruit:", fruit);

    const details = fruitDetails[fruit] || { name: "Unknown", color: "Unknown", calories: "Unknown" };

    return (
        <div className="border-2 border-indigo-500 bg-white rounded-lg p-6 text-center mt-8">
            <h2 className="text-2xl font-semibold">{details.name}</h2>
            <p className="mt-4 text-lg">Color: {details.color}</p>
            <p className="mt-2 text-lg">Calories: {details.calories}</p>
        </div>
    );
};

export default FruitDetails;
