// app.js

const express = require("express");
const app = express();
const recipeRoutes = require("./src/routes/recipeRoutes");

// Разрешить парсинг JSON
app.use(express.json());

// Использование маршрутов для работы с рецептами
app.use("/api/recipes", recipeRoutes);

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
