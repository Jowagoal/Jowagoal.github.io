let theParticles = [];
let theForce = [];
let maxSpeed = 1;
let forcePower = maxSpeed/20;
let spacing;

function setup(){
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(0,20);
  spacing = width/15;
  for(var i=0; i<1000; i++){
    theParticles.push(new Particle(random(0,width),random(0,height),random(-3,3),random(-3,3)));
  }
  for(var x=1; x<width; x+=spacing){
    for(var y=1; y<height; y+=spacing){
      noiseDetail(2, 0.2)
      theForce.push(new Force(x,y,8*noise(x,y),forcePower));
    }
  }
}

function draw() {
  for(var i=theParticles.length-1; i>=0; i--){
    theParticles[i].move();
    theParticles[i].display();
  }
  for(var i=theForce.length-1; i>=0; i--){
    //theForce[i].display();
  }
}

class Particle{
  constructor(x,y,mx,my){
    this.x = x;
    this.y = y;
    this.moveX = mx;
    this.moveY = my;
  }

  move(){
    this.x+=this.moveX;
    this.y+=this.moveY;
    if(this.x>=width){
      let hold = this.x-width;
      this.x = 0-hold;
    }else if(this.x<=0){
      this.x = width-this.x;
    }
    if(this.y>=height){
      let hold = this.y-height;
      this.y = 0-hold;
    }else if(this.y<=0){
      this.y = height-this.y;
    }
    for(var i=theForce.length-1; i>=0; i--){
      if(dist(this.x,this.y,theForce[i].x,theForce[i].y)<spacing/2){
        this.moveY+=theForce[i].force*sin(theForce[i].angle);
        this.moveX+=theForce[i].force*cos(theForce[i].angle);
        if(abs(this.moveX)>maxSpeed){
          this.moveX*=0.9;
          this.moveY*=0.9;
        }
        if(abs(this.moveY)>maxSpeed){
          this.moveY*=0.9;
          this.moveX*=0.9;
        }
      }
    }
  }


  display(){
    circle(this.x,this.y,0.5);
  }
}

class Force{
  constructor(x,y,a,f){
    this.x = x;
    this.y = y;
    this.angle = a;
    this.force = f;
  }

  display(){
    push();
    translate(this.x,this.y);
    rotate(this.angle);
    circle(0,0,3);
    line(0,0,10,0);
    pop();
  }
}