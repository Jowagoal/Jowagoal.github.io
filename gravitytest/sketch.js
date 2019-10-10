// State Variable - Snake
// Jordie Walter
// Sept 9, 2019
//
// Extra for Experts:

let gravity = 1;
let shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  placeShapes();
}

function placeShapes(){
  for(var i=0; i<shapes.length; i++){
    circle(shapes[i].x, shapes[i].y, shapes[i].radius);
    shapes[i].y-=shapes[i].velocity;
    shapes[i].velocity-=gravity;
    if(shapes[i].y<=height-shapes[i].radius&&shapes[i].y>=height-shapes[i].radius-1&&shapes[i].velocity<=-1){
      shapes[i].velocity*=0;
    }
    if(shapes[i].y>=height-shapes[i].radius){
      shapes[i].velocity*=-0.8;
    }
  }
}

function mousePressed(){
  let newShape = {
    x: mouseX,
    y: mouseY,
    velocity: 2,
    radius: 10,
    color: color(random(0,255),random(0,255),random(0,255),random(0,255)),
  };
  shapes.push(newShape);
}

function windowResized(){
  setup();
}