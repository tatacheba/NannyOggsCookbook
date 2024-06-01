// src/controllers/recipeController.js

const recipes = require("../data/recipes.json");

// Получить все рецепты
const getAllRecipes = (req, res) => {
    res.json(recipes);
};

// Получить рецепт по ID
const getRecipeById = (req, res) => {
    const { id } = req.params;
    const recipe = recipes.find((recipe) => recipe.id === id);
    if (recipe) {
        res.json(recipe);
    } else {
        res.status(404).json({ message: "Рецепт не найден" });
    }
};

// Добавить новый рецепт
const addRecipe = (req, res) => {
    const newRecipe = req.body;
    recipes.push(newRecipe);
    res.status(201).json({ message: "Рецепт успешно добавлен", newRecipe });
};

// Обновить существующий рецепт
const updateRecipe = (req, res) => {
    const { id } = req.params;
    const updatedRecipe = req.body;
    const index = recipes.findIndex((recipe) => recipe.id === id);
    if (index !== -1) {
        recipes[index] = updatedRecipe;
        res.json({ message: "Рецепт успешно обновлен", updatedRecipe });
    } else {
        res.status(404).json({ message: "Рецепт не найден" });
    }
};

// Удалить рецепт
const deleteRecipe = (req, res) => {
    const { id } = req.params;
    const index = recipes.findIndex((recipe) => recipe.id === id);
    if (index !== -1) {
        recipes.splice(index, 1);
        res.json({ message: "Рецепт успешно удален" });
    } else {
        res.status(404).json({ message: "Рецепт не найден" });
    }
};

module.exports = {
    getAllRecipes,
    getRecipeById,
    addRecipe,
    updateRecipe,
    deleteRecipe,
};
