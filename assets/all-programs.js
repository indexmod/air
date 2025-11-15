document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('programs-container');
  if (!container) return;

  fetch('/assets/programs.json')
    .then(res => res.json())
    .then(programs => {
      programs.forEach(program => {
        // Создаём карточку программы
        const card = document.createElement('div');
        card.className = 'program-card';

        card.innerHTML = `
          <img class="program-cover" src="${program.cover}" alt="${program.title}">
          <div class="program-info">
            <h3>${program.title}</h3>
            ${program.author ? `<p class="author">${program.author}</p>` : ''}
            ${program.guest ? `<p class="guest">${program.guest}</p>` : ''}
            <audio src="${program.audio}" preload="none"></audio>
          </div>
        `;

        // Клик по карточке запускает аудио
        card.addEventListener('click', () => {
          const audio = card.querySelector('audio');
          if (audio) {
            audio.play();
          }
        });

        container.appendChild(card);
      });
    })
    .catch(err => console.error('Ошибка при загрузке programs.json:', err));
});
