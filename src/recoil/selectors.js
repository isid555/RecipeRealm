import {selector} from 'recoil'

import {searchQueryState,recipesState} from "./atoms"


//this filter will give only the recipes based on user queries

export  const filteredRecipesState  = selector({
    key:'filteredRecipes',
    get: ({get}) =>{
        const recipes = get(recipesState)
        const query = get(searchQueryState).toLowerCase()
        return recipes.filter(recipe =>recipe.title.toLowerCase().includes(query))

    }
})

