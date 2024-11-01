const audioPlayer = document.getElementById('audioPlayer');
const currentTrackDisplay = document.getElementById('currentTrack');
let audioFiles = []; // Массив будет пустым

// Функция для получения списка аудиофайлов
async function fetchAudioFiles() {
    const response = await fetch('audio-files.json'); // Запрос к JSON файлу
    if (response.ok) {
        audioFiles = await response.json(); // Получаем список файлов как JSON
        playAudio(); // Запускаем воспроизведение после получения файлов
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

        // Проверяем, если текущее время соответствует началу аудиофайла
        if (currentTimeOfDay >= startSecondsOfDay && currentTimeOfDay < startSecondsOfDay + (durationTime / 1000)) {
            audioPlayer.src = `https://air.indexmod.xyz/audio/${file}`; // Полный путь к файлам
            audioPlayer.play();
            updateCurrentTrack(file); // Обновляем отображение текущего трека

            // Используем promise для ожидания окончания воспроизведения
            audioPlayer.onended = () => playNext(durationTime); // Запускаем следующий файл при завершении текущего
            return;
        }
    }
    // Если не нашли соответствующий файл, запускаем первый файл
    if (audioFiles.length > 0) {
        audioPlayer.src = `https://air.indexmod.xyz/audio/${audioFiles[0]}`; // Полный путь к файлам
        audioPlayer.play();
        updateCurrentTrack(audioFiles[0]); // Обновляем отображение текущего трека
    }
}

// Функция для перехода к следующему файлу
function playNext(durationTime) {
    const now = new Date();
    const nextTime = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds(); // Текущее время
    for (const file of audioFiles) {
        const { startTime, durationTime: fileDurationTime } = parseFilename(file);
        const startSecondsOfDay = startTime / 1000;
        if (nextTime >= startSecondsOfDay && nextTime < startSecondsOfDay + (fileDurationTime / 1000)) {
            audioPlayer.src = `https://air.indexmod.xyz/audio/${file}`; // Полный путь к файлам
            audioPlayer.play();
            updateCurrentTrack(file); // Обновляем отображение текущего трека

            // Используем promise для ожидания окончания воспроизведения
            audioPlayer.onended = () => playNext(fileDurationTime);
            return;
        }
    }
    // Если не нашли, начинаем с начала
    playAudio();
}

// Запускаем плеер и получаем список аудиофайлов
fetchAudioFiles();
