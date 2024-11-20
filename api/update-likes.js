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

// api/update-likes.js
const admin = require('firebase-admin');
const fs = require('fs');

// Инициализация Firebase с сервисным аккаунтом
if (!admin.apps.length) {
  const serviceAccount = JSON.parse(fs.readFileSync('./firebase-config.json')); // Путь к твоему файлу с ключом
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
} else {
  admin.app(); // Используем уже существующее приложение, если оно есть
}

const db = admin.firestore();

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { pageId } = req.body;

    if (!pageId) {
      return res.status(400).json({ error: 'pageId is required' });
    }

    try {
      // Получаем данные по лайкам для указанной страницы
      const pageRef = db.collection('likes').doc(pageId);
      const doc = await pageRef.get();

      if (!doc.exists) {
        // Если страницы нет в базе, создаем новую запись
        await pageRef.set({ likes: 1 });
        return res.status(200).json({ pageId, likes: 1 });
      }

      // Обновляем количество лайков
      const currentLikes = doc.data().likes || 0;
      await pageRef.update({ likes: currentLikes + 1 });

      // Отправляем ответ с обновленными лайками
      return res.status(200).json({ pageId, likes: currentLikes + 1 });
    } catch (error) {
      console.error('Error updating likes:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    return res.status(405).send('Method Not Allowed');
  }
};
