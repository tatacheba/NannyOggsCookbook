//components\RecipeBook.tsx
import React, { useState, useEffect } from "react";
import { RecipeBookProps } from "../types/recipes";
import RecipeCard from "./RecipeCard";
import bookImage from "../public/book.png";
import buttonImage from "../public/button.png";

const RecipeBook: React.FC<RecipeBookProps> = ({
  recipes,
  currentRecipe,
  selectRecipe,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(
    currentRecipe
      ? recipes.findIndex((recipe) => recipe.title === currentRecipe.title)
      : 0,
  );

  useEffect(() => {
    if (currentRecipe) {
      setCurrentIndex(
        recipes.findIndex((recipe) => recipe.title === currentRecipe.title),
      );
    }
  }, [currentRecipe, recipes]);

  const nextRecipe = () => {
    const newIndex = (currentIndex + 1) % recipes.length;
    setCurrentIndex(newIndex);
    selectRecipe(recipes[newIndex]);
  };

  const previousRecipe = () => {
    const newIndex = (currentIndex - 1 + recipes.length) % recipes.length;
    setCurrentIndex(newIndex);
    selectRecipe(recipes[newIndex]);
  };

  return (
    <div
      className="book"
      style={{
        // use the src property of the image object
        backgroundImage: `url(${bookImage.src})`,
        // other styles background: url("../images/background.jpg") no-repeat center center fixed;
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <button
        className="button-left"
        style={{
          // use the src property of the image object
          backgroundImage: `url(${buttonImage.src})`,
        }}
        onClick={previousRecipe}
      ></button>
      <RecipeCard recipe={recipes[currentIndex]} />
      <button
        className="button-right"
        style={{
          // use the src property of the image object
          backgroundImage: `url(${buttonImage.src})`,
        }}
        onClick={nextRecipe}
      ></button>
    </div>
  );
};

export default RecipeBook;
