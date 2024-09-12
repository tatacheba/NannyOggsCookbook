// pages/api/recipes.js
import { readFileSync } from "fs";
import { join } from "path";

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Разрешить запросы с любого домена
  const filePath = join(process.cwd(), "data/recipes.json");
  const fileContents = readFileSync(filePath, "utf8");
  const recipesData = JSON.parse(fileContents);

  if (req.method === "GET") {
    const { id } = req.query;
    if (id) {
      const recipeId = parseInt(id, 10);
      const recipe = recipesData.recipes.find((r) => r.id === recipeId);
      if (recipe) {
        res.status(200).json(recipe);
      } else {
        res.status(404).send("Recipe not found");
      }
    } else {
      res.status(200).json(recipesData);
    }
  } else if (req.method === "POST") {
    const newRecipe = req.body;
    newRecipe.id = recipesData.recipes.length;
    recipesData.recipes.push(newRecipe);
    res.status(201).json(newRecipe);
  } else if (req.method === "PUT") {
    const recipeId = parseInt(req.query.id, 10);
    const updatedRecipe = req.body;
    const recipeIndex = recipesData.recipes.findIndex((r) => r.id === recipeId);

    if (recipeIndex >= 0) {
      recipesData.recipes[recipeIndex] = {
        ...recipesData.recipes[recipeIndex],
        ...updatedRecipe,
      };
      res.status(200).json(recipesData.recipes[recipeIndex]);
    } else {
      res.status(404).send("Recipe not found");
    }
  } else if (req.method === "DELETE") {
    const recipeId = parseInt(req.query.id, 10);
    const recipeIndex = recipesData.recipes.findIndex((r) => r.id === recipeId);

    if (recipeIndex >= 0) {
      const deletedRecipe = recipesData.recipes.splice(recipeIndex, 1);
      res.status(200).json(deletedRecipe);
    } else {
      res.status(404).send("Recipe not found");
    }
  } else {
    res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
