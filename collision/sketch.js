let things = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  things.push(new Thing(width/2,height/2,20,20));
  things.push(new Thing(width/2+10,0,20,20));
}

function draw(){
  background(220);
  for(var i=things.length-1; i>=0; i--){
    for(var j=i-1; j>=0; j--){
      if(things[i].x===things[j].x){
        things[i].x+=1;
      }
      if(dist(things[i].x,things[i].y,things[j].x,things[j].y)<=things[i].r+things[j].r){
        let hold = {
          x:things[i].x,
          y:things[i].y,
          r:things[i]. radius,
          m:things[i].mass,
          dx:things[i].dx,
          dy:things[i].dy,
          g:things[i].g,
        };
        things[i].interact(things[j]);
        things[j].interact(hold);
      }
    }
    things[i].move(i);
    things[i].display();
  }
}

class Thing{
  constructor(x,y,radius,mass){
    this.x = x;
    this.y = y;
    this.r =  radius;
    this.m = mass;
    this.dx = 0;
    this.dy = 0;
    this.g = 0.2;
  }

  interact(thi){
    let o = this.y-thi.y;
    let h = dist(this.x,this.y,thi.x,thi.y);
    let a = abs(asin(o/h));
    let e = Math.pow(a/HALF_PI,3);
    this.dy = thi.dy*e;
    this.dx = thi.dy*(e-1);
  }

  move(){
    if(this.y>=height-this.r){
      this.dy*=-0.8;
      this.y = height-this.r;
    }
    if(!abs(this.dy)<this.g||this.y<=height-this.r-this.g){
      this.dy+=this.g;
    }else{
      this.dy = 0;
      this.y = height-this.r;
    }
    this.y+=this.dy;
    this.x+=this.dx;
  }
  display(){
    circle(this.x,this.y,this.r*2);
  }
}

function mouseClicked(){
  things.push(new Thing(mouseX,mouseY,20,20))
}