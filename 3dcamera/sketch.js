// Line Art Demo
// Jordie Walter
// Sept 9, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let xPosition = 0;
let yPosition = 0;
let zPosition = 90;
let xCameraShift = 10;
let yCameraShift = 10;
let zCameraShift = 10;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  normalMaterial();
  background(220);
}

function draw() {
  background(220)
  orbitControl();
  box(100);
}