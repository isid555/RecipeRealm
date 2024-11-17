import React, { useState, useEffect } from 'react';
import { Clock, Users, Heart, DollarSign, Circle } from 'lucide-react';
import axios from 'axios';
import { API_KEY } from "../utils/constants";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
                    params: {
                        apiKey: API_KEY
                    }
                });
                setRecipe(response.data);
                setError(null);
            } catch (err) {
                setError('Failed to load recipe');
                console.error('Error fetching recipe:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-green-800 text-xl">Loading recipe...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-red-600 text-xl">{error}</div>
            </div>
        );
    }

    if (!recipe) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-gray-600 text-xl">No recipe found</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">

            <div className="relative h-96 w-full">
                <div className="absolute inset-0">
                    <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.src = "/api/placeholder/800/400";
                            e.target.alt = "Recipe placeholder image";
                        }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40" />
                </div>

                <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-end pb-8">
                    <h1 className="text-4xl font-bold text-white mb-4">{recipe.title}</h1>

                    {/* cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white bg-opacity-90 rounded-lg p-4 backdrop-blur-sm">
                            <div className="flex items-center gap-2 text-green-800">
                                <Clock className="w-5 h-5" />
                                <span className="font-medium">{recipe.readyInMinutes} mins</span>
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-90 rounded-lg p-4 backdrop-blur-sm">
                            <div className="flex items-center gap-2 text-green-800">
                                <Users className="w-5 h-5" />
                                <span className="font-medium">{recipe.servings} servings</span>
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-90 rounded-lg p-4 backdrop-blur-sm">
                            <div className="flex items-center gap-2 text-green-800">
                                <Heart className="w-5 h-5" />
                                <span className="font-medium">{recipe.healthScore}% Health Score</span>
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-90 rounded-lg p-4 backdrop-blur-sm">
                            <div className="flex items-center gap-2 text-green-800">
                                <DollarSign className="w-5 h-5" />
                                <span className="font-medium">${(recipe.pricePerServing / 100).toFixed(2)} per serving</span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Description */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                            <h2 className="text-2xl font-semibold text-green-800 mb-4">About this Recipe</h2>
                            <div
                                className="text-gray-600 leading-relaxed prose max-w-none"
                                dangerouslySetInnerHTML={{ __html: recipe.summary }}
                            />
                        </div>

                        {recipe.instructions && (
                            <div className="bg-white rounded-xl shadow-md p-6">
                                <h2 className="text-2xl font-semibold text-green-800 mb-4">Instructions</h2>
                                <div
                                    className="text-gray-600 leading-relaxed prose max-w-none"
                                    dangerouslySetInnerHTML={{ __html: recipe.instructions }}
                                />
                            </div>
                        )}
                    </div>

                    {/* Right Column - Ingredients */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
                            <h2 className="text-2xl font-semibold text-green-800 mb-4">Ingredients</h2>
                            <ul className="space-y-3">
                                {recipe.extendedIngredients.map((ingredient, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <Circle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                        <span className="text-gray-700">
                                            {ingredient.amount} {ingredient.unit} {ingredient.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetail;