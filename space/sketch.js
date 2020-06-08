let theParticles = [];
let animate1 = false;
let animate2 = false;
let animate3 = false;
let numParticles = 100;
let particleSize = 10;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  let counter = 0;
  for(var i=-numParticles/2*particleSize; i<numParticles/2*particleSize; i+=particleSize){
    if(counter%2===0){
      theParticles.push(new Particle(random(0,numParticles/2*particleSize),particleSize,random(0,TWO_PI),random(0,TWO_PI),-1));
    }else{
      theParticles.push(new Particle(random(0,numParticles/2*particleSize),particleSize,random(0,TWO_PI),random(0,TWO_PI),1));
    }
    counter++;
  }
}

function draw() {
  background(220);
  normalMaterial();
  orbitControl();

  for(var i=theParticles.length-1; i>=0; i--){
    theParticles[i].display();
    if(animate1){
      theParticles[i].move1();
    }
    if(animate2){
      theParticles[i].move2();
    }
    if(animate3){
      theParticles[i].move3();
    }
  }
}

class Particle{
  constructor(xt,r,ryt,rzt,d){
    this.x = 0;
    this.xt = xt;
    this.r = r;
    this.ryt = ryt;
    this.rzt = rzt;
    this.d = d;
    //if(this.d>0){
      this.ry = 0;
      this.rz = 0;
      /*
    }else{
      this.ry = PI;
      this.rz = PI;
    }
    */
  }

  display(){
    push();
    rotateY(this.ry);
    rotateZ(this.rz);
    translate(this.x,0,0)
    sphere(this.r/2);
    pop();
  }

  move1(){
    if(this.x<this.xt){
      this.x+=1;
    }else{
      this.x = this.xt
    }
  }

  move2(){
    //if(this.d>0){
      if(this.ry<this.ryt){
        this.ry+=0.01;
      }else{
        this.ry = this.ryt
      }
      /*
    }else{
      if(this.ry>this.ryt){
        this.ry-=0.01;
      }else{
        this.ry = this.ryt
      }
    }
    */
  }

  move3(){
    //if(this.d>0){
      if(this.rz<this.rzt){
        this.rz+=0.01;
      }else{
        this.rz = this.rzt
      }
      /*
    }else{
      if(this.rz>this.rzt){
        this.rz-=0.01;
      }else{
        this.rz = this.rzt
      }
    }
    */
  }
}

function keyPressed(){
  if(keyIsDown(49)&&!animate1){
    animate1 = true;
  }
  if(keyIsDown(50)&&!animate2){
    animate2 = true;
  }
  if(keyIsDown(51)&&!animate3){
    animate3 = true;
  }
}