import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { itemState } from "../recoil/atoms";
import useRecipeFilters from '../hooks/useRecipeFilters'; // Import the custom hook
import RecipeCard from "./RecipeCard";
import RecipeFilters from "./RecipeFilters";
import Loader from "./Loader";
import { X } from 'lucide-react';
import Input from "./Input";

const RecipeDisplay = () => {
    const {
        query,
        setQuery,
        filters,
        handleFilterChange,
        clearFilter,
        clearAllFilters,
        hasActiveFilters,
    } = useRecipeFilters(); // Use the custom hook

    const items = useRecoilValueLoadable(itemState);

    const renderRecipes = () => {
        if (items.state === 'loading') return <Loader />;
        if (items.state === 'hasError') return <div>Error loading recipes</div>;
        if (items.state === 'hasValue' && items.contents.length === 0) {
            return <div><h1>No recipes found</h1></div>;
        }
        if (items.state === 'hasValue') {
            return (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.contents.map((item) => (
                        <RecipeCard key={item.id} id={item.id} name={item.title} image={item.image} />
                    ))}
                </div>
            );
        }
        return null;
    };
    const handleQueryChange = (value) => {
        setQuery(value); // Update the query with the debounced value
    };
    return (
        <div className="max-w-7xl mx-auto p-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1">
                    <RecipeFilters onFilterChange={handleFilterChange} currentFilters={filters} />
                </div>
                <div className="lg:col-span-3">

                    <Input value={query} onChange={handleQueryChange} debounceTime={250} />

                    {hasActiveFilters() && (
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-2">
                                <h3>Active Filters</h3>
                                <button onClick={clearAllFilters} className="text-red-500">Clear all</button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {query && (
                                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                                        Search: {query}
                                        <X onClick={() => setQuery('')} className="cursor-pointer" />
                                    </span>
                                )}
                                {filters.cuisines.map(cuisine => (
                                    <span key={cuisine} className="bg-green-100 px-3 py-1 rounded-full">
                                        {cuisine}
                                        <X onClick={() => clearFilter('cuisine', cuisine)} className="cursor-pointer" />
                                    </span>
                                ))}
                                {filters.diets.map(diet => (
                                    <span key={diet} className="bg-blue-100 px-3 py-1 rounded-full">
                                        {diet}
                                        <X onClick={() => clearFilter('diet', diet)} className="cursor-pointer" />
                                    </span>
                                ))}
                                {filters.excludedIngredients.map(ingredient => (
                                    <span key={ingredient} className="bg-red-100 px-3 py-1 rounded-full">
                                        No {ingredient}
                                        <X onClick={() => clearFilter('ingredient', ingredient)} className="cursor-pointer" />
                                    </span>
                                ))}
                                {(filters.timeRange.min > 0 || filters.timeRange.max < 120) && (
                                    <span className="bg-purple-100 px-3 py-1 rounded-full">
                                        {filters.timeRange.min}-{filters.timeRange.max} mins
                                        <X onClick={() => clearFilter('time')} className="cursor-pointer" />
                                    </span>
                                )}
                            </div>
                        </div>
                    )}

                    {renderRecipes()}
                </div>
            </div>
        </div>
    );
};

export default RecipeDisplay;
