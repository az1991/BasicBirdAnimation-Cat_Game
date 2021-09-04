
var id = null;
var elem = document.getElementById("myAnimation");
var audio = new Audio('Sounds/birdsound.mp3');


//Coordinates:
function topRight(){
  elem.style.left = "1000px";
  elem.style.top = "0px";
}
function bottomRight(){
  elem.style.left = "1000px";
  elem.style.top = "200px";
}
function middleRight(){
  elem.style.left = "1000px";
  elem.style.top = "100px";
}
function topLeft(){
  elem.style.left = "0px";
  elem.style.top = "0px";
}
function bottomLeft(){
  elem.style.left = "0px";
  elem.style.top = "200px";
}
function middleLeft(){
  elem.style.left = "0px";
  elem.style.top = "150px";
}

function horizontalRight2Left(){
  elem.style.transform = 'rotate(0deg)';
  elem.style.visibility = 'visible';
//Set initial position
  middleRight()
  var leftPos = 1000;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (leftPos == 0) {
      clearInterval(id);
     document.getElementById("myAnimation").style.visibility='hidden';
    } else {
      leftPos=leftPos-5;
      elem.style.left = leftPos+'px';
    }
  }
}

function horizontalLeft2Right(){
  elem.style.transform = 'rotate(180deg)';
  elem.style.visibility = 'visible';
//Set initial position
  middleLeft()
  var leftPos = 0;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (leftPos == 1000) {
      clearInterval(id);
     document.getElementById("myAnimation").style.visibility='hidden';
    } else {
      leftPos=leftPos+5;
      elem.style.left = leftPos+'px';
    }
  }
}

function topLeft2BottomRight(){
  elem.style.transform = 'rotate(230deg)';
  elem.style.visibility = 'visible';
//Set initial position
  middleLeft()
  var leftPos = 0;
  var topPos = 0;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (leftPos == 1100) {
      clearInterval(id);
      document.getElementById("myAnimation").style.visibility='hidden';
    } else {
      leftPos=leftPos+5;
      topPos = topPos+2;
      elem.style.left = leftPos+'px';
      elem.style.top = topPos+'px';
    }
  }
}


function topRight2BottomLeft(){
  elem.style.transform = 'rotate(-30deg)';
  elem.style.visibility = 'visible';
//Set initial position
  topRight();
  var leftPos = 1000;
  var topPos = 0;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (leftPos == 0) {
      clearInterval(id);
      document.getElementById("myAnimation").style.visibility='hidden';
    } else {
      leftPos=leftPos-5;
      topPos = topPos+1.5;
      elem.style.left = leftPos+'px';
      elem.style.top = topPos+'px';
    }
  }
}


var randomNumber =0;
window.setInterval(function() {
  audio.play();
  if (randomNumber ==0){
    horizontalRight2Left();
  }else if (randomNumber ==1) {
    horizontalLeft2Right();
  }else if (randomNumber ==2) {
    topLeft2BottomRight();
  }else if (randomNumber ==3) {
    topRight2BottomLeft();
  }
  console.log("RandomNumber= "+randomNumber);
  randomNumber = Math.floor(Math.random() * 4);

}, 2*1000); // 1000 milliseconds (1 second)
