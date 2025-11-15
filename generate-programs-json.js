const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const pagesDir = path.join(__dirname, 'pages'); // папка с MD-файлами
const outputFile = path.join(__dirname, 'assets', 'programs.json');

const programs = [];

fs.readdirSync(pagesDir).forEach(file => {
  if (file.endsWith('.md')) {
    const content = fs.readFileSync(path.join(pagesDir, file), 'utf8');
    const match = content.match(/---([\s\S]*?)---/);
    if (match) {
      const fm = yaml.load(match[1]);
      const program = {
        id: file.replace('.md', ''),
        title: fm.title || '',
        permalink: fm.permalink || '',
        author: fm.author || '',
        guest: fm.guest || '',
        section: fm.section || '',
        location: fm.location || '',
        year: fm.year || '',
        audio: `/assets/audio/${file.replace('.md', '.m4a')}`,
        cover: `/assets/covers/${file.replace('.md', '.jpg')}`
      };
      programs.push(program);
    }
  }
});

fs.writeFileSync(outputFile, JSON.stringify(programs, null, 2), 'utf8');
console.log(`programs.json создан с ${programs.length} программами`);
