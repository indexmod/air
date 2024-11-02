const tracks = [
    { title: "Трек 1", url: "https://air.indexmod.xyz/audio/00-59-45-00-00-14.mp3" },
    { title: "Трек 2", url: "https://air.indexmod.xyz/audio/00-00-00-00-59-44.mp3" },
];

const audioElement = document.getElementById('audio');
const trackInfo = document.getElementById('track-info');
let currentTrackIndex = 0;

function playTrack(index) {
    const track = tracks[index];
    audioElement.src = track.url;
    trackInfo.textContent = `Сейчас играет: ${track.title}`;
    audioElement.play();
}

audioElement.addEventListener('ended', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    playTrack(currentTrackIndex);
});

// Начинаем воспроизведение с первого трека
playTrack(currentTrackIndex);
