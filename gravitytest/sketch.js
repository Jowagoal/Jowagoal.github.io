// State Variable - Snake
// Jordie Walter
// Sept 9, 2019
//
// Extra for Experts:

let hi;
let theSmoke = [];
let translator = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  hi = new Smoke();
}

function draw() {
  background(220);
  orbitControl();
  normalMaterial();
  translate(-100,0,0);
  box(50);
  translate(100,0,0);
  hi.display();
  hi.update();
  for (let i = theSmoke.length-1; i>=0; i--) {
    theSmoke[i].update();
    if (theSmoke[i].isDone()) {
      theSmoke.splice(i, 1);
    }
    else {
      theSmoke[i].display();
    }
  }
}

class Smoke {
  constructor(mover) {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.radius = 5*10;
    this.alpha = 255;
    this.mover = mover;
  }

  display() {
    noStroke();
    fill(100,this.alpha);
    push();
    translate(this.mover,this.y,0);
    sphere(this.radius);
    translate(5*10,-2.5*10,0);
    sphere(this.radius);
    translate(0,5*10,-2.5*10);
    sphere(this.radius);
    translate(-2.5*10,0,5*10);
    sphere(this.radius);
    pop();
  }

  update() {
    this.y-=0.1;
    this.radius-=0.1;
    this.alpha-=1;
  }

  isDone() {
    return this.alpha <= 0;
  }
}

function mouseClicked(){
  translator+=50;
  let mySmoke = new Smoke(translator);
  theSmoke.push(mySmoke);
}

/*
class Smoke {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.radius = 5;
    this.alpha = 255;
  }

  display() {
    fill(50,this.alpha);
    push();
    translate(0,this.y,0);
    for(var i=0; i<5; i++){
      rotate(PI/i);
      translate(2.5);
      sphere(this.radius);
      translate(-2.5);
    }
    pop();
  }

  update() {
    this.y+=0.1;
    this.radius-=0.1;
    this.alpha-=1;
  }

  isDone() {
    return this.alpha <= 0;
  }
}
*/

function windowResized(){
  setup();
}