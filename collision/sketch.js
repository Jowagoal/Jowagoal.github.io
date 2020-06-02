let things = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  things.push(new Thing(width/2,height*0,20,20,100));
  things.push(new Thing(width/2,height*1/2,20,20,200));
}

function draw(){
  background(220);
  for(var i=things.length-1; i>=0; i--){
    for(var j=i-1; j>=0; j--){
      if(things[i].x===things[j].x){
        //things[i].x+=1;
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
  constructor(x,y,radius,mass,c){
    this.x = x;
    this.y = y;
    this.r =  radius;
    this.m = mass;
    this.dx = 0;
    this.dy = 0;
    this.g = 0.2;
    this.a = PI+HALF_PI;
    this.s = 0;
    this.c = c
  }

  interact(thi){
    let cA = abs(asin((this.y-thi.y)/(dist(this.x,this.y,thi.x,thi.y))));
    let rL = cA;
    let AoR = abs(this.a-rL*2);
    this.a = AoR;
    this.dy = this.s*sin(this.a);
    this.dx = -this.s*cos(this.a);
  }

  move(){
    //MOVE
      //bounce
      if(this.y>=height-this.r){
        this.dy*=-0.8;
        this.dx*=0.8;
        this.y = height-this.r;
      }
      if(this.x>=width-this.r){
        this.dx*=-0.8;
        this.dy*=0.8;
        this.x = width-this.r;
      }
      if(this.x<=0+this.r){
        this.dx*=-0.8;
        this.dy*=0.8;
        this.x = 0+this.r;
      }
      //gravity
      if(!abs(this.dy)<this.g||this.y<=height-this.r-this.g){
        this.dy+=this.g;
      //stop bounce
      }else{
        this.dy = 0;
        this.y = height-this.r;
      }
      this.y+=this.dy;
      this.x+=this.dx;

    //CONVERT
      this.a = atan(this.dy/this.dx);
      if(this.dy<0){
        if(this.dx<0){
          this.a = PI-this.a;
        }else{
          this.a*=-1;
        }
      }else{
        if(this.dx<0){
          this.a = PI+this.a*-1;
        }else{
          this.a = TWO_PI-this.a;
        }
      }
      if(this.a>=TWO_PI){
        this.a-TWO_PI;
      }
      this.s = this.dy/sin(this.a);

    //NEW
    this.dy = this.s*sin(this.a);
    this.dx = -this.s*cos(this.a);
  }
  
  display(){
    fill(this.c)
    circle(this.x,this.y,this.r*2);
  }
}

function mouseClicked(){
  things.push(new Thing(mouseX,mouseY,20,20,random(0,255)))
  //frameRate(1);
}