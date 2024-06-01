// server.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для разбора тела запроса в формате JSON
app.use(express.json());

// Роут для получения данных
app.get("/api/data", (req, res) => {
    // Здесь можно добавить логику для получения данных
    const data = [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
    ];
    res.json(data);
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
