import { useRecoilState, useSetRecoilState, useRecoilValue,useRecoilValueLoadable } from 'recoil';
import { recipesState, searchQueryState,itemState } from "../recoil/atoms";
import { filteredRecipesState } from "../recoil/selectors";
import { fetchRecipes } from "../services/recipeService";
import RecipeCard from "./RecipeCard";
import Loader from "./Loader";
import {useRef} from "react";

const RecipeDisplay = () => {
    const [query, setquery] = useRecoilState(searchQueryState);
    const setRecipes = useSetRecoilState(recipesState);
    const filteredRecipes = useRecoilValue(filteredRecipesState);
    const items = useRecoilValueLoadable(itemState);




    return (
        <div className="max-w-6xl mx-auto p-4">

            <div className="mb-6 flex justify-center">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setquery(e.target.value)}
                    placeholder="Search for recipes..."
                    className="w-full max-w-lg p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                />
            </div>

            <div className={"mb-6"}>
                {items.state === 'loading' && <Loader/>}
                {items.state === 'hasError' && <div>Error...</div>}
            </div>




            {items.state === 'hasValue' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {items.contents.map((item) => (
                        <RecipeCard
                           id={item.id} // Ensure the key is unique for each item
                            name={item.title}
                            image={item.image}
                        />
                    ))}
                </div>
            )}


        </div>
    );
};

export default RecipeDisplay;
