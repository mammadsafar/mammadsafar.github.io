const theTimer=document.querySelector(".timer");
const startBtn=document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const lapBtn = document.querySelector("#lap");
const resetBtn = document.querySelector("#reset");
var interval;

var timer=[0,0,0,0];



function leadingZero(time){

    if(time<=9)
    {
     time="0"+time;
    }

    return time;
}

function runTimer(){
    let currentTime= leadingZero(timer[0])+":"+leadingZero(timer[1])+"."+leadingZero(timer[2]);

    theTimer.innerHTML=currentTime;

    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);

    timer[1] = Math.floor(timer[3]/100)-(timer[0]*60);

    timer[2] = Math.floor(timer[3]-(timer[1]*100)-(timer[0]*6000));

}




function start(){
    interval = setInterval(runTimer,10);
    stopBtn.style.display = "block";
    startBtn.style.display = "none";
    lapBtn.style.color ="white";
    resetBtn.style.display ="none";
    lapBtn.style.display ="block";
    lapBtn.style.backgroundColor ="rgb(112, 112, 112)";
}

startBtn.addEventListener("click",start);

function lap(){

    interval.document.innerHTML('td');
}

lapBtn.addEventListener("click",lap);


function reset(){
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    theTimer.innerHTML = "00:00.00";
    resetBtn.style.display ="none";
    lapBtn.style.display ="block";
    stopBtn.style.display ="none";
    startBtn.style.display ="block";
    lapBtn.style.color="rgb(185, 185, 185)";
    lapBtn.style.backgroundColor ="rgb(48, 48, 48)";
}
resetBtn.addEventListener("click",reset);




function stop(){
    lapBtn.style.display = "none";
    resetBtn.style.display = "block";
    resetBtn.style.backgroundColor ="rgb(112, 112, 112)";
    resetBtn.style.color ="white";
    if (interval) {
        clearInterval(interval);
        interval = null;
    }

    stopBtn.style.display ="none";
    startBtn.style.display = "block";
}
stopBtn.addEventListener("click",stop);


