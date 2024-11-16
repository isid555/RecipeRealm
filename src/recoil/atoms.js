import { atom, selector } from 'recoil';
import   axios from 'axios';
import  {API_KEY} from "../utils/constants";
import {fetchRecipes} from "../services/recipeService";

export const searchQueryState = atom({
    key:"searchQueryState",
    default:''
})


export const  recipesState = atom({
    key:'recipesState',
    default:[]
})

export const  itemState = atom({
    key:'itemState',
    default:selector({
        key:'itemsSelector',
        get : async ({get}) =>{
           const query = get(searchQueryState);
           // if(!query){
           //     return [];
           // }

            try{
                const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch` , {
                    params:{
                        query,
                        apiKey : API_KEY
                    }
                });
                return response.data.results;
            }catch (error){
                console.log('Error fetching recipes',error)
                throw  error;
            }

        }
    })
})