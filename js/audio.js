// Получаем текущий час и минуту
const currentTime = new Date();
const currentHour = currentTime.getHours();
const currentMinute = currentTime.getMinutes();
const currentSecond = currentTime.getSeconds();

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

let currentTrackIndex = 0; // Индекс текущего трека
const audio = new Audio(); // Создаем объект аудио
const progressBar = document.getElementById('progress-bar'); // Элемент прогресс-бара

// Функция для загрузки трека
function loadTrack() {
    audio.src = tracks[currentTrackIndex].url;
    audio.currentTime = getCurrentTrackStartTime(); // Устанавливаем время начала трека
    audio.load();
}

// Функция для получения времени начала текущего трека
function getCurrentTrackStartTime() {
    if (currentMinute < 45) {
        return 0; // Если меньше 45 минут, начинается с 0
    } else {
        return 0; // В этом примере, джинглы идут до 45-й минуты
    }
}

// Функция для обновления прогресс-бара
function updateProgressBar() {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progress + '%';
}

// Функция для воспроизведения следующего трека
function playNextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length; // Переход к следующему треку
    loadTrack();
    audio.play();
}

// События управления воспроизведением
document.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault(); // Предотвращаем прокрутку страницы
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
});

// Устанавливаем начальный трек в соответствии с текущим временем
const initialTrackIndex = currentHour * 2 + (currentMinute >= 45 ? 1 : 0);
currentTrackIndex = initialTrackIndex >= tracks.length ? 0 : initialTrackIndex;
loadTrack();

// Обновляем прогресс-бар каждую секунду
setInterval(updateProgressBar, 1000);

// Воспроизводим трек по окончании
audio.addEventListener('ended', playNextTrack);

// Запускаем воспроизведение
audio.play();
