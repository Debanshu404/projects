let [seconds,minutes,hours]=[0,0,0]
let displayTime=document.getElementById("displayTime");
let timer=null
//creating a functio to simulate the stopwatch
function stopwatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++
        if(minutes==60){
            minutes=0
            hours++;
        }
    }
    let h=hours<10?"0"+hours:hours;
    let m=hours<10?"0"+minutes:minutes;
    let s=hours<10?"0"+seconds:seconds;
    // if(h<10){
    //     "0"+hours
    // }else{
    //     hours
    // }
    displayTime.innerHTML=h+":"+m+":"+s
}
function startWatch(){
    if(timer!==null){
        clearInterval(timer)
    }
   timer= setInterval(stopwatch,1000)
}
function stopWatch(){
    clearInterval(timer)
}
function WatchReset(){
    clearInterval(timer)
   let time= [seconds,minutes,hours]=[0,0,0]
    displayTime.innerHTML="00:00:00";
    
}