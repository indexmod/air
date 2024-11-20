// api/update-likes.js

let likesData = require('../data/likes.json'); // или какой-то другой путь к вашему JSON файлу с лайками

module.exports = (req, res) => {
    if (req.method === 'POST') {
        const { pageId } = req.body;

        // Простая логика обновления лайков
        if (likesData[pageId]) {
            likesData[pageId].likes += 1; // Увеличиваем количество лайков
        }

        // Сохраняем обновленные данные
        const fs = require('fs');
        fs.writeFileSync('./data/likes.json', JSON.stringify(likesData, null, 2));

        return res.status(200).json(likesData[pageId]);
    }

    return res.status(405).send('Method Not Allowed');
};
