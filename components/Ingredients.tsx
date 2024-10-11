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
    <div className="ingredients">
      <h1>Ingredients</h1>
      {recipes.map((recipe) =>
        recipe.ingredients.map((ingredient, index) => (
          <h3 key={index}>{ingredient.name}</h3>
        )),
      )}
    </div>
  );
};

export default BookHeader;
