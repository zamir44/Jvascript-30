var secondHand = document.querySelector(".second-hand");
var minuteHand = document.querySelector(".min-hand");
var hourHand = document.querySelector(".hour-hand");

function updateClock(){
    var currentTime = new Date();
    hourHand.style.transform = `rotate(${30*currentTime.getHours()+90}deg)`;
    minuteHand.style.transform = `rotate(${6*currentTime.getMinutes()+90}deg)`;
    secondHand.style.transform = `rotate(${6*currentTime.getSeconds()+90}deg)`;
}

setInterval(updateClock,1000);