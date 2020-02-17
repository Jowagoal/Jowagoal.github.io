let walkers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  for(var i=0; i<walkers.length; i++){
    walkers[i].move();
    walkers[i].display();
  }
  if(keyIsDown(82)){
    background(0);
    walkers = [];
  }
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

function mouseClicked(){
  walkers.push(new Walker(mouseX, mouseY));
}