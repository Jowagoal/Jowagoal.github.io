// Line Art Demo
// Jordie Walter
// Sept 9, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let george;
let jenna;

function setup() {
  createCanvas(windowWidth, windowHeight);
  george = new Walker(100, 200);
  jenna = new Walker(300, 400);
  background(0);
}

function draw() {
  george.move();
  george.display();
  jenna.move();
  jenna.display();
}

class Walker{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.fillColor = color(random(255), random(255), random(255),);
    this.stepSize = 3;
    this.radius = 3;
  }

  display(){
    fill(this.fillColor);
    noStroke();
    circle(this.x, this.y, this.radius);
  }

  move(){
    let choice = random(100);
    if(choice<25){
      this.y-=this.stepSize;
    }else if(choice<50){
      this.y+=this.stepSize;
    }else if(choice<75){
      this.x-=this.stepSize;
    }else{
      this.x+=this.stepSize;
    }
  }
}