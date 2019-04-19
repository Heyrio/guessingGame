
window.onload = function (){

// blip soind on h1 hover
    $(document).ready(function(){
        $("h1").hover(function(){
            nav_audio.play();
            },
        function(){
            nav_audio.load();
        });
    });
    

// Plays a wav file in a loop
    myAudio = new Audio('./music/intro.wav'); 
    myAudio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    var promise = myAudio.play();
    if(promise){
        promise.catch(function(error) { console.log(error); });
    }
}
