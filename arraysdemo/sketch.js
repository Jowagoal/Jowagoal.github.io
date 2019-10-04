// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  noStroke();
  for(var i=0; i<shapes.length; i++){
    shapes[i].y+=shapes[i].dy;
    fill(shapes[i].color);
    ellipse(shapes[i].x, shapes[i].y, shapes[i].radius);
  }
}

function mousePressed(){
  let someShape = {
    x: mouseX,
    y: mouseY,
    radius: random(5,100),
    color: color(random(0,255),random(0,255),random(0,255),random(0,255)),
    dy: random(20,1)
  };
  shapes.push(someShape);
}

function windowResized(){
  setup();
}