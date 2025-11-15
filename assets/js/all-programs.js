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
}

// Кнопки для ручного переключения
document.getElementById('grid-view').onclick = () => {
  document.getElementById('programs-container').className = 'grid';
};
document.getElementById('list-view').onclick = () => {
  document.getElementById('programs-container').className = 'list';
};

// Автоматически выбираем grid или list по ширине экрана
window.addEventListener('load', () => {
  const container = document.getElementById('programs-container');
  if (window.innerWidth <= 768) {
    container.className = 'list'; // телефон
  } else {
    container.className = 'grid'; // монитор
  }
});
