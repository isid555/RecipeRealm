import   axios from 'axios';
import  {API_KEY} from "../utils/constants";



export const fetchRecipes = async (filters = {}) => {

    try {
        const params = {
            apiKey: API_KEY,
            cuisine: filters.cuisines?.join(',') || '',
            diet: filters.diets?.join(',') || '',
            excludeIngredients: filters.excludedIngredients?.join(',') || '',
            minReadyTime: filters.timeRange?.min || 0,
            maxReadyTime: filters.timeRange?.max || 120,
        };


        const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', { params });
        return response.data.results;
    }catch (error){
        throw error;
    }

};
