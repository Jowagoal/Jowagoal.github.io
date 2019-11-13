// Bouncing ball demo
// Jordie Walter
// Sept 9, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  for(var i=ballArray.length-1; i>=0; i--){
    ballArray[i].move();
    for(var j=ballArray.length-1; j>=0; j--){
      if(i!==j&&ballArray[i].checkForCollision(ballArray[j])){
        let tempDx = ballArray[i].dx;
        let tempDy = ballArray[i].dy;
        ballArray[i].dx = ballArray[j].dx;
        ballArray[i].dy = ballArray[j].dy;
        ballArray[j].dx = tempDx;
        ballArray[j].dy = tempDy;
      }
    }
    ballArray[i].display();
  }
}

function windowResized() {
  setup();
}

function keyPressed() {
  if(key === ' '){
    ballArray.push(new Ball(mouseX,mouseY,dx = random(-15, 15),dx = random(-15, 15),50));
  }
}

class Ball {
  constructor(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.fillColor = color(0);
  }

  move() {
    // move
    this.x += this.dx;
    this.y += this.dy;
    // bounce if needed
    if (this.x > width - this.radius/2 || this.x < 0 + this.radius/2) {
      this.dx *= -1;
    }
    
    if (this.y > height - this.radius/2 || this.y < 0 + this.radius/2) {
      this.dy *= -1;
    }
  }

  display() {
    fill(this.fillColor);
    circle(this.x, this.y, this.radius * 2);
  }

  checkForCollision(anotherBall) {
    let distanceBetweenCenters = dist(this.x, this.y, anotherBall.x, anotherBall.y);
    let sumOfRadii = this.radius + anotherBall.radius;
    if(distanceBetweenCenters<sumOfRadii){
      return true;
    }else{
      return false;
    }
  }
}