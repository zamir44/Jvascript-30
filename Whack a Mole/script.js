//declare all query selecter variables
var pointsDisplay = document.querySelector("#points-display");
var missesDisplay = document.querySelector("#misses-display");
var timeDisplay = document.querySelector("#time-display");
var moles = document.querySelectorAll(".mole");

//declare all back-end variables
var numPoints = 0;
var numMisses = 0;
var timeRemaining = 30;
//var activeMoles = [];
var inactiveMoles = [0,1,2,3,4,5,6,7,8];

//write basic methods
function addPoint(){
    numPoints++;
    pointsDisplay.innerHTML = numPoints;
}


function addMiss(){
    numMisses++;
    missesDisplay.innerHTML = numMisses;
}

function countDown(){
    if(timeRemaining===0)
        clearInterval(stopCode);
    else {
        activateMole();
        timeRemaining--;
        timeDisplay.innerHTML = timeRemaining;       
    }
}


function activateMole(){
    if(inactiveMoles.length>0){
        //Example with inactiveMoles = [0,1,3,5,6,7,8]
        //var indexOfNewMole = Math.floor(Math.random()*inactiveMoles.length); //indexOfNewMole = 5
        //var tempArray = inactiveMoles.splice(indexOfNewMole,1); //tempArray = [7]
        //var newMole = tempArray[0]; //newMole = 7
        var newMole = inactiveMoles.splice(Math.floor(Math.random()*inactiveMoles.length),1)[0]; 
        moles[newMole].classList.add("active");
        //activeMoles.push(newMole);
        
        //need to add an event listener
        var _listener = function(){
            deactivateMole(newMole);
        };
        
        function deactivateMole(mole){
            //score a point
            addPoint();

            //make the mole inactive
            moles[mole].classList.remove("active");
            moles[mole].removeEventListener("click",_listener);
            
            //move the mole to the inactive list
            inactiveMoles.push(mole);
        }      
        moles[newMole].addEventListener("click",_listener);

        //testing purposes---deleted later
        //console.log(activeMoles);
        //console.log(inactiveMoles);
    }
}



//main program
var stopCode = setInterval(countDown,1000);