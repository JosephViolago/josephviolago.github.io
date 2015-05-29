(function() {

    var logo = document.getElementById('logo'),
        audio = document.getElementById('audio')
        mute = document.getElementById('mute')
        select = document.getElementById('nav');

    function audioPlay() {
        if (audio.paused) {
            audio.play();
        } else {
            audioReset();
        }
    }

    function audioReset() {
        audio.currentTime = 83.2;
    }

    select.addEventListener('click', function() {
        audioReset();
        select.classList.add('depress');
        audioPlay();
    }, false);

    logo.addEventListener('click', function() {
        audioReset();
        logo.classList.add('pulsate');
        audioPlay();
    }, false);

    mute.addEventListener('click', function() {
        audio.pause();
        logo.classList.remove('pulsate');
        select.classList.remove('depress');
    }, false);

    audio.addEventListener('canplay', function() {
        audioReset();
    }, false);

    audio.addEventListener('ended', function() {
        logo.classList.remove('pulsate');
    }, false);

}());
