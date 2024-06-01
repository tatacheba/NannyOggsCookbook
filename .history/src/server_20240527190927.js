import express from "express";
import { promises as fs } from "fs";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для разбора тела запроса в формате JSON
app.use(express.json());

// Роут для получения данных
app.get("/api/recipes", async (req, res) => {
    try {
        const recipesFilePath = new URL("data/recipes.json", import.meta.url)
            .pathname;
        const fileExists = await fs
            .access(recipesFilePath)
            .then(() => true)
            .catch(() => false);

        if (!fileExists) {
            return res.status(404).json({ error: "Recipes file not found" });
        }

        // Читаем данные из файла recipes.json
        const data = await fs.readFile(recipesFilePath, "utf8");
        // Парсим JSON данные
        const recipes = JSON.parse(data);
        // Отправляем данные в качестве ответа
        res.json(recipes);
    } catch (error) {
        console.error("Error reading file:", error);
        res.status(500).json({ error: "Failed to load recipes" });
    }
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
