// Bouncing ball demo
// Jordie Walter
// Sept 9, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = "menu";




let x;
let y;
let dx;
let dy;
let radius = 100;
let mode = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  x = width/2;
  y = height/2;
  dx = random(-15,15);
  dy = random(-15,15);
}

function draw() {
  background(255);
  noStroke();
  fill(0);
  if(state === "menu"){
    showMenu();
    checkIfButtonClicked();
  }else if(state === "circle"){
    circle(x, y, radius);
    moveShape();
  }else if(state === "rectangle"){
      rect(x-radius/2, y-radius/2, radius, radius);
      moveShape();
  }
}

function showMenu(){
rectMode(CENTER);

textAlign(CENTER, CENTER);
textSize(50);

fill(255, 0, 0, 125);
rect(width/2,height/2-100,400,150);
fill(0);
text("Rectangle", width/2, height/2-100);

fill(255, 0, 0, 125);
rect(width/2,height/2+100,400,150);
fill(0);
text("Circle", width/2, height/2+100);
}

function checkIfButtonClicked(){
  if(mouseIsPressed){
    //rectangle
    if(x>width/2-200 && x<width+200 && y>height/2-175 && y<height/2-25){
      state = "rectangle";
    }
    //circle
    if(x>width/2-200 && x<width+200 && y>height/2+25 && y<height/2+175){
      state = "circle";
    }
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