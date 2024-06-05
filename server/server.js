// server/server.js
import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

import recipesData from "./data/recipes.json" assert { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json()); // for parsing application/json

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/recipes", (req, res) => {
    res.json(recipesData);
});

app.get("/api/recipes/:id", (req, res) => {
    const recipeId = parseInt(req.params.id, 10);
    const recipe = recipesData.recipes.find((r) => r.id === recipeId);
    if (recipe) {
        res.json(recipe);
    } else {
        res.status(404).send("Recipe not found");
    }
});

app.post("/api/recipes", (req, res) => {
    const newRecipe = req.body;
    newRecipe.id = recipesData.recipes.length;
    recipesData.recipes.push(newRecipe);
    res.status(201).json(newRecipe);
});

app.put("/api/recipes/:id", (req, res) => {
    const recipeId = parseInt(req.params.id, 10);
    const updatedRecipe = req.body;
    const recipeIndex = recipesData.recipes.findIndex((r) => r.id === recipeId);

    if (recipeIndex >= 0) {
        recipesData.recipes[recipeIndex] = {
            ...recipesData.recipes[recipeIndex],
            ...updatedRecipe,
        };
        res.json(recipesData.recipes[recipeIndex]);
    } else {
        res.status(404).send("Recipe not found");
    }
});

app.delete("/api/recipes/:id", (req, res) => {
    const recipeId = parseInt(req.params.id, 10);
    const recipeIndex = recipesData.recipes.findIndex((r) => r.id === recipeId);

    if (recipeIndex >= 0) {
        const deletedRecipe = recipesData.recipes.splice(recipeIndex, 1);
        res.json(deletedRecipe);
    } else {
        res.status(404).send("Recipe not found");
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
