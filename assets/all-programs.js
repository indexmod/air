document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('programs-container');
  if (!container) return;

  fetch('/assets/programs.json')
    .then(res => res.json())
    .then(programs => {
      programs.forEach(program => {
        // Правильные пути к аудио и обложкам
        const audioPath = program.audio && program.audio.trim() !== ''
          ? program.audio
          : `/assets/audio/hours/${program.id}.m4a`;

        const coverPath = program.cover && program.cover.trim() !== ''
          ? program.cover
          : `/assets/covers/${program.id}.png`;

        const card = document.createElement('div');
        card.className = 'program-card';

        card.innerHTML = `
          <div class="cover">
            <img src="${coverPath}" alt="${program.title}" onerror="this.src='/assets/covers/default.png'">
          </div>
          <div class="program-info">
            <h3>${program.title}</h3>
            ${program.author ? `<p class="author">${program.author}</p>` : ''}
            ${program.guest ? `<p class="guest">${program.guest}</p>` : ''}
            <audio src="${audioPath}" preload="none"></audio>
          </div>
        `;

        card.addEventListener('click', () => {
          // Остановить все остальные аудио
          document.querySelectorAll('#programs-container audio').forEach(a => {
            if (a !== card.querySelector('audio')) a.pause();
          });

          const audio = card.querySelector('audio');
          if (audio) audio.play();
        });

        container.appendChild(card);
      });
    })
    .catch(err => console.error('Ошибка при загрузке programs.json:', err));
});
