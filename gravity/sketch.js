let things = [];
const G = 0.0000000000667408;
let speed = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);

  
  /*
  things.push(new Thing(width*2/4,height*2/4,25,2000000,random(0,255),0,0));
  things.push(new Thing(width*2/4,height*3/4,.25,20000,random(0,255),1,0));
  things.push(new Thing(width*2/4,height*1/4,.25,20000,random(0,255),-1,0));
  things.push(new Thing(width*1/4,height*2/4,2.5,200000,random(0,255),0,0.5));
  things.push(new Thing(width*3/4,height*2/4,2.5,200000,random(0,255),0,-0.5));
  */
  /*
  things.push(new Thing(width*8/16,height*8/16,25,2000000,random(0,255),0,0));
  things.push(new Thing(width*8/16,height*5/16,2,2000,random(0,255),-1.5,0));
  things.push(new Thing(width*8/16,height*4/16,9,9000,random(0,255),-1.4,0));
  things.push(new Thing(width*8/16,height*3/16,10,10000,random(0,255),-1.2,0));
  things.push(new Thing(width*8/16,height*2/16,5,5000,random(0,255),-1.1,0));
  */
}

function draw(){
  background(220);
  if(speed>=1){
    for(var z=1; z<=speed; z++){
      doThings();
    }
  }else if(frameCount%(Math.pow(speed,-1))===0){
    doThings();
  }
  for(var i=things.length-1; i>=0; i--){
    things[i].display();
    things[i].showMovement();
  }
  stroke(0);
  fill(0);
  textSize(25)
  text("Speed: " + speed + "x",10,25)
}

function doThings(){
  for(var i=things.length-1; i>=0; i--){
    for(var j=i-1; j>=0; j--){
      if(things[i]!==undefined&&things[j]!==undefined){
        let hold = {
          x:things[i].x,
          y:things[i].y,
          r:things[i].radius,
          m:things[i].m,
          dx:things[i].dx,
          dy:things[i].dy,
        }
        things[i].applyForce(things[j]);
        things[j].applyForce(hold);
        if(dist(things[i].x,things[i].y,things[j].x,things[j].y)<things[i].r/2+things[j].r/2){
          if(things[i].m>things[j].m){
            things[i].m+=things[j].m;
            things.splice(j,1);
          }else if(things[i].m<things[j].m){
            things[j].m+=things[i].m;
            things.splice(i,1);
          }
        }
      }
    }
    if(things[i]!==undefined){
      things[i].move();
    }
  }
}

class Thing{
  constructor(x,y,radius,mass,c,dx,dy){
    this.x = x;
    this.y = y;
    this.r =  radius;
    this.m = mass;
    this.dx = dx;
    this.dy = dy;
    this.fx = 0;
    this.fy = 0;
    this.c = c;
    this.spots = [this.x,this.y];
  }

  applyForce(thi){
    let m1 = this.m; 
    let m2 = thi.m;
    let r2 = Math.pow(dist(this.x,this.y,thi.x,thi.y),2)
    let fdirect = G*((m1*m2)/r2);

    let o = this.y-thi.y;
    let a = this.x-thi.x;
    let theta = atan(o/a);
    if(this.x>=thi.x){
      theta+=PI;
    }

    let e = thi.m/this.m;

    fdirect*=e;

    this.fy += fdirect*sin(theta);
    this.fx += fdirect*cos(theta);
  }

  move(){

    this.dx += this.fx;
    this.dy += this.fy;

    this.x += this.dx;
    this.y += this.dy;

    this.fx = 0;
    this.fy = 0;

    this.spots.push(this.x,this.y);
    if(this.spots.length>200){
      this.spots.splice(0,2);
    }
  }

  display(){
    fill(this.c);
    circle(this.x,this.y,this.r);
    //frameRate(1);
  }

  showMovement(){
    for(var i=0; i<=this.spots.length-4; i+=2){
      stroke(0,50)
      line(this.spots[i],this.spots[i+1],this.spots[i+2],this.spots[i+3]);
    }
  }
}

function mouseClicked(){
  //things.push(new Thing(mouseX,mouseY,20,20,random(0,255),0))
}

function keyPressed(){
  if(keyIsDown(38)){
    speed*=2;
  }else if(keyIsDown(40)){
    speed/=2;
  }
}