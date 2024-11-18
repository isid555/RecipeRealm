import React, { useState } from 'react';
import { X, ChevronDown, Clock, UtensilsCrossed, Leaf, Ban } from 'lucide-react';

const cuisineTypes = [
    'Italian', 'Mexican', 'Chinese', 'Indian', 'Japanese', 'Thai',
    'Mediterranean', 'French', 'American', 'Greek'
];

const dietaryRestrictions = [
    'Vegetarian', 'Vegan', 'Gluten Free', 'Dairy Free',
    'Keto', 'Paleo', 'Low Carb', 'Low Fat'
];

const RecipeFilters = ({ onFilterChange, currentFilters }) => {
    const [selectedCuisines, setSelectedCuisines] = useState(currentFilters?.cuisines || []);
    const [selectedDiets, setSelectedDiets] = useState(currentFilters?.diets || []);
    const [timeRange, setTimeRange] = useState(currentFilters?.timeRange || { min: 0, max: 120 });
    const [excludedIngredients, setExcludedIngredients] = useState(currentFilters?.excludedIngredients || []);
    const [newIngredient, setNewIngredient] = useState('');
    const [openSection, setOpenSection] = useState('');

    // Handle filter changes
    const handleFilterChange = (newFilters) => {
        onFilterChange({
            cuisines: selectedCuisines,
            diets: selectedDiets,
            timeRange: timeRange,
            excludedIngredients: excludedIngredients,
            ...newFilters
        });
    };

    // Toggle selection functions
    const toggleCuisine = (cuisine) => {
        const newCuisines = selectedCuisines.includes(cuisine)
            ? selectedCuisines.filter(c => c !== cuisine)
            : [...selectedCuisines, cuisine];
        setSelectedCuisines(newCuisines);
        handleFilterChange({ cuisines: newCuisines });
    };

    const toggleDiet = (diet) => {
        const newDiets = selectedDiets.includes(diet)
            ? selectedDiets.filter(d => d !== diet)
            : [...selectedDiets, diet];
        setSelectedDiets(newDiets);
        handleFilterChange({ diets: newDiets });
    };

    // Handle time range changes
    const handleTimeChange = (e, bound) => {
        const value = parseInt(e.target.value) || 0;
        const newTimeRange = { ...timeRange, [bound]: value };
        setTimeRange(newTimeRange);
        handleFilterChange({ timeRange: newTimeRange });
    };

    // Handle excluded ingredients
    const addExcludedIngredient = (e) => {
        e.preventDefault();
        if (newIngredient.trim() && !excludedIngredients.includes(newIngredient.trim())) {
            const newIngredients = [...excludedIngredients, newIngredient.trim()];
            setExcludedIngredients(newIngredients);
            setNewIngredient('');
            handleFilterChange({ excludedIngredients: newIngredients });
        }
    };

    const removeExcludedIngredient = (ingredient) => {
        const newIngredients = excludedIngredients.filter(i => i !== ingredient);
        setExcludedIngredients(newIngredients);
        handleFilterChange({ excludedIngredients: newIngredients });
    };

    // Reset filters
    const resetFilters = () => {
        setSelectedCuisines([]);
        setSelectedDiets([]);
        setTimeRange({ min: 0, max: 120 });
        setExcludedIngredients([]);
        handleFilterChange({
            cuisines: [],
            diets: [],
            timeRange: { min: 0, max: 120 },
            excludedIngredients: []
        });
    };

    // Accordion toggle
    const toggleSection = (section) => {
        setOpenSection(openSection === section ? '' : section);
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-green-800">Filters</h2>
                <button
                    onClick={resetFilters}
                    className="text-sm text-gray-500 hover:text-red-500 transition-colors"
                >
                    Reset all filters
                </button>
            </div>

            {/* Active Filters */}
            {(selectedCuisines.length > 0 || selectedDiets.length > 0 || excludedIngredients.length > 0) && (
                <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                        {selectedCuisines.map(cuisine => (
                            <span
                                key={cuisine}
                                className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm"
                            >
                {cuisine}
                                <X
                                    className="w-4 h-4 cursor-pointer hover:text-red-500"
                                    onClick={() => toggleCuisine(cuisine)}
                                />
              </span>
                        ))}
                        {selectedDiets.map(diet => (
                            <span
                                key={diet}
                                className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
                            >
                {diet}
                                <X
                                    className="w-4 h-4 cursor-pointer hover:text-red-500"
                                    onClick={() => toggleDiet(diet)}
                                />
              </span>
                        ))}
                        {excludedIngredients.map(ingredient => (
                            <span
                                key={ingredient}
                                className="inline-flex items-center gap-1 bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm"
                            >
                {ingredient}
                                <X
                                    className="w-4 h-4 cursor-pointer hover:text-red-500"
                                    onClick={() => removeExcludedIngredient(ingredient)}
                                />
              </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Cuisine Types */}
            <div className="border-t border-gray-200 py-4">
                <button
                    className="w-full flex items-center justify-between text-left"
                    onClick={() => toggleSection('cuisine')}
                >
                    <div className="flex items-center gap-2">
                        <UtensilsCrossed className="w-5 h-5 text-green-600" />
                        <span className="font-medium">Cuisine Types</span>
                    </div>
                    <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                            openSection === 'cuisine' ? 'transform rotate-180' : ''
                        }`}
                    />
                </button>
                {openSection === 'cuisine' && (
                    <div className="mt-2 grid grid-cols-2 gap-2">
                        {cuisineTypes.map(cuisine => (
                            <button
                                key={cuisine}
                                onClick={() => toggleCuisine(cuisine)}
                                className={`px-3 py-2 rounded-md text-sm transition-colors ${
                                    selectedCuisines.includes(cuisine)
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                {cuisine}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Dietary Restrictions */}
            <div className="border-t border-gray-200 py-4">
                <button
                    className="w-full flex items-center justify-between text-left"
                    onClick={() => toggleSection('diet')}
                >
                    <div className="flex items-center gap-2">
                        <Leaf className="w-5 h-5 text-green-600" />
                        <span className="font-medium">Dietary Restrictions</span>
                    </div>
                    <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                            openSection === 'diet' ? 'transform rotate-180' : ''
                        }`}
                    />
                </button>
                {openSection === 'diet' && (
                    <div className="mt-2 grid grid-cols-2 gap-2">
                        {dietaryRestrictions.map(diet => (
                            <button
                                key={diet}
                                onClick={() => toggleDiet(diet)}
                                className={`px-3 py-2 rounded-md text-sm transition-colors ${
                                    selectedDiets.includes(diet)
                                        ? 'bg-blue-100 text-blue-800'
                                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                {diet}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Cooking Time Range */}
            <div className="border-t border-gray-200 py-4">
                <button
                    className="w-full flex items-center justify-between text-left"
                    onClick={() => toggleSection('time')}
                >
                    <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-green-600" />
                        <span className="font-medium">Cooking Time</span>
                    </div>
                    <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                            openSection === 'time' ? 'transform rotate-180' : ''
                        }`}
                    />
                </button>
                {openSection === 'time' && (
                    <div className="mt-4 px-2">
                        <div className="flex items-center gap-4">
                            <div className="flex-1">
                                <label className="block text-sm text-gray-600 mb-1">Min (minutes)</label>
                                <input
                                    type="number"
                                    min="0"
                                    max={timeRange.max}
                                    value={timeRange.min}
                                    onChange={(e) => handleTimeChange(e, 'min')}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm text-gray-600 mb-1">Max (minutes)</label>
                                <input
                                    type="number"
                                    min={timeRange.min}
                                    max="240"
                                    value={timeRange.max}
                                    onChange={(e) => handleTimeChange(e, 'max')}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Excluded Ingredients */}
            <div className="border-t border-gray-200 py-4">
                <button
                    className="w-full flex items-center justify-between text-left"
                    onClick={() => toggleSection('ingredients')}
                >
                    <div className="flex items-center gap-2">
                        <Ban className="w-5 h-5 text-green-600" />
                        <span className="font-medium">Exclude Ingredients</span>
                    </div>
                    <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                            openSection === 'ingredients' ? 'transform rotate-180' : ''
                        }`}
                    />
                </button>
                {openSection === 'ingredients' && (
                    <div className="mt-2">
                        <form onSubmit={addExcludedIngredient} className="flex gap-2">
                            <input
                                type="text"
                                value={newIngredient}
                                onChange={(e) => setNewIngredient(e.target.value)}
                                placeholder="Enter ingredient to exclude"
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-red-100 text-red-800 rounded-md hover:bg-red-200 transition-colors"
                            >
                                Add
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RecipeFilters;