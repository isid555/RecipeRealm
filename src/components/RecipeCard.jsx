import React from 'react';

const RecipeCard = ({ image, name  }) => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative">
                <img className="w-full h-48 object-cover" src={image} alt={`${name}`} />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300 flex justify-center items-center">
                    <p className="text-white text-xl font-bold">{name}</p>
                </div>
            </div>
            <div className="p-4 border-t-4 border-green-600">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
                <div className="flex justify-center">
                    <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-200">
                        View Recipe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
