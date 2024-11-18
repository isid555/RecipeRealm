import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { searchQueryState, filterState, recipesState } from '../recoil/atoms';

const useRecipeFilters = () => {
    const [query, setQuery] = useRecoilState(searchQueryState);
    const [filters, setFilters] = useRecoilState(filterState);
    const setRecipes = useSetRecoilState(recipesState);

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    const clearFilter = (type, value) => {
        const newFilters = { ...filters };
        if (type === 'cuisine') {
            newFilters.cuisines = filters.cuisines.filter(c => c !== value);
        } else if (type === 'diet') {
            newFilters.diets = filters.diets.filter(d => d !== value);
        } else if (type === 'ingredient') {
            newFilters.excludedIngredients = filters.excludedIngredients.filter(i => i !== value);
        } else if (type === 'time') {
            newFilters.timeRange = { min: 0, max: 120 };
        }
        setFilters(newFilters);
    };

    const clearAllFilters = () => {
        setFilters({
            cuisines: [],
            diets: [],
            timeRange: { min: 0, max: 120 },
            excludedIngredients: []
        });
        setQuery('');
    };

    const hasActiveFilters = () => {
        return filters.cuisines.length > 0 ||
            filters.diets.length > 0 ||
            filters.excludedIngredients.length > 0 ||
            filters.timeRange.min > 0 ||
            filters.timeRange.max < 120 ||
            query.length > 0;
    };

    return {
        query,
        setQuery,
        filters,
        handleFilterChange,
        clearFilter,
        clearAllFilters,
        hasActiveFilters,
    };
};

export default useRecipeFilters;
