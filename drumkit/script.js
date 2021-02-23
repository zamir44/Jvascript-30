// window.addEventListener("keydown", playSound )

// function playSound(e) {
//     var btn = document.querySelector(`div[data-key="${e.keyCode}"]`);
//     if(!btn)
//         return;

//         var sound = document.querySelector(`audio[data-key="${e.keyCode}"]`)
//         sound.play();
//         sound.currentTime = 0;
// }

//apply the css class

//play the audio file







// let add = 0;

// function addOne() {
//     add++;
//     return add;
// }



window.addEventListener("keydown",playSound);

//add listeners to each button
var keys = document.querySelectorAll(".key");
keys.forEach(key => {
    key.addEventListener("transitionend",removeHighlight);
});

function removeHighlight(e){
    e.srcElement.classList.remove("playing");
}

function playSound(e) {    
    //test if e.keyCode is one of the buttons
    var btn = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!btn)
        return;
    
    var sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    
    //apply the css class
    btn.classList.add("playing");
    
    //play the audio file
    sound.currentTime = 0;
    sound.play();
}
