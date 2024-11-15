// Get the music and toggle button elements
const music = document.getElementById('background-music');
const musicToggle = document.getElementById('music-toggle');
const soundIcon = document.getElementById('sound-icon');

// Automatically play music when the page loads
window.addEventListener('load', () => {
    music.play();
});

// Default state: Music is playing
let isPlaying = true;

// Function to toggle music
musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        music.pause(); // Pause music
        soundIcon.src = './mute.png'; // Switch to "sound-off" icon
    } else {
        music.play(); // Play music
        soundIcon.src = './speaker-on.png'; // Switch to "sound-on" icon
    }
    isPlaying = !isPlaying; // Toggle state
});
