import   axios from 'axios';
import  {API_KEY} from "../utils/constants";



export const fetchRecipes = async (query) =>{
    try{
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch` , {
            params:{
                query,
                apiKey : API_KEY
            }
        });
        return response.data.results;
    }catch (error){
        throw  error;
    }
}
