

var hh = 0;
var mm = 0;
var ss = 0;

var tiempo= 1000;
var cronometer;

function start(){
    cronometer = setInterval(() => {contador(); }, tiempo);

}
function stop(){
    clearInterval(cronometer);
    
}
function restart(){
    clearInterval(cronometer);
     hh = 0;
     mm = 0;
     ss = 0;
}
function contador(){
    var format = 
    document.getElementById("contador").innerText ="pass";
}