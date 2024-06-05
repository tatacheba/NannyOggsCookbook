import React, { useState } from "react";
import recipesData from "./data/recipes.json";
import BookHeader from "./components/BookHeader";
import RecipeBook from "./components/RecipeBook";
import { Recipe, Ingredient } from "./types/recipes";

const App: React.FC = () => {
    const [recipes] = useState<Recipe[]>(
        recipesData.recipes.map((recipe, index) => ({
            id: index,
            title: recipe.title,
            servings: recipe.servings,
            ingredients: recipe.ingredients.map((ingredient: Ingredient) => ({
                name: ingredient.name,
                quantity: ingredient.quantity,
                unit: ingredient.unit,
            })),
            instructions: recipe.instructions,
            notes: Array.isArray(recipe.notes) ? recipe.notes : [recipe.notes],
        }))
    );

    const [currentRecipe, setCurrentRecipe] = useState<Recipe>(recipes[0]);

    const selectRecipe = (recipe: Recipe) => {
        setCurrentRecipe(recipe);
    };

    return (
        <div>
            <BookHeader
                recipes={recipes}
                selectRecipe={selectRecipe}
                currentRecipe={currentRecipe}
            />
            <RecipeBook
                recipes={recipes}
                currentRecipe={currentRecipe}
                selectRecipe={selectRecipe}
            />
        </div>
    );
};

export default App;
