// Bouncing ball demo
// Jordie Walter
// Sept 9, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let y;
let dx;
let dy;
let radius = 100;
let mode = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  dx = random(-15,15);
  dy = random(-15,15);
}

function draw() {
  background(255);
  noStroke();
  fill(0);
  if(mode===1){
    circle(x, y, radius);
    moveShape();
  }else if(mode===-1){
    rect(x-radius/2, y-radius/2, radius, radius);
    moveShape();
  }
}

function windowResized(){
  setup();
}

function moveShape(){
  y+=dy;
  if(y>height-radius/2||y<0+radius/2){
    dy*=-1;
  }
  x+=dx;
  if(x>width-radius/2||x<0+radius/2){
    dx*=-1;
  }
}

function keyTyped(){
  if(key===' '){
    mode*=-1;
  }
}