

// Plays a wav file in a loop

$(document).ready(function(){
    $("h1").hover(function(){
        nav_audio.play();
        },
    function(){
        nav_audio.load();
    });
});




myAudio = new Audio('./music/intro.wav'); 
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
myAudio.play();