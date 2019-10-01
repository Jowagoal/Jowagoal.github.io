// State Variable - Snake
// Jordie Walter
// Sept 9, 2019
//
// Extra for Experts:

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  fill(255,0,0);

}

function draw() {
  background(220);
  orbitControl();
  
  boxAt(50,0,0);
  boxAt(50,0,0);
  boxAt(50,0,0);
}

function boxAt(x,y,z){
  box(50);
  translate(x,y,z);
}

function windowResized(){
  setup();
}