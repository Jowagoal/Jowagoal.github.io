// Line Art Demo
// Jordie Walter
// Sept 9, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let snake = [];

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  snake.push(new Body());
}

function draw(){
  background(220);
  fill(0,255,0,50)
  orbitControl();
  for(let i=0; i<snake.length; i++){
    snake[i].move();
    snake[i].display();
  }
}

class Body{
  constructor(){
    this.moveF = []
    this.angley = [];
  }

  move(){
    translate(0,0,this.moveF);
    rotateY(this.angley);
    this.moveF-=1;
    
    if(keyIsDown(68)){
      this.angley-=.03;
    }else if(keyIsDown(65)){
      this.angley+=.03;
    }
  }

  display(){
    box(50);
  }
}
