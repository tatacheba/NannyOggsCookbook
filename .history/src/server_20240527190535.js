import express from "express";
import { promises as fs } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для разбора тела запроса в формате JSON
app.use(express.json());

// Получение пути к текущему файлу
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Определение пути к файлу recipes.json
const recipesFilePath = path.join(__dirname, "data", "recipes.json");

// Роут для получения данных
app.get("/api/recipes", async (req, res) => {
    try {
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
