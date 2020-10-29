var setMainBtn = false;
var setMusic = 'sea'
var audio = document.createElement("audio");
var timeToEnd = 1800;

function funcSetMusic(string) {
    setMusic = string; 
    setMainBtn = false;
    clearInterval(upVolume);
    clearInterval(intervalId);
    // downSetVolume = setInterval(function(){
    //     audio.volume = Math.max(audio.volume - 0.05, 0);
    //     console.log(audio.volume.toFixed(2));
    //     if(audio.volume.toFixed(2) < 0.04) {clearInterval(downSetVolume); audio.pause();}
    // },100);
    audio.src = "/music/" + setMusic + ".mp3";
            audio.volume=0;
            upVolume = setInterval(function(){
                audio.volume = Math.min(audio.volume + 0.01, 1);
                console.log(audio.volume);
                if(audio.volume.toFixed(2) > 0.98)clearInterval(upVolume);
            },100);
            intervalId = setInterval(function runAudio() {audio.play()}, timeToEnd)
            document.getElementById("imgMainBtn").src = "/icon/stop.svg";
            setMainBtn = true;
} 

window.onload = function() {

    document.getElementById("imgMainBtn").addEventListener("touchstart", function(event) {
        if (setMainBtn === false) {
            audio.src = "/music/" + setMusic + ".mp3";
            audio.volume=0;
            upVolume = setInterval(function(){
                audio.volume = Math.min(audio.volume + 0.01, 1);
                console.log(audio.volume);
                if(audio.volume.toFixed(2) > 0.98)clearInterval(upVolume);
            },100);
            intervalId = setInterval(function runAudio() {audio.play()}, timeToEnd)
            document.getElementById("imgMainBtn").src = "/icon/stop.svg";
            setMainBtn = true;
    
        } else if (setMainBtn === true) {
            downVolume = setInterval(function(){
                audio.volume = Math.max(audio.volume - 0.05, 0);
                console.log(audio.volume.toFixed(2));
                if(audio.volume.toFixed(2) < 0.04) {clearInterval(downVolume); clearInterval(intervalId); audio.pause();}
            },100);
            document.getElementById("imgMainBtn").src = "/icon/play.svg";
            setMainBtn = false;
        }
        });
}

function changeBtn() {

    if (setMainBtn === false) {
        audio.src = "/music/" + setMusic + ".mp3";
        audio.volume=0;
        upVolume = setInterval(function(){
            audio.volume = Math.min(audio.volume + 0.01, 1);
            console.log(audio.volume);
            if(audio.volume.toFixed(2) > 0.98)clearInterval(upVolume);
        },100);
        intervalId = setInterval(function runAudio() {audio.play()}, timeToEnd)
        document.getElementById("imgMainBtn").src = "/icon/stop.svg";
        setMainBtn = true;

    } else if (setMainBtn === true) {
        downVolume = setInterval(function(){
            audio.volume = Math.max(audio.volume - 0.05, 0);
            console.log(audio.volume.toFixed(2));
            if(audio.volume.toFixed(2) < 0.04) {clearInterval(downVolume); clearInterval(intervalId); audio.pause();}
        },100);
        document.getElementById("imgMainBtn").src = "/icon/play.svg";
        setMainBtn = false;
    }
    
    
}
