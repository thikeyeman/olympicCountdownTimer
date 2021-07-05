const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


const olympicTime= new Date('July 23 2021 00:00:00');

function countdownTimer(){
    const timeNow = new Date();
    const diff = olympicTime - timeNow;

    const day = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hour = Math.floor(diff/1000/60/60)%24;
    const minute = Math.floor(diff/1000/60)%60;
    const second = Math.floor(diff/1000)%60;

    
    if(diff>0){
    days.innerHTML = day<10?'0'+day:day;
    hours.innerHTML = hour<10? '0'+hour:hour;
    minutes.innerHTML = minute<10?'0'+minute:minute;
    seconds.innerHTML = second<10?'0'+second:second;
    }
    else{
    days.innerHTML = "00";
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    }

}

setInterval(countdownTimer,1000);