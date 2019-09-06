// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let redAmount = 0;
let redChangeAmount = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220, 100, 255);
  fill(redAmount,50,250);
  noStroke();
  ellipse(windowWidth-mouseX, windowHeight-mouseY, 100, 100); 
  
  redAmount+= redChangeAmount;

  if(redAmount >= 255){
    redChangeAmount *= -1;
  }
  if(redAmount <= 0){
    redChangeAmount *= -1;
  }

  console.log(redAmount);
}