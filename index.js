const express = require('express');
const app = express();
const port = 3000;

// Статические файлы (например, из папки "public")
app.use(express.static('public'));

// Простой маршрут для проверки
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Пример маршрута для динамической страницы
app.get('/hours/:hour', (req, res) => {
  const hour = req.params.hour;
  res.send(`Viewing content for hour: ${hour}`);
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});