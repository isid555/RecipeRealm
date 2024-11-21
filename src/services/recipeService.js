

import axios from 'axios';
import { API_KEY } from "../utils/constants";

export const fetchRecipes = async (query, filters) => {
    try {

        const params = {
            query,
            apiKey: API_KEY,
            cuisine: filters.cuisines.join(','),
            diet: filters.diets.join(','),
            minReadyTime: filters.timeRange.min,
            maxReadyTime: filters.timeRange.max,
            excludeIngredients: filters.excludedIngredients.join(','),
        };


        const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
            params,
        });


        return response.data.results;
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error;
    }
};
