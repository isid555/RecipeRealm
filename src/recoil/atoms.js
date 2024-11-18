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



export const filterState = atom({
    key: 'filterState',
    default: {
        cuisines: [],
        diets: [],
        timeRange: {
            min: 0,
            max: 120
        },
        excludedIngredients: []
    }
});

export const cuisinesFilterState = selector({
    key: 'cuisinesFilterState',
    get: ({get}) => get(filterState).cuisines
});

export const dietsFilterState = selector({
    key: 'dietsFilterState',
    get: ({get}) => get(filterState).diets
});

export const timeRangeFilterState = selector({
    key: 'timeRangeFilterState',
    get: ({get}) => get(filterState).timeRange
});

export const excludedIngredientsFilterState = selector({
    key: 'excludedIngredientsFilterState',
    get: ({get}) => get(filterState).excludedIngredients
});