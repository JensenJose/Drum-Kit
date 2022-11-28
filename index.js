var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumButtons; i++){
    //Detecting mouse press
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var button = this.innerHTML;
        buttonPressed(button);
        buttonAnimation(button);
        
    });
}

//Detecting keyboard press
document.addEventListener("keydown", function(event){
    buttonPressed(event.key);
    buttonAnimation(event.key);
})


//Detecting the sound
function buttonPressed(character){
    switch (character) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey){
    var presentKey = document.querySelector("." + currentKey);
    presentKey.classList.add("pressed");
    setTimeout(function(){
        presentKey.classList.remove("pressed");
    }, 100)

}

