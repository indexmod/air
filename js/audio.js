// Трек-лист на сутки
const tracks = [
    { title: "Джингл 00", url: "https://air.indexmod.xyz/audio/00-59-45-00-00-14.mp3" },
    { title: "Программа 00", url: "https://air.indexmod.xyz/audio/00-00-00-00-59-44.mp3" },
    { title: "Джингл 01", url: "https://air.indexmod.xyz/audio/01-59-45-00-00-14.mp3" },
    { title: "Программа 01", url: "https://air.indexmod.xyz/audio/01-00-00-00-59-44.mp3" },
    // ... остальные треки ...
    { title: "Джингл 23", url: "https://air.indexmod.xyz/audio/23-59-45-00-00-14.mp3" },
    { title: "Программа 23", url: "https://air.indexmod.xyz/audio/23-00-00-00-59-44.mp3" }
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

// Функция для определения текущего трека в зависимости от времени
function determineCurrentTrack() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Вычисляем индекс текущего трека
    if (minutes === 0) {
        currentTrackIndex = hours * 2; // Каждые 30 минут - 2 трека (джингл и программа)
    } else {
        currentTrackIndex = hours * 2 + 1; // Начинаем с текущей минуты
        const seconds = (minutes * 60) % 60; // Определяем, сколько секунд прошло
        if (seconds < 15) {
            // Если меньше 15 секунд, начинаем с джингла
            currentTrackIndex = hours * 2;
        }
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
determineCurrentTrack();
playTrack(currentTrackIndex);
