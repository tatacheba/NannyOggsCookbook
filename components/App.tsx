//components\App.tsx
import React, { useEffect, useState } from "react";
import recipesData from "../data/recipes.json";
import BookHeader from "./BookHeader";
import RecipeBook from "./RecipeBook";
import backgroundImage from "../public/background.jpg";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
import {
  Recipe as RecipeType,
  Ingredient as IngredientType,
} from "../types/recipes";

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<RecipeType[]>(
    recipesData.recipes.map((recipe, index) => ({
      id: index,
      title: recipe.title,
      servings: recipe.servings,
      ingredients: recipe.ingredients.map((ingredient: IngredientType) => ({
        name: ingredient.name,
        quantity: ingredient.quantity,
        unit: ingredient.unit,
      })),
      instructions: recipe.instructions,
      notes: recipe.notes,
    })),
  );

  const [currentRecipe, setCurrentRecipe] = useState<RecipeType>(recipes[0]);

  // useEffect(() => {
  //   async function fetchRecipes() {
  //     try {
  //       const response = await fetch(`${apiUrl}/recipes`);
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       setRecipes(data.recipes);
  //       setCurrentRecipe(data.recipes[0]);
  //     } catch (error) {
  //       console.error("Failed to fetch recipes:", error);
  //     }
  //   }

  //   fetchRecipes();
  // }, []);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/recipes`,
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRecipes(data);
        setCurrentRecipe(data[0]);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      }
    }

    fetchRecipes();
  }, []);

  const selectRecipe = (recipe: RecipeType) => {
    setCurrentRecipe(recipe);
  };
  return (
    <div
      className="app"
      style={{
        // use the src property of the image object
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
