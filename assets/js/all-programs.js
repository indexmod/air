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
        <button class="launch" data-id="${p.id}">Launch</button>
      `;
      container.appendChild(card);
    });

    // Клик по кнопке запуска
    container.addEventListener('click', e => {
      if(e.target.classList.contains('launch')) {
        const id = e.target.dataset.id;
        launchProgram(id);
      }
    });
  });

function launchProgram(id) {
  // Подключаем существующую функцию запуска программы
  console.log('Launching program', id);
  // Можно вызвать существующий скрипт из index.js
}

// Переключение Grid/List
document.getElementById('grid-view').onclick = () => {
  document.getElementById('programs-container').className = 'grid';
};
document.getElementById('list-view').onclick = () => {
  document.getElementById('programs-container').className = 'list';
};
