// Трек-лист на сутки
const tracks = [
    { title: "Программа 00", url: "https://air.indexmod.xyz/audio/program-00.mp3" },
    { title: "Джингл 00", url: "https://air.indexmod.xyz/audio/jingle-00.mp3" },
    { title: "Программа 01", url: "https://air.indexmod.xyz/audio/program-01.mp3" },
    { title: "Джингл 01", url: "https://air.indexmod.xyz/audio/jingle-01.mp3" },
    { title: "Программа 02", url: "https://air.indexmod.xyz/audio/program-02.mp3" },
    { title: "Джингл 02", url: "https://air.indexmod.xyz/audio/jingle-02.mp3" },
    { title: "Программа 03", url: "https://air.indexmod.xyz/audio/program-03.mp3" },
    { title: "Джингл 03", url: "https://air.indexmod.xyz/audio/jingle-03.mp3" },
    { title: "Программа 04", url: "https://air.indexmod.xyz/audio/program-04.mp3" },
    { title: "Джингл 04", url: "https://air.indexmod.xyz/audio/jingle-04.mp3" },
    { title: "Программа 05", url: "https://air.indexmod.xyz/audio/program-05.mp3" },
    { title: "Джингл 05", url: "https://air.indexmod.xyz/audio/jingle-05.mp3" },
    { title: "Программа 06", url: "https://air.indexmod.xyz/audio/program-06.mp3" },
    { title: "Джингл 06", url: "https://air.indexmod.xyz/audio/jingle-06.mp3" },
    { title: "Программа 07", url: "https://air.indexmod.xyz/audio/program-07.mp3" },
    { title: "Джингл 07", url: "https://air.indexmod.xyz/audio/jingle-07.mp3" },
    { title: "Программа 08", url: "https://air.indexmod.xyz/audio/program-08.mp3" },
    { title: "Джингл 08", url: "https://air.indexmod.xyz/audio/jingle-08.mp3" },
    { title: "Программа 09", url: "https://air.indexmod.xyz/audio/program-09.mp3" },
    { title: "Джингл 09", url: "https://air.indexmod.xyz/audio/jingle-09.mp3" },
    { title: "Программа 10", url: "https://air.indexmod.xyz/audio/program-10.mp3" },
    { title: "Джингл 10", url: "https://air.indexmod.xyz/audio/jingle-10.mp3" },
    { title: "Программа 11", url: "https://air.indexmod.xyz/audio/program-11.mp3" },
    { title: "Джингл 11", url: "https://air.indexmod.xyz/audio/jingle-11.mp3" },
    { title: "Программа 12", url: "https://air.indexmod.xyz/audio/program-12.mp3" },
    { title: "Джингл 12", url: "https://air.indexmod.xyz/audio/jingle-12.mp3" },
    { title: "Программа 13", url: "https://air.indexmod.xyz/audio/program-13.mp3" },
    { title: "Джингл 13", url: "https://air.indexmod.xyz/audio/jingle-13.mp3" },
    { title: "Программа 14", url: "https://air.indexmod.xyz/audio/program-14.mp3" },
    { title: "Джингл 14", url: "https://air.indexmod.xyz/audio/jingle-14.mp3" },
    { title: "Программа 15", url: "https://air.indexmod.xyz/audio/program-15.mp3" },
    { title: "Джингл 15", url: "https://air.indexmod.xyz/audio/jingle-15.mp3" },
    { title: "Программа 16", url: "https://air.indexmod.xyz/audio/program-16.mp3" },
    { title: "Джингл 16", url: "https://air.indexmod.xyz/audio/jingle-16.mp3" },
    { title: "Программа 17", url: "https://air.indexmod.xyz/audio/program-17.mp3" },
    { title: "Джингл 17", url: "https://air.indexmod.xyz/audio/jingle-17.mp3" },
    { title: "Программа 18", url: "https://air.indexmod.xyz/audio/program-18.mp3" },
    { title: "Джингл 18", url: "https://air.indexmod.xyz/audio/jingle-18.mp3" },
    { title: "Программа 19", url: "https://air.indexmod.xyz/audio/program-19.mp3" },
    { title: "Джингл 19", url: "https://air.indexmod.xyz/audio/jingle-19.mp3" },
    { title: "Программа 20", url: "https://air.indexmod.xyz/audio/program-20.mp3" },
    { title: "Джингл 20", url: "https://air.indexmod.xyz/audio/jingle-20.mp3" },
    { title: "Программа 21", url: "https://air.indexmod.xyz/audio/program-21.mp3" },
    { title: "Джингл 21", url: "https://air.indexmod.xyz/audio/jingle-21.mp3" },
    { title: "Программа 22", url: "https://air.indexmod.xyz/audio/program-22.mp3" },
    { title: "Джингл 22", url: "https://air.indexmod.xyz/audio/jingle-22.mp3" },
    { title: "Программа 23", url: "https://air.indexmod.xyz/audio/program-23.mp3" },
    { title: "Джингл 23", url: "https://air.indexmod.xyz/audio/jingle-23.mp3" }
];

document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration');

    // Получение текущего часа и минуты
    const currentHour = new Date().getHours();
    const currentMinute = new Date().getMinutes();

    // Определяем индекс трека в зависимости от текущей минуты
    let audioTrackIndex = currentMinute < 45 ? currentHour * 2 : currentHour * 2 + 1;

    const currentTrack = tracks[audioTrackIndex];

    if (currentTrack) {
        audioSource.src = currentTrack.url; // Установка источника аудио
        audioPlayer.load(); // Загрузка аудиофайла

        // Устанавливаем время и продолжительность после загрузки метаданных
        audioPlayer.addEventListener('loadedmetadata', function () {
            durationDisplay.textContent = formatTime(audioPlayer.duration);
            audioPlayer.currentTime = currentMinute < 45 ? currentMinute * 60 : 0; // Установка текущего времени
            updateProgress(); // Обновляем прогрессбар на нужное значение
        });
    } else {
        console.error("Аудиофайл для текущего часа не найден.");
        durationDisplay.textContent = '0:00';
    }

    // Найдите элемент на странице с id 'track-info'
const trackInfoElement = document.getElementById('track-info');

// Обновите содержимое элемента
trackInfoElement.textContent = `Сейчас играет: ${currentTrack}`;

    // Обработчик кнопки воспроизведения/паузы
    playPauseBtn.addEventListener('click', function () {
        if (audioPlayer.paused) {
            audioPlayer.play().then(() => {
                playPauseBtn.textContent = 'Пауза';
            }).catch(error => {
                console.error("Ошибка воспроизведения:", error);
            });
        } else {
            audioPlayer.pause();
            playPauseBtn.textContent = 'Звук';
        }
    });

    // Обновление прогресса аудио
    audioPlayer.addEventListener('timeupdate', updateProgress);

    // Функция для обновления прогресс-бара
    function updateProgress() {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.style.width = progress + '%';
        currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);

        // Проверяем, нужно ли переключить трек на следующий
        if (audioPlayer.currentTime >= audioPlayer.duration) {
            audioTrackIndex = (audioTrackIndex + 1) % tracks.length; // Зацикливание плейлиста
            const nextTrack = tracks[audioTrackIndex];
            audioSource.src = nextTrack.url;
            audioPlayer.load();
            audioPlayer.play();
        }
    }

    // Форматирование времени
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
});
