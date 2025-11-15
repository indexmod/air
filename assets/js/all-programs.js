// Загружаем все программы из rules.json
fetch('/rules.json')
  .then(res => res.json())
  .then(programs => {
    const container = document.getElementById('programs-container');

    programs.forEach(p => {
      const card = document.createElement('div');
      card.className = 'program-card';
      card.innerHTML = `
        <img src="${p.cover}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
      `;
      container.appendChild(card);

      // Если есть возможность запускать программу, можно добавить клик:
      card.addEventListener('click', () => {
        launchProgram(p.id);
      });
    });
  });

function launchProgram(id) {
  // Используем существующую логику запуска
  console.log('Launching program', id);
}
