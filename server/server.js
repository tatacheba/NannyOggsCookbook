import express from "express";
import path from "path";
import cors from "cors";

import { fileURLToPath } from "url";
const app = express();
const port = 3000;

import recipes from "./data/recipes.json" assert { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors()); // Add this line to enable CORS

app.use(express.static(path.join(__dirname, "public")));
app.get("/api/recipes", (req, res) => {
    res.json(recipes);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
