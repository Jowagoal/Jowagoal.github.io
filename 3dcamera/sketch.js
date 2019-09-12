// Line Art Demo
// Jordie Walter
// Sept 9, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  normalMaterial();
  background(220);
}

function draw() {
  background(220)
  orbitControl();
  rotation();
  box(100);
}

function rotation(){
  if(keyIsDown(32)){
    console.log('space pressed');
    rotateY(mouseX*0.01);
    rotateX(mouseY*-0.01);
  }
}