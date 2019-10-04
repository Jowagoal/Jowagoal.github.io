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
  fill(0,255,0,20);
  background(220);
  orbitControl();

  strokeWeight(1);
  stroke(2);
  box(50);
  translate(50,0,0);
  box(50);
  translate(50,0,0);
  box(50);
  translate(50,0,0);
  box(50);
  translate(0,0,-50);
  box(50);
  translate(0,0,-50);
  box(50);
  translate(0,0,-50);
  box(50);
  translate(0,50,0);
  box(50);
  translate(0,50,0);
  box(50);
  translate(0,50,0);
  box(50);

  fill(255,0,0);
  translate(500,0,0);
  sphere(25,25,25);
  translate(-500,0,0);

  fill(0,255,0,20);
  translate(0,50,0);
  box(50);
}

function windowResized(){
  setup();
}