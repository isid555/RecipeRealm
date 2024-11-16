import React from 'react';
import  {useNavigate} from "react-router-dom";



const RecipeCard = ({ image, name ,id }) => {


    const navigate = useNavigate();

    const handleClick = () => {
        // Open the recipe details page in a new tab
        window.open(`/recipe/${id}`, '_blank');
    };


    return (
        <div className="max-w-md rounded-lg cursor-pointer overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl ">
            <div className="relative">
                <img className="w-full h-72 object-cover rounded-t-lg" src={image} alt={`${name}`} />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300 flex justify-center items-center">
                    <p className="text-white text-3xl font-bold">{name}</p>
                </div>
            </div>
            <div className="p-8 border-t-4 border-green-600">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">{name}</h2>
                <div className="flex justify-center">
                    <button className="mt-4 px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-200 text-xl" onClick={(e) => {
                      handleClick()
                    }}>
                        View Recipe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
