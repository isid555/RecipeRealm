import {atom, selector} from 'recoil';
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
            const filters = get(filterState);
           // if(!query){
           //     return [];
           // }

            try{
                return await fetchRecipes(query, filters);
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