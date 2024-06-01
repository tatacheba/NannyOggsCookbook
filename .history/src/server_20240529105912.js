import express from "express";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для разбора тела запроса в формате JSON
app.use(express.json());

// Роут для получения данных
app.get("/api/recipes", async (req, res) => {
    try {
        const recipesFilePath = path.join(__dirname, "data", "recipes.json");
        const data = await fs.readFile(recipesFilePath, "utf8");
        const recipes = JSON.parse(data);
        res.json(recipes);
    } catch (error) {
        console.error("Error reading file:", error);
        res.status(500).json({ error: "Failed to load recipes" });
    }
});

// Middleware для обслуживания статических файлов
app.use(express.static(path.join(__dirname, "../public")));

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
