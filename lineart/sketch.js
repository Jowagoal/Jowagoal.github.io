// Line Art Demo
// Jordie Walter
// Sept 9, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  if(onmousedown===true){
    line(mouseX,mouseY,pmouseX,pmouseY);
  }
}