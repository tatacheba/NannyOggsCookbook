// components/BookHeader.tsx
import React from "react";
import { Recipe, RecipeBookProps } from "../types/recipes";
import Ingredients from "./Ingredients";

const BookHeader: React.FC<RecipeBookProps> = ({
  recipes,
  selectRecipe,
  currentRecipe,
}) => {
  const handleSelectRecipe = (recipe: Recipe) => {
    selectRecipe(recipe);
  };

  return (
    <div className="book-header">
      <h1>Nanny Ogg&apos;s Cookbook</h1>
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
      {/* <Ingredients
        recipes={recipes}
        selectRecipe={selectRecipe}
        currentRecipe={currentRecipe}
      /> */}
    </div>
  );
};

export default BookHeader;
