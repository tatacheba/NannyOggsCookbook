// server/server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// Получение текущего пути к файлу
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware для обработки JSON
app.use(express.json());

// Обслуживание статических файлов Svelte приложения
app.use(express.static(path.join(__dirname, '../build')));

// Пример API эндпоинта
app.get('/api/hello', (req, res) => {
	res.json({ message: 'Привет, мир!' });
});

// Обработка всех остальных запросов, отправка основного файла Svelte приложения
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, () => {
	console.log(`Сервер запущен на http://localhost:${port}`);
});
