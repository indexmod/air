const audioPlayer = document.getElementById('audioPlayer');
const trackNameDisplay = document.getElementById('trackName');

// Массив с аудиофайлами
const audioFiles = [
    "00-00-00-00-59-44.mp3", // Пример: начинается в 00:00:00 и продолжается 59:44
    "00-59-45-00-00-14.mp3", // Пример: начинается в 00:59:45 и продолжается 00:14
    // Добавьте больше файлов по вашему желанию
];

// Функция для преобразования времени в миллисекунды
function timeToMilliseconds(hours, minutes, seconds) {
    return (hours * 3600 + minutes * 60 + seconds) * 1000;
}

// Функция для получения времени начала и продолжительности из названия файла
function parseFilename(filename) {
    const parts = filename.split('-');
    const startHours = parseInt(parts[0]);
    const startMinutes = parseInt(parts[1]);
    const startSeconds = parseInt(parts[2]);
    const durationHours = parseInt(parts[3]);
    const durationMinutes = parseInt(parts[4]);
    const durationSeconds = parseInt(parts[5]);

    const startTime = timeToMilliseconds(startHours, startMinutes, startSeconds);
    const durationTime = timeToMilliseconds(durationHours, durationMinutes, durationSeconds);

    return { startTime, durationTime };
}

// Запуск плеера
function playAudio() {
    const now = new Date();
    const currentTimeOfDay = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

    let foundAudio = false;

    for (const file of audioFiles) {
        const { startTime, durationTime } = parseFilename(file);
        const startSecondsOfDay = startTime / 1000;
        const endSecondsOfDay = startSecondsOfDay + (durationTime / 1000);

        // Проверяем, если текущее время соответствует началу или уже прошло
        if (currentTimeOfDay >= startSecondsOfDay && currentTimeOfDay < endSecondsOfDay) {
            audioPlayer.src = `audio/${file}`;
            trackNameDisplay.textContent = file; // Обновляем отображаемое название трека
            audioPlayer.play();
            setTimeout(playNext, durationTime); // Запускаем следующий файл через продолжительность текущего
            foundAudio = true;
            break;
        }
    }

    // Если не нашли соответствующий файл, запускаем первый файл
    if (!foundAudio) {
        audioPlayer.src = `audio/${audioFiles[0]}`;
        trackNameDisplay.textContent = audioFiles[0]; // Обновляем отображаемое название трека
        audioPlayer.play();
    }
}

// Функция для перехода к следующему файлу
function playNext() {
    const now = new Date();
    const nextTime = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds() + 1; // Добавляем 1 секунду для перехода
    let foundAudio = false;

    for (const file of audioFiles) {
        const { startTime, durationTime } = parseFilename(file);
        const startSecondsOfDay = startTime / 1000;
        const endSecondsOfDay = startSecondsOfDay + (durationTime / 1000);

        if (nextTime >= startSecondsOfDay && nextTime < endSecondsOfDay) {
            audioPlayer.src = `audio/${file}`;
            trackNameDisplay.textContent = file; // Обновляем отображаемое название трека
            audioPlayer.play();
            setTimeout(playNext, durationTime);
            foundAudio = true;
            break;
        }
    }

    // Если не нашли, начинаем с начала
    if (!foundAudio) {
        playAudio();
    }
}

// Запускаем плеер
setInterval(playAudio, 1000); // Проверяем каждую секунду
