//Button event listening

for(let i=0;i<7;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
    makesound(this.innerText);
    buttonanimation(this.innerText);
});
}

//btn events ends here and keyboard events starts here

document.addEventListener("keypress",function(e){
    var loweWord=e.key.toLowerCase();
    makesound(loweWord);
    buttonanimation(loweWord);
});


//keyboard events ends here and a common function which plays sounds here starts here


function makesound(key){
    switch(key){
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break
        case "j":
            new Audio('sounds/crash.mp3').play();
            break
        case "k":
            new Audio('sounds/kick-bass.mp3').play();
            break
        case "l":
            new Audio('sounds/snare.mp3').play();
            break
        default:
            console.log("invalid key");

    }
}
function buttonanimation(butt){
    var activebtn = document.querySelector("."+butt);
    activebtn.classList.add("pressed");
    setTimeout(() => {
        activebtn.classList.remove("pressed")
    }, 200);
}