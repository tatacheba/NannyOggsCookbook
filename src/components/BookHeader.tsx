// BookHeader.tsx
import React, { useEffect, useState } from "react";
import { Recipe, RecipeBookProps } from "../types/recipes";

const BookHeader: React.FC<RecipeBookProps> = ({
    selectRecipe,
    currentRecipe,
}) => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        async function fetchRecipes() {
            try {
                const response = await fetch(
                    "http://localhost:3000/api/recipes"
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setRecipes(data.recipes);
            } catch (error) {
                console.error("Failed to fetch recipes:", error);
            }
        }

        fetchRecipes();
    }, []);

    const handleSelectRecipe = (recipe: Recipe) => {
        selectRecipe(recipe);
    };

    return (
        <div className="book-header">
            <h1>Nanny Ogg's Cookbook</h1>
            {recipes.map((recipe) => (
                <h2
                    key={recipe.title}
                    onClick={() => handleSelectRecipe(recipe)}
                    className={
                        currentRecipe && currentRecipe.title === recipe.title
                            ? "selected"
                            : ""
                    }
                >
                    {recipe.title}
                </h2>
            ))}
        </div>
    );
};

export default BookHeader;
