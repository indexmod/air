// Тестовый трек с фиксированной ссылкой
const track = {
    title: "Тестовый трек",
    url: "https://air.indexmod.xyz/audio/test-track.mp3" // Проверьте, что этот файл доступен
};

// Находим элементы плеера
const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');
const playPauseBtn = document.getElementById('play-pause-btn');
const trackInfo = document.getElementById('track-info');

// Устанавливаем URL аудиофайла и загружаем его
audioSource.src = track.url;
audioPlayer.load();
trackInfo.textContent = `Сейчас играет: ${track.title}`;

// Добавляем обработчик кнопки воспроизведения/паузы
playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = 'Пауза';
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = 'Воспроизвести';
    }
});
