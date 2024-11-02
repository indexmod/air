// Трек-лист на сутки
const tracks = [
    { title: "Программа 00", url: "https://air.indexmod.xyz/audio/00-00-00-00-59-44.mp3" },
    { title: "Джингл 00", url: "https://air.indexmod.xyz/audio/00-59-45-00-00-14.mp3" },
    { title: "Программа 01", url: "https://air.indexmod.xyz/audio/01-00-00-00-59-44.mp3" },
    { title: "Джингл 01", url: "https://air.indexmod.xyz/audio/01-59-45-00-00-14.mp3" },
    { title: "Программа 02", url: "https://air.indexmod.xyz/audio/02-00-00-00-59-44.mp3" },
    { title: "Джингл 02", url: "https://air.indexmod.xyz/audio/02-59-45-00-00-14.mp3" },
    { title: "Программа 03", url: "https://air.indexmod.xyz/audio/03-00-00-00-59-44.mp3" },
    { title: "Джингл 03", url: "https://air.indexmod.xyz/audio/03-59-45-00-00-14.mp3" },
    { title: "Программа 04", url: "https://air.indexmod.xyz/audio/04-00-00-00-59-44.mp3" },
    { title: "Джингл 04", url: "https://air.indexmod.xyz/audio/04-59-45-00-00-14.mp3" },
    { title: "Программа 05", url: "https://air.indexmod.xyz/audio/05-00-00-00-59-44.mp3" },
    { title: "Джингл 05", url: "https://air.indexmod.xyz/audio/05-59-45-00-00-14.mp3" },
    { title: "Программа 06", url: "https://air.indexmod.xyz/audio/06-00-00-00-59-44.mp3" },
    { title: "Джингл 06", url: "https://air.indexmod.xyz/audio/06-59-45-00-00-14.mp3" },
    { title: "Программа 07", url: "https://air.indexmod.xyz/audio/07-00-00-00-59-44.mp3" },
    { title: "Джингл 07", url: "https://air.indexmod.xyz/audio/07-59-45-00-00-14.mp3" },
    { title: "Программа 08", url: "https://air.indexmod.xyz/audio/08-00-00-00-59-44.mp3" },
    { title: "Джингл 08", url: "https://air.indexmod.xyz/audio/08-59-45-00-00-14.mp3" },
    { title: "Программа 09", url: "https://air.indexmod.xyz/audio/09-00-00-00-59-44.mp3" },
    { title: "Джингл 09", url: "https://air.indexmod.xyz/audio/09-59-45-00-00-14.mp3" },
    { title: "Программа 10", url: "https://air.indexmod.xyz/audio/10-00-00-00-59-44.mp3" },
    { title: "Джингл 10", url: "https://air.indexmod.xyz/audio/10-59-45-00-00-14.mp3" },
    { title: "Программа 11", url: "https://air.indexmod.xyz/audio/11-00-00-00-59-44.mp3" },
    { title: "Джингл 11", url: "https://air.indexmod.xyz/audio/11-59-45-00-00-14.mp3" },
    { title: "Программа 12", url: "https://air.indexmod.xyz/audio/12-00-00-00-59-44.mp3" },
    { title: "Джингл 12", url: "https://air.indexmod.xyz/audio/12-59-45-00-00-14.mp3" },
    { title: "Программа 13", url: "https://air.indexmod.xyz/audio/13-00-00-00-59-44.mp3" },
    { title: "Джингл 13", url: "https://air.indexmod.xyz/audio/13-59-45-00-00-14.mp3" },
    { title: "Программа 14", url: "https://air.indexmod.xyz/audio/14-00-00-00-59-44.mp3" },
    { title: "Джингл 14", url: "https://air.indexmod.xyz/audio/14-59-45-00-00-14.mp3" },
    { title: "Программа 15", url: "https://air.indexmod.xyz/audio/15-00-00-00-59-44.mp3" },
    { title: "Джингл 15", url: "https://air.indexmod.xyz/audio/15-59-45-00-00-14.mp3" },
    { title: "Программа 16", url: "https://air.indexmod.xyz/audio/16-00-00-00-59-44.mp3" },
    { title: "Джингл 16", url: "https://air.indexmod.xyz/audio/16-59-45-00-00-14.mp3" },
    { title: "Программа 17", url: "https://air.indexmod.xyz/audio/17-00-00-00-59-44.mp3" },
    { title: "Джингл 17", url: "https://air.indexmod.xyz/audio/17-59-45-00-00-14.mp3" },
    { title: "Программа 18", url: "https://air.indexmod.xyz/audio/18-00-00-00-59-44.mp3" },
    { title: "Джингл 18", url: "https://air.indexmod.xyz/audio/18-59-45-00-00-14.mp3" },
    { title: "Программа 19", url: "https://air.indexmod.xyz/audio/19-00-00-00-59-44.mp3" },
    { title: "Джингл 19", url: "https://air.indexmod.xyz/audio/19-59-45-00-00-14.mp3" },
    { title: "Программа 20", url: "https://air.indexmod.xyz/audio/20-00-00-00-59-44.mp3" },
    { title: "Джингл 20", url: "https://air.indexmod.xyz/audio/20-59-45-00-00-14.mp3" },
    { title: "Программа 21", url: "https://air.indexmod.xyz/audio/21-00-00-00-59-44.mp3" },
    { title: "Джингл 21", url: "https://air.indexmod.xyz/audio/21-59-45-00-00-14.mp3" },
    { title: "Программа 22", url: "https://air.indexmod.xyz/audio/22-00-00-00-59-44.mp3" },
    { title: "Джингл 22", url: "https://air.indexmod.xyz/audio/22-59-45-00-00-14.mp3" },
    { title: "Программа 23", url: "https://air.indexmod.xyz/audio/23-00-00-00-59-44.mp3" },
    { title: "Джингл 23", url: "https://air.indexmod.xyz/audio/23-59-45-00-00-14.mp3" }
];


// Элементы интерфейса
const audioElement = document.getElementById('audio');
const trackInfo = document.getElementById('track-info');
const playPauseBtn = document.getElementById("play-pause-btn");
const progressContainer = document.getElementById("progress-container");
const progressBar = document.getElementById("progress-bar");
const currentTimeElem = document.getElementById("current-time");
const durationElem = document.getElementById("duration");

let currentTrackIndex = 0;

// Функция для получения текущего трека
function getCurrentTrack() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    // Если текущее время равно 00:00, начинаем с джингла
    if (currentMinute === 0 && currentHour === 0) {
        return 0; // Индекс джингла 00
    }

    // Определяем индекс текущей программы
    if (currentMinute === 0) {
        return currentHour * 2; // Программа в начале часа
    } else {
        // Если не 00 минут, начинаем с текущей минуты
        return currentHour * 2 + 1; // Начинаем с джингла перед программой
    }
}

// Функция воспроизведения трека
function playTrack(index) {
    const track = tracks[index];
    audioElement.src = track.url;
    trackInfo.textContent = `Сейчас играет: ${track.title}`;
    audioElement.play();
    playPauseBtn.textContent = "Pause";
}

// Переключение Play/Pause
playPauseBtn.addEventListener("click", () => {
    if (audioElement.paused) {
        audioElement.play();
        playPauseBtn.textContent = "Pause";
    } else {
        audioElement.pause();
        playPauseBtn.textContent = "Play";
    }
});

// Автоматическое переключение на следующий трек
audioElement.addEventListener('ended', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    playTrack(currentTrackIndex);
});

// Обновление времени и прогресс-бара
audioElement.addEventListener("timeupdate", () => {
    const currentTime = audioElement.currentTime;
    const duration = audioElement.duration;

    // Обновление времени
    currentTimeElem.textContent = formatTime(currentTime);
    durationElem.textContent = formatTime(duration);

    // Обновление прогресс-бара
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
});

// Пропуск при клике на прогресс-баре
progressContainer.addEventListener("click", (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audioElement.duration;
    audioElement.currentTime = (clickX / width) * duration;
});

// Форматирование времени в мин:сек
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// Начинаем воспроизведение с текущего трека
currentTrackIndex = getCurrentTrack();
playTrack(currentTrackIndex);
