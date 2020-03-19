// Line Art Demo
// Jordie Walter
// Sept 9, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let event = MouseEvent;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  if(mouseIsPressed){
    line(mouseX,mouseY,pmouseX,pmouseY);
  }
  //console.log(event);
}