const audioPlayer = document.getElementById('audioPlayer');
const currentTrackDisplay = document.getElementById('currentTrack');
let audioFiles = []; // Массив будет пустым

// Функция для получения списка аудиофайлов
async function fetchAudioFiles() {
    const response = await fetch('audio-files.json');
    if (response.ok) {
        audioFiles = await response.json();
        // playAudio(); // Уберите вызов playAudio здесь
    } else {
        console.error('Ошибка при получении списка файлов');
    }
}

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

// Функция для обновления текста текущего трека
function updateCurrentTrack(fileName) {
    currentTrackDisplay.textContent = `Сейчас воспроизводится: ${fileName}`;
}

// Запуск плеера
function playAudio() {
    const now = new Date();
    const currentTimeOfDay = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

    for (const file of audioFiles) {
        const { startTime, durationTime } = parseFilename(file);
        const startSecondsOfDay = startTime / 1000;

        if (currentTimeOfDay >= startSecondsOfDay && currentTimeOfDay < startSecondsOfDay + (durationTime / 1000)) {
            audioPlayer.src = `https://air.indexmod.xyz/audio/${file}`;
            audioPlayer.play().catch(error => console.error(error));
            updateCurrentTrack(file);
            audioPlayer.onended = () => playNext(durationTime);
            return;
        }
    }
    if (audioFiles.length > 0) {
        audioPlayer.src = `https://air.indexmod.xyz/audio/${audioFiles[0]}`;
        audioPlayer.play().catch(error => console.error(error));
        updateCurrentTrack(audioFiles[0]);
    }
}

// Функция для перехода к следующему файлу
function playNext(durationTime) {
    const now = new Date();
    const nextTime = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    for (const file of audioFiles) {
        const { startTime, durationTime: fileDurationTime } = parseFilename(file);
        const startSecondsOfDay = startTime / 1000;
        if (nextTime >= startSecondsOfDay && nextTime < startSecondsOfDay + (fileDurationTime / 1000)) {
            audioPlayer.src = `https://air.indexmod.xyz/audio/${file}`;
            audioPlayer.play().catch(error => console.error(error));
            updateCurrentTrack(file);
            audioPlayer.onended = () => playNext(fileDurationTime);
            return;
        }
    }
    playAudio();
}

// Добавьте обработчик клика на кнопку воспроизведения
document.getElementById('playButton').addEventListener('click', () => {
    playAudio(); // Запускаем воспроизведение после клика
});

// Получаем список аудиофайлов при загрузке страницы
fetchAudioFiles();
