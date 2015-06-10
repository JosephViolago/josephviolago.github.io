(function() {

    var logo = document.getElementById('logo'),
        audio = document.getElementById('audio')
        mute = document.getElementById('mute')
        select = document.querySelectorAll('#nav>li>button')
        $checkpoint = '';

    function audioPlay() {
        if (audio.paused) {
            audio.volume = 1;
            audio.play();
        } else {
            audioReset();
        }
    }

    function audioReset(checkpointText) {
        if (checkpointText == 'outro')  {
            $checkpoint = 116.6;
        } else {
            $checkpoint = 83.2;
        }

        audio.currentTime = $checkpoint;
        return $checkpoint;
    }

    select[0].addEventListener('click', function() {
        audio.pause();
        audioReset();
        logo.classList.remove('pulsate');
        select[0].classList.add('depress');
        select[1].classList.remove('depress');
    }, false);

    select[1].addEventListener('click', function() {
        audio.pause();
        audioReset('outro');
        logo.classList.remove('pulsate');
        select[0].classList.remove('depress');
        select[1].classList.add('depress');
    }, false);

    logo.addEventListener('click', function() {
        logo.classList.add('pulsate');
        audioPlay();
    }, false);

    mute.addEventListener('click', function() {
        audio.pause();
        audioReset($checkpoint);
        logo.classList.remove('pulsate');
    }, false);

    audio.addEventListener('canplay', function() {
    }, false);

    audio.addEventListener('ended', function() {
        logo.classList.remove('pulsate');
    }, false);

    select[0].click();

    // every second your audio element is playing
    $(audio).on('timeupdate', function() {
        var vol = 1,
        interval = 200; // 200ms interval

        if (Math.floor(audio.currentTime) >= 117.8 ||
            Math.floor(audio.currentTime) >= 85.3) {
            if (audio.volume == 1) {
                var intervalID = setInterval(function() {
                    // Reduce volume by 0.05 as long as it is above 0
                    // This works as long as you start with a multiple of 0.05!
                    if (vol > 0) {
                        vol -= 0.05;
                        // limit to 2 decimal places
                        // also converts to string, works ok
                        audio.volume = vol.toFixed(2);
                    } else {
                        // Stop the setInterval when 0 is reached
                        clearInterval(intervalID);
                        mute.click();
                    }
                }, interval);
            }
        }
    });

}());

google.load('webfont','1');

google.setOnLoadCallback(function() {
    WebFont.load({
        google: {
            families: ['Futurama Title Font']
        },
        fontactive : function(fontFamily, fontDescription) {
            init();
        },
        fontinactive: function(fontFamily, fontDescription) {
            init();
        }
    });
});

$('#warped').hide();
var $titleMain = $('.title h1').hide();
var $titleFill = $('.title p').hide();

function init() {
    // $title.show();
    $titleMain.show().arctext({radius: 300});
    $titleFill.show().arctext({radius: 300});
}

$(document).ready(function() {

});
