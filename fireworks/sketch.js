// Line Art Demo
// Jordie Walter
// Sept 9, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theFireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (let i = theFireworks.length-1; i>=0; i--) {
    theFireworks[i].move();
    if (theFireworks[i].isDone()) {
      theFireworks.splice(i, 1);
    }
    else {
      theFireworks[i].display();
    }
  }
}

function mousePressed() {
  for(var i=0; i<50; i++){
    /*
    let xDir = map(cos(i*4), -1, 1, -3, 3);
    let yDir = map(sin(i*4), -1, 1, 3, -3);

    xDir += random(-0.5, 0.5);
    yDir += random(-0.5, 0.5);
    */

    //let myFirework = new Particle(mouseX, mouseY, xDir, yDir, 3);

    let myFirework = new Particle(mouseX, mouseY, random(-3,3), random(-3,3), 3);
    theFireworks.push(myFirework);
  }
}

class Particle {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.alpha = 255;
    this.gravity = 0.04;
  }

  display() {
    fill(255,0,0,this.alpha);
    circle(this.x, this.y, this.radius * 2);
    let myFirework = new Trail(this.x, this.y, this.dx/2, this.dy/2, 3);
    theFireworks.push(myFirework);
  }

  move() {
    this.dy += this.gravity;
    this.x += this.dx;
    this.y += this.dy;
    this.alpha -= 1;
  }

  isDone() {
    return this.alpha <= 0;
  }
}

class Trail {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.alpha = 255;
    this.gravity = 0.01;
  }

  display() {
    fill(255,0,0,this.alpha);
    circle(this.x, this.y, this.radius * 2);
  }

  move() {
    this.dy += this.gravity;
    this.x += this.dx;
    this.y += this.dy;
    this.alpha -= 8;
  }

  isDone() {
    return this.alpha <= 0;
  }
}