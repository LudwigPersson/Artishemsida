document.addEventListener('DOMContentLoaded', function() {
    var audioPlayer = document.getElementById('audio-player');
    var playButton = document.getElementById('play-button');

    if (playButton && audioPlayer) {
        playButton.addEventListener('click', function() {
            if (audioPlayer.paused) {
                audioPlayer.play().catch(function(error) {
                    console.log('Autoplay is not allowed:', error);
                });
                playButton.querySelector('.fa-play').style.display = 'none';
                playButton.querySelector('.fa-pause').style.display = 'inline';
            } else {
                audioPlayer.pause();
                playButton.querySelector('.fa-play').style.display = 'inline';
                playButton.querySelector('.fa-pause').style.display = 'none';
            }
        });
    }
});