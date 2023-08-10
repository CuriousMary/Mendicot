// index.js
document.addEventListener('DOMContentLoaded', function () {
    const playButton = document.querySelector('.play-button');
    const howToPlayButton = document.querySelector('.how-to-play-button');

    playButton.addEventListener('click', function () {
        window.location.href = 'playgame.html'; // Redirect to the play page
    });

    howToPlayButton.addEventListener('click', function () {
        window.location.href = 'howtoplay.html'; // Redirect to the how to play page
    });
});
