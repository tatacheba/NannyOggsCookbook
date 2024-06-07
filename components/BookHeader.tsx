// components/BookHeader.tsx
import React from "react";
import { Recipe, RecipeBookProps } from "../types/recipes";

const BookHeader: React.FC<RecipeBookProps> = ({
    recipes,
    selectRecipe,
    currentRecipe,
}) => {
    const handleSelectRecipe = (recipe: Recipe) => {
        selectRecipe(recipe);
    };

    return (
        <div>
            <div className="book-header">
                <h1>Nanny Ogg's Cookbook</h1>
                {recipes.map((recipe) => (
                    <h2
                        key={recipe.title}
                        onClick={() => handleSelectRecipe(recipe)}
                        className={
                            currentRecipe &&
                            currentRecipe.title === recipe.title
                                ? "selected"
                                : ""
                        }
                    >
                        {recipe.title}
                    </h2>
                ))}
            </div>
        </div>
    );
};

export default BookHeader;
