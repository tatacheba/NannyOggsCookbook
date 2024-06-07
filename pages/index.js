// pages/index.js
import React, { useState, useEffect } from "react";
import BookHeader from "../components/BookHeader";
import RecipeBook from "../components/RecipeBook";
import styles from "./_app";

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [currentRecipe, setCurrentRecipe] = useState(null);

    useEffect(() => {
        // Fetch recipes from the API
        async function fetchRecipes() {
            const response = await fetch("/api/recipes");
            const data = await response.json();
            setRecipes(data.recipes);
            if (data.recipes.length > 0) {
                setCurrentRecipe(data.recipes[0]);
            }
        }
        fetchRecipes();
    }, []);

    const selectRecipe = (recipe) => {
        setCurrentRecipe(recipe);
    };

    return (
        <div className={styles.container}>
            <BookHeader
                recipes={recipes}
                selectRecipe={selectRecipe}
                currentRecipe={currentRecipe}
            />
            {currentRecipe && (
                <RecipeBook
                    recipes={recipes}
                    currentRecipe={currentRecipe}
                    selectRecipe={selectRecipe}
                />
            )}
        </div>
    );
};

export default Home;
