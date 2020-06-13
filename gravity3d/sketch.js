let things = [];
const G = 0.0000000000667408;
let speed = 1;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  fill(0);
  things.push(new Thing(0,0,0,0,0,0,20,2000000,0));
  things.push(new Thing(0,100,0,1.5,0,0,2,2000,0));
  things.push(new Thing(0,0,-100,1.5,0,0,2,2000,0));
  things.push(new Thing(0,-100,0,0,0,1.5,2,2000,0));
  
  /*
  

  things.push(new Thing(width*8/16,height*5/16,2,2000,random(0,255),-1.5,0));
  things.push(new Thing(width*8/16,height*4/16,9,9000,random(0,255),-1.4,0));
  things.push(new Thing(width*8/16,height*3/16,10,10000,random(0,255),-1.2,0));
  things.push(new Thing(width*8/16,height*2/16,5,5000,random(0,255),-1.1,0));
  */
}

function draw(){
  orbitControl();
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
    //things[i].showMovement();
  }
}

function doThings(){
  for(var i=things.length-1; i>=0; i--){
    for(var j=i-1; j>=0; j--){
      if(things[i]!==undefined&&things[j]!==undefined){
        if(things[i].x===things[j].x){
          things[i].x+=0.0001;
        }
        if(things[i].y===things[j].y){
          things[i].y+=0.0001;
        }
        if(things[i].z===things[j].z){
          things[i].z+=0.0001;
        }
        let hold = {
          x:things[i].x,
          y:things[i].y,
          z:things[i].z,
          r:things[i].radius,
          m:things[i].m,
          dx:things[i].dx,
          dy:things[i].dy,
          dz:things[i].dz,
        }
        things[i].applyForce(things[j]);
        things[j].applyForce(hold);
        if(dist(things[i].x,things[i].y,things[i].z,things[j].x,things[j].y,things[j].z)<things[i].r+things[j].r){
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
  constructor(x,y,z,dx,dy,dz,radius,mass,c){
    this.x = x;
    this.y = y;
    this.z = z;
    this.r =  radius;
    this.m = mass;
    this.dx = dx;
    this.dy = dy;
    this.dz = dz;
    this.fx = 0;
    this.fy = 0;
    this.fz = 0;
    this.c = c;
    this.spots = [this.x,this.y,this.z];
  }

  applyForce(thi){
    /*
    console.log(this.x)
    console.log(this.y)
    console.log(this.z)
    console.log(' ')
    */
    let m1 = this.m; 
    let m2 = thi.m;
    let r2 = Math.pow(dist(this.x,this.y,this.z,thi.x,thi.y,thi.z),2)
    let fdirect = G*((m1*m2)/r2);

    let o = this.y-thi.y;
    let a = this.x-thi.x;
    let thetaXY = atan(o/a);
    o = this.z-thi.z;
    a = this.x-thi.x;
    let thetaXZ = atan(o/a);
    if(this.x>=thi.x){
      thetaXY+=PI;
      thetaXZ+=PI;
    }

    let ey;
    let ez;
    if(abs(this.z-thi.z)>abs(this.y-thi.y)){
      ey = abs((this.y-thi.y)/(this.z-thi.z));
      ez = 1-ey;
    }else{
      ez = abs((this.z-thi.z)/(this.y-thi.y));
      ey = 1-ez;
    }
    let e = thi.m/this.m;

    fdirect*=e;

    this.fx += fdirect*cos(thetaXY)*ey;
    this.fx += fdirect*cos(thetaXZ)*ez;
    this.fy += fdirect*sin(thetaXY);
    this.fz += fdirect*sin(thetaXZ);
  }

  move(){

    this.dx += this.fx;
    this.dy += this.fy;
    this.dz += this.fz;

    this.x += this.dx;
    this.y += this.dy;
    this.z += this.dz;

    this.fx = 0;
    this.fy = 0;
    this.fz = 0;

    this.spots.push(this.x,this.y,this.z);
    if(this.spots.length>200){
      //this.spots.splice(0,3);
    }
  }

  display(){
    fill(this.c);
    push();
    normalMaterial();
    translate(this.x,this.y,this.z);
    sphere(this.r);
    pop();
    //frameRate(1);
  }

  showMovement(){
    for(var i=0; i<=this.spots.length-4; i+=3){
      stroke(0,50)
      line(this.spots[i],this.spots[i+1],this.spots[i+2],this.spots[i+3],this.spots[i+4],this.spots[i+5]);
    }
  }
}

function mouseClicked(){
  //things.push(new Thing(mouseX,mouseY,2.5,200000,random(0,255),1,0))
}

function keyPressed(){
  if(keyIsDown(38)){
    speed*=2;
  }else if(keyIsDown(40)){
    speed/=2;
  }
}