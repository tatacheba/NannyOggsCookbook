import React, { useState, useEffect } from "react";
import { RecipeBookProps } from "../types/recipes";

const RecipeBook: React.FC<RecipeBookProps> = ({
    recipes,
    currentRecipe,
    selectRecipe,
}) => {
    const [currentIndex, setCurrentIndex] = useState<number>(
        currentRecipe
            ? recipes.findIndex(
                  (recipe) => recipe.title === currentRecipe.title
              )
            : 0
    );

    useEffect(() => {
        if (currentRecipe) {
            setCurrentIndex(
                recipes.findIndex(
                    (recipe) => recipe.title === currentRecipe.title
                )
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
        <div>
            <button className="button-left" onClick={previousRecipe}></button>
            <button className="button-right" onClick={nextRecipe}></button>
        </div>
    );
};

export default RecipeBook;
