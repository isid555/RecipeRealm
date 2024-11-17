import React from 'react';

const IngredientsList = ({ ingredients }) => {
    if (!ingredients || ingredients.length === 0)
        return <div className="text-center text-white text-lg mt-5">No ingredients available</div>;

    return (
        <div className="bg-green-700 p-5 rounded-lg text-white max-w-3xl mx-auto">
            <h2 className="text-center text-white mb-5 text-2xl">Ingredients:</h2>
            <ul className="list-none p-0">
                {ingredients.map((ingredient, index) => (
                    <li
                        key={index}
                        className="flex items-center mb-5 bg-green-800 p-3 rounded-md"
                    >
                        <img
                            src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                            alt={ingredient.name}
                            className="w-12 h-12 rounded-full mr-4 border-2 border-white"
                        />
                        <div>
                            <strong className="text-white text-lg">{ingredient.name}</strong>
                            <div className="text-gray-300 text-sm">
                                Metric - {ingredient.amount.metric.value} {ingredient.amount.metric.unit}
                            </div>
                            <div className="text-gray-300 text-sm">
                                US - {ingredient.amount.us.value} {ingredient.amount.us.unit}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IngredientsList;
