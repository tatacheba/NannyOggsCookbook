// src/routes/recipeRoutes.js

const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

// Маршрут для получения всех рецептов
router.get("/", recipeController.getAllRecipes);

// Маршрут для получения рецепта по ID
router.get("/:id", recipeController.getRecipeById);

// Маршрут для добавления нового рецепта
router.post("/", recipeController.addRecipe);

// Маршрут для обновления существующего рецепта
router.put("/:id", recipeController.updateRecipe);

// Маршрут для удаления рецепта
router.delete("/:id", recipeController.deleteRecipe);

module.exports = router;
