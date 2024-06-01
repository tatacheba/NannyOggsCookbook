import express from "express";

const fs = require("fs").promises;
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для разбора тела запроса в формате JSON
app.use(express.json());

// Роут для получения данных
app.get("/data/recipes", async (req, res) => {
    try {
        // Читаем данные из файла recipes.json
        const data = await fs.readFile("recipes.json", "utf8");
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
