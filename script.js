var ms = 0 , s = 0 , m = 0 , h = 0
var timer

var display=document.querySelector('.timer-display')
var laps=document.querySelector('.laps')

function start(){
    if(!timer){
        timer=setInterval(run,10)
    }
}

function run(){
    display.innerHTML=getTimer()
    ms++
    if(ms == 100){
        ms = 0
        s++
    }
    if(s == 60){
        s = 0
        m++
    }
    if(m == 60){
        m = 0
        h++
    }
}

function getTimer(){
    return(h<10 ? "0" + h : h) + " : " + (m<10 ? "0" + m : m) + " : " + (s<10 ? "0" + s : s) + " : " + (ms<10 ? "0" + ms : ms)
}

function pause(){
    stopTimer()
}

function stopTimer(){
    clearInterval(timer)
    timer = false
}

function reset(){
    stopTimer()
    ms = 0
    s = 0
    m = 0
    h = 0
    display.innerHTML=getTimer()
}

function restart(){
    if(timer){
        reset()
        start()
    }
}

function lap(){
    if(timer){
        var li=document.createElement("li")
        li.innerHTML=getTimer()
        laps.appendChild(li)
    }
}

function resetLap(){
    laps.innerHTML=""
}