document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('programs-container');
  if (!container) return;

  fetch('/assets/programs.json')
    .then(res => res.json())
    .then(programs => {
      programs.forEach(program => {
        // Проверяем пути к медиа
        const audioPath = program.audio || `/assets/audio/${program.id}.m4a`;
        const coverPath = program.cover || `/assets/covers/${program.id}.jpg`;

        // Создаём карточку
        const card = document.createElement('div');
        card.className = 'program-card';

        card.innerHTML = `
          <div class="cover">
            <img src="${coverPath}" alt="${program.title}">
          </div>
          <div class="program-info">
            <h3>${program.title}</h3>
            ${program.author ? `<p class="author">${program.author}</p>` : ''}
            ${program.guest ? `<p class="guest">${program.guest}</p>` : ''}
            <audio src="${audioPath}" preload="none"></audio>
          </div>
        `;

        // При клике запускаем аудио через player.js
        card.addEventListener('click', () => {
          const audio = card.querySelector('audio');
          if (audio) audio.play();
        });

        container.appendChild(card);
      });
    })
    .catch(err => console.error('Ошибка при загрузке programs.json:', err));
});
