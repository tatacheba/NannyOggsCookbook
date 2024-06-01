const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; // Порт по умолчанию 3000, но можете изменить на нужный вам

// Разрешить парсинг JSON
app.use(express.json());

// Обработка корневого маршрута
app.get("/", (req, res) => {
    res.send("Привет, мир!");
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
