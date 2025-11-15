const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Папка с MD-файлами
const hoursDir = path.join(__dirname, '_hours');

// Путь к JSON, который будем создавать
const outputFile = path.join(__dirname, 'assets', 'programs.json');

const programs = [];

// Сканируем все .md файлы в порядке 00.md → 23.md
const files = fs.readdirSync(hoursDir)
  .filter(f => f.endsWith('.md'))
  .sort(); // сортировка по имени файла, чтобы 00,01,...23

files.forEach(file => {
  const filePath = path.join(hoursDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Выделяем frontmatter между ---
  const match = content.match(/---([\s\S]*?)---/);
  if (match) {
    const fm = yaml.load(match[1]);

    // Создаём объект программы
    const program = {
      id: file.replace('.md', ''),
      title: fm.title || '',
      permalink: fm.permalink || '',
      author: fm.author || '',
      guest: fm.guest || '',
      section: fm.section || '',
      location: fm.location || '',
      year: fm.year || '',
      // Пути к аудио и обложке по соглашению
      audio: fm.audio || `/assets/audio/${file.replace('.md', '.m4a')}`,
      cover: fm.cover || `/assets/covers/${file.replace('.md', '.jpg')}`
    };

    programs.push(program);
  }
});

// Сохраняем JSON
fs.writeFileSync(outputFile, JSON.stringify(programs, null, 2), 'utf8');
console.log(`programs.json создан с ${programs.length} программами`);
