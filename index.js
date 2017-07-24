(function() {
  'use strict';

var stop = document.getElementById('stopButton');
var stoplight = document.getElementById('stopLight');
stop.addEventListener('click', function(){
  if(stoplight.style["background-color"] === "red"){
  stoplight.style["background-color"] = "black";
} else {
  stoplight.style["background-color"] = "red"
};
});

stop.addEventListener('mouseover', function(){
  console.log("Entered " + stop.textContent + " button")
})


var slow = document.getElementById('slowButton');
var slowlight = document.getElementById('slowLight');
slow.addEventListener('click', function(){
  if(slowlight.style["background-color"] === "orange"){
  slowlight.style["background-color"] = "black";
} else {
  slowlight.style["background-color"] = "orange"
}
})

slow.addEventListener('mouseover', function(){
  console.log("Entered " + slow.textContent + " button")
})

var go = document.getElementById('goButton');
var golight = document.getElementById('goLight');
go.addEventListener('click', function(){
  if(golight.style["background-color"] === "green"){
  golight.style["background-color"] = "black";
} else {
  golight.style["background-color"] = "green"
}
})

go.addEventListener('mouseover', function(){
  console.log("Entered " + go.textContent + " button")
})

var clickLog = document.getElementsByClassName('button');
var bulbLog = document.getElementsByClassName('bulb');
for(let i  =0; i<clickLog.length; i++){
  clickLog[i].addEventListener('click', function(){
    if(bulbLog[i].style["background-color"] !== "black"){
    console.log(clickLog[i].textContent + " bulb on");
  } else {
    console.log(clickLog[i].textContent + " bulb off")
  }
});
}


})();
