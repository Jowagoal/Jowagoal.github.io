// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let redAmount = 0;
let redChangeAmount = 1;

let greenAmount = 0;
let greenChangeAmount = 2;

let blueAmount = 0;
let blueChangeAmount = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw(x,y) {
  background(220, 100, 255);
  fill(redAmount,blueAmount,greenAmount);
  noStroke();
  ellipse(windowWidth-mouseX, windowHeight-mouseY, 100, 100); 
  
  redAmount+= redChangeAmount;

  if(redAmount >= 255){
    redChangeAmount *= -1;
  }
  if(redAmount <= 0){
    redChangeAmount *= -1;
  }

  blueAmount+= blueChangeAmount;

  if(blueAmount >= 255){
    blueChangeAmount *= -1;
  }
  if(blueAmount <= 0){
    blueChangeAmount *= -1;
  }

  greenAmount+= greenChangeAmount;

  if(greenAmount >= 255){
    greenChangeAmount *= -1;
  }
  if(greenAmount <= 0){
    greenChangeAmount *= -1;
  }
  console.log(redAmount);
}