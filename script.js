// Трек-лист
const tracks = [
    { title: "Программа 00", url: "https://air.indexmod.xyz/audio/program-00.mp3" },
    { title: "Джингл 00", url: "https://air.indexmod.xyz/audio/jingle-00.mp3" },
    // Добавьте остальные треки по аналогии
];

// Получение текущего часа и минуты
const currentHour = new Date().getHours();
const currentMinute = new Date().getMinutes();

// Определяем индекс трека в зависимости от текущей минуты
let audioTrackIndex = currentMinute < 45 ? currentHour * 2 : currentHour * 2 + 1;
const currentTrack = tracks[audioTrackIndex];

if (currentTrack) {
    document.getElementById('audioSource').src = currentTrack.url; // Установка источника аудио
    document.getElementById('track-info').textContent = `Сейчас играет: ${currentTrack.title}`; // Информация о треке
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.load(); // Загрузка аудиофайла

    // Обработчик кнопки воспроизведения/паузы
    document.getElementById('play-pause-btn').addEventListener('click', function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
            this.textContent = 'Пауза';
        } else {
            audioPlayer.pause();
            this.textContent = 'Воспроизвести';
        }
    });
} else {
    console.error("Аудиофайл для текущего часа не найден.");
}
