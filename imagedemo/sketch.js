// Line Art Demo
// Jordie Walter
// Sept 9, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let dory;
let verticalSize = 80
let horizontalSize = 100;

function preload(){
  dory = loadImage("assets/Dory.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  imageMode(CENTER);
  image(dory,mouseX,mouseY,horizontalSize,verticalSize);
  increaseSize();
}

function increaseSize(){
  if(keyIsDown(38)){
    verticalSize *=1.01;
    horizontalSize *=1.01;
  }
  if(keyIsDown(40)){
    verticalSize *=0.99;
    horizontalSize *=0.99;
  }
}