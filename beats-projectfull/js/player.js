let player;
const playerContainer = $(".player");
const sound = $(".sound__btn");
const soundline = $(".sound__length");

let eventsInit = () => {
    $(".player__start").click(e => {
        e.preventDefault();

        const btn = $(e.currentTarget);

        if (playerContainer.hasClass("paused")) {
            player.pauseVideo();
        } else {
            player.playVideo();
        }
    });

    $(".player__playback").click(e => {
        const bar = $(e.currentTarget);
        const clickedPosition = e.originalEvent.layerX;
        const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
        const newPlaybackPositionSec = (player.getDuration() / 100) * newButtonPositionPercent;

        $(".player__playback-button").css ({
            left: `${newButtonPositionPercent}%`
        });


        player.seekTo(newPlaybackPositionSec);
    });

    $(".player__splash").click (e => {
        player.playVideo();
    })

    $(".sound__btn").click (e => {
        if(playerContainer.hasClass("paused")) {
            if(sound.hasClass("sound--active")) {
                player.mute();
                sound.removeClass("sound--active");
            } else {
                sound.addClass("sound--active");
                player.unMute();
            }
        }
    })

    $(".sound__length").change((e) => {
        const bar = $(e.currentTarget);

        let value = bar.val();

        player.setVolume(value);
    })
};

const formatTime = timeSec => {
    const roundTime = Math.round(timeSec);

    const minutes = addZero(Math.floor(roundTime / 60));
    const seconds = addZero(roundTime - minutes * 60);

    function addZero(num) {
        return num < 10 ? `0${num}` : num;
    }

    return `${minutes} : ${seconds}`;
}

const onPlayerReady = () => {
    let interval;
    const durationSec = player.getDuration();

    $(".player__duration-estimate").text(formatTime(durationSec));

    if (typeof interval != 'undefined') {
        clearInterval(interval);
    }

    interval = setInterval(() => {
        const completedSec = player.getCurrentTime();
        const completedPercent = (completedSec / durationSec) * 100;

        $(".player__playback-button").css({
            left: `${completedPercent}%`
        });

        $(".player__duration-completed").text(formatTime(completedSec));
    }, 1000);
};

const onPlayerStateChange = event => {
    /*
        -1 (воспроизведение видео не начато)
        0 (воспроизведение видео завершено)
        1 (воспроизведение)
        2 (пауза)
        3 (буферизация)
        5 (видео подают реплики).
    */
    switch (event.data) {
        case 1:
            playerContainer.addClass("player--active");
            playerContainer.addClass("paused");
            sound.addClass("sound--active");
        break;
    
        case 2:
            playerContainer.removeClass("player--active");
            playerContainer.removeClass("paused");
            sound.removeClass("sound--active");
        break;
    }
};

function onYouTubeIframeAPIReady() {
    player = new YT.Player("yt-player", {

        height: "391",
        width: "663",

        videoId: "7jy8CJTCY-8",
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        },
        playerVars: {
            controls: 0,
            disaledkb: 0,
            showinfo: 0,
            rel: 0,
            autoplay: 0,
            modestbranding: 0
        }
    });
}

eventsInit();