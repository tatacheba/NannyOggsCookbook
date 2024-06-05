//RecipeCard.ts
import React from "react";
import { RecipeCardProps } from "../types/recipes";

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    return (
        <div>
            <h2>{recipe.title}</h2>
            {/* Отображение других деталей рецепта */}
        </div>
    );
};

export default RecipeCard;
