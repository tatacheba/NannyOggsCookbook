import express from "express";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

// Получение текущего пути к файлу
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Путь к файлу с рецептами
const recipesFilePath = path.join(__dirname, "data", "recipes.json");

// Middleware для разбора тела запроса в формате JSON
app.use(express.json());

// Middleware для сервирования статических файлов
app.use(express.static(path.join(__dirname, "../public")));

// Роут для получения данных
app.get("/api/recipes", async (req, res) => {
    try {
        // Проверка, существует ли файл с рецептами
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

// Все остальные маршруты должны вернуть index.html
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../public", "index.html"));
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
