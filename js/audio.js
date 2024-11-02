document.addEventListener('DOMContentLoaded', function () {
  const audioPlayer = document.getElementById('audioPlayer');
  const audioSource = document.getElementById('audioSource');
  const playPauseBtn = document.getElementById('play-pause-btn');
  const progressBar = document.getElementById('progress-bar');
  const currentTimeDisplay = document.getElementById('current-time');
  const durationDisplay = document.getElementById('duration');

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

  // Получение текущего часа и минуты
  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();

  // Определяем индекс трека в зависимости от текущей минуты
  let audioTrackIndex;
  if (currentMinute < 45) {
    audioTrackIndex = currentHour * 2; // Программа
  } else {
    audioTrackIndex = currentHour * 2 + 1; // Джингл
  }

  const currentTrack = tracks[audioTrackIndex];

  if (currentTrack) {
    audioSource.src = currentTrack.url; // Установка источника аудио
    audioPlayer.load(); // Загрузка аудиофайла

    // Устанавливаем время и продолжительность после загрузки метаданных
    audioPlayer.addEventListener('loadedmetadata', function () {
      if (audioPlayer.duration) {
        durationDisplay.textContent = formatTime(audioPlayer.duration);

        // Устанавливаем прогрессбар на текущую минуту
        const secondsFromHourStart = currentMinute < 45 ? currentMinute * 60 : 0;
        audioPlayer.currentTime = Math.min(secondsFromHourStart, audioPlayer.duration);
        updateProgress(); // Обновляем прогрессбар на нужное значение
      } else {
        durationDisplay.textContent = '0:00';
      }
    });
  } else {
    console.error("Аудиофайл для текущего часа не найден.");
    durationDisplay.textContent = '0:00';
  }

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
      // Переключаем на следующий трек
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
