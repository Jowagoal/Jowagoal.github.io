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
  
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(250, 250, 250, 500, 500, 500);
  pointLight(250, 250, 250, -500, 500, 500);
  pointLight(250, 250, 250, 0, -500, 500);
  
  noStroke();
  fill(0, 255,0,50);
  cylinder(20, 50, 25, 25);
}

function windowResized(){
  setup();
}