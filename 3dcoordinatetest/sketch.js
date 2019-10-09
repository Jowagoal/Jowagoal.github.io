// State Variable - Snake
// Jordie Walter
// Sept 9, 2019
//
// Extra for Experts:

let x = 800;
let y = 300;
let z = -500;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
}

function draw() {
  background(220);
  orbitControl();
  
  fill(0,0,255);
  box(50);
  translate(-100, 0, 0);

  fill(255,0,0);
  box(50);

  fill(0,255,0);
  translate(200, 0, 0);
  box(50);
}

function windowResized(){
  setup();
}