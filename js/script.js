$(document).ready(function(){
    var audio = null;
    $(".btn").click(function(){
        
        
        var name = $(this).attr("id");
        animatePress(name);
        var audiopath = "../sounds/"+ name + ".mp3";
        if(audio && audio.src !== audiopath){
            audio.pause();
            audio.currentTime = 0;
        }
        audio = new Audio(audiopath);
        
        audio.oncanplay = function(){
            audio.play();
        };  
    });
});





function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
}

// function playSound(name) {
//     var audio = new Audio("sounds/" + name + ".mp3");
//     audio.play();

// }