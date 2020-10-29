var setMainBtn = false;
var setMusic = ['Sea', 'Fire', 'SunDay', 'Cafe']
var audio = document.createElement("audio");
var timeLeft = 0;

window.onload = function() {

    document.getElementById("imgMainBtn").addEventListener("touchstart", function(event) {
        changeBtn();
        });
}

function changeBtn() {
    

    if (setMainBtn === false) {
        audio.src = "/music/test.mp3";
        setInterval(function runAudio() {audio.play()}, 12)
        audio.play();
        document.getElementById("imgMainBtn").src = "/icon/stop.svg";
        setMainBtn = true;
    } else if (setMainBtn === true) {
        audio.pause();
        document.getElementById("imgMainBtn").src = "/icon/play.svg";
        setMainBtn = false;
    }
    
    
}