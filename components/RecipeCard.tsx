// components\RecipeCard.tsx
import React from "react";
import { RecipeCardProps } from "../types/recipes";

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div className="book-page">
      <div className="left-page">
        <h2>{recipe.title}</h2>
        <p>(Servings: {recipe.servings})</p>
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              <b>
                {ingredient.quantity} {ingredient.unit ? ingredient.unit : ""}
              </b>{" "}
              {ingredient.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="right-page">
        <h2>Instructions</h2>
        <ol>
          <li key={recipe.id}>{truncateText(recipe.instructions, 300)}</li>
        </ol>
        {recipe.notes && ( // Проверка на существование notes
          <div>
            <h3>Notes</h3>
            <ol>
              <li key={recipe.id}>{truncateText(recipe.notes, 300)}</li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
