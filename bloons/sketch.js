let theBloons = [];
let theTrack = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  strokeWeight(3);
  createTrack();
}

function draw(){
  background(0,255,0);
  for(var i=0; i<theTrack.length; i++){
    if(i!==theTrack.length-1){
      line(theTrack[i].x,theTrack[i].y,theTrack[i+1].x,theTrack[i+1].y);
    }
  }
  for(var i=theBloons.length-1; i>=0; i--){
    theBloons[i].move();
    theBloons[i].display();
    if(theBloons[i].x>width+theBloons[i].diameter/2){
      theBloons[i].through(i);
    }
  }
}

function mousePressed(){
  for(var i=theBloons.length-1; i>=0; i--){
    if(dist(mouseX,mouseY,theBloons[i].x,theBloons[i].y)<theBloons[i].diameter/2){
      theBloons[i].pop(i);
    }
  }
}

function keyPressed(){
  if(keyIsDown(82)){
    theBloons.push(new RedBloon(0,theTrack[0].y,0));
  }
  if(keyIsDown(66)){
    theBloons.push(new BlueBloon(0,theTrack[0].y,0));
  }
  if(keyIsDown(71)){
    theBloons.push(new GreenBloon(0,theTrack[0].y,0));
  }
  if(keyIsDown(89)){
    theBloons.push(new YellowBloon(0,theTrack[0].y,0));
  }
  if(keyIsDown(80)){
    theBloons.push(new PinkBloon(0,theTrack[0].y,0));
  }
  if(keyIsDown(75)){
    theBloons.push(new BlackBloon(0,theTrack[0].y,0));
  }
  if(keyIsDown(87)){
    theBloons.push(new WhiteBloon(0,theTrack[0].y,0));
  }
}



function createTrack(){
  fill(165,42,42);
  let point1 = {
    x:width*0/50,
    y:height*20/50
  };
  theTrack.push(point1);
  let point2 = {
    x:width*10/50,
    y:height*20/50
  };
  theTrack.push(point2);

  let point3 = {
    x:width*10/50,
    y:height*30/50
  };
  theTrack.push(point3);
  let point4 = {
    x:width*5/50,
    y:height*30/50
  };
  theTrack.push(point4);
  let point5 = {
    x:width*5/50,
    y:height*40/50
  };
  theTrack.push(point5);
  let point6 = {
    x:width*40/50,
    y:height*40/50
  };
  theTrack.push(point6);
  let point7 = {
    x:width*40/50,
    y:height*30/50
  };
  theTrack.push(point7);
  let point8 = {
    x:width*30/50,
    y:height*30/50
  };
  theTrack.push(point8);
  let point9 = {
    x:width*30/50,
    y:height*10/50
  };
  theTrack.push(point9);
  let point10 = {
    x:width*50/50,
    y:height*10/50
  };
  theTrack.push(point10);
}

class RedBloon{
  constructor(x,y,checkpoint){
    this.x = x;
    this.y = y;
    this.diameter = 30;
    this.speed = 3;
    this.checkpoint = checkpoint;
  }

  move(){
    if(this.checkpoint!==theTrack.length-1){
      if(theTrack[this.checkpoint].x-theTrack[this.checkpoint+1].x!==0){
        if(theTrack[this.checkpoint].x-theTrack[this.checkpoint+1].x<0){
          this.x+=this.speed;
        }else{
          this.x-=this.speed;
        }
      }else{
        if(theTrack[this.checkpoint].y-theTrack[this.checkpoint+1].y<0){
          this.y+=this.speed;
        }else{
          this.y-=this.speed;
        }
      }
    }else{
      this.x+=this.speed;
    }
    for(var i=0; i<theTrack.length; i++){
      if(this.x<=theTrack[i].x+this.speed&&this.x>=theTrack[i].x-this.speed&&this.y<=theTrack[i].y+this.speed&&this.y>=theTrack[i].y-this.speed){
        this.checkpoint = i;
      }
    }
  }
  
  display(){
    fill(255,0,0);
    circle(this.x,this.y,this.diameter);
  }

  pop(i){
    theBloons.splice(i,1);
  }

  through(i){
    theBloons.splice(i,1);
  }
}

class BlueBloon{
  constructor(x,y,checkpoint){
    this.x = x;
    this.y = y;
    this.diameter = 35;
    this.speed = 4;
    this.checkpoint = checkpoint;
  }

  move(){
    if(this.checkpoint!==theTrack.length-1){
      if(theTrack[this.checkpoint].x-theTrack[this.checkpoint+1].x!==0){
        if(theTrack[this.checkpoint].x-theTrack[this.checkpoint+1].x<0){
          this.x+=this.speed;
        }else{
          this.x-=this.speed;
        }
      }else{
        if(theTrack[this.checkpoint].y-theTrack[this.checkpoint+1].y<0){
          this.y+=this.speed;
        }else{
          this.y-=this.speed;
        }
      }
    }else{
      this.x+=this.speed;
    }
    for(var i=0; i<theTrack.length; i++){
      if(this.x<=theTrack[i].x+this.speed&&this.x>=theTrack[i].x-this.speed&&this.y<=theTrack[i].y+this.speed&&this.y>=theTrack[i].y-this.speed){
        this.checkpoint = i;
      }
    }
  }

  display(){
    fill(0,0,255);
    circle(this.x,this.y,this.diameter);
  }

  pop(i){
    theBloons.splice(i,1,new RedBloon(this.x,this.y,this.checkpoint))
  }

  through(i){
    theBloons.splice(i,1);
  }
}

class GreenBloon{
  constructor(x,y,checkpoint){
    this.x = x;
    this.y = y;
    this.diameter = 40;
    this.speed = 5;
    this.checkpoint = checkpoint;
  }

  move(){
    if(this.checkpoint!==theTrack.length-1){
      if(theTrack[this.checkpoint].x-theTrack[this.checkpoint+1].x!==0){
        if(theTrack[this.checkpoint].x-theTrack[this.checkpoint+1].x<0){
          this.x+=this.speed;
        }else{
          this.x-=this.speed;
        }
      }else{
        if(theTrack[this.checkpoint].y-theTrack[this.checkpoint+1].y<0){
          this.y+=this.speed;
        }else{
          this.y-=this.speed;
        }
      }
    }else{
      this.x+=this.speed;
    }
    for(var i=0; i<theTrack.length; i++){
      if(this.x<=theTrack[i].x+this.speed&&this.x>=theTrack[i].x-this.speed&&this.y<=theTrack[i].y+this.speed&&this.y>=theTrack[i].y-this.speed){
        this.checkpoint = i;
      }
    }
  }

  display(){
    fill(0,255,0);
    circle(this.x,this.y,this.diameter);
  }

  pop(i){
    theBloons.splice(i,1,new BlueBloon(this.x,this.y,this.checkpoint))
  }

  through(i){
    theBloons.splice(i,1);
  }
}

class YellowBloon{
  constructor(x,y,checkpoint){
    this.x = x;
    this.y = y;
    this.diameter = 45;
    this.speed = 6;
    this.checkpoint = checkpoint;
  }

  move(){
    if(this.checkpoint!==theTrack.length-1){
      if(theTrack[this.checkpoint].x-theTrack[this.checkpoint+1].x!==0){
        if(theTrack[this.checkpoint].x-theTrack[this.checkpoint+1].x<0){
          this.x+=this.speed;
        }else{
          this.x-=this.speed;
        }
      }else{
        if(theTrack[this.checkpoint].y-theTrack[this.checkpoint+1].y<0){
          this.y+=this.speed;
        }else{
          this.y-=this.speed;
        }
      }
    }else{
      this.x+=this.speed;
    }
    for(var i=0; i<theTrack.length; i++){
      if(this.x<=theTrack[i].x+this.speed&&this.x>=theTrack[i].x-this.speed&&this.y<=theTrack[i].y+this.speed&&this.y>=theTrack[i].y-this.speed){
        this.checkpoint = i;
      }
    }
  }

  display(){
    fill(255,255,0);
    circle(this.x,this.y,this.diameter);
  }

  pop(i){
    theBloons.splice(i,1,new GreenBloon(this.x,this.y,this.checkpoint))
  }

  through(i){
    theBloons.splice(i,1);
  }
}

class PinkBloon{
  constructor(x,y,checkpoint){
    this.x = x;
    this.y = y;
    this.diameter = 50;
    this.speed = 7;
    this.checkpoint = checkpoint;
  }

  move(){
    if(this.checkpoint!==theTrack.length-1){
      if(theTrack[this.checkpoint].x-theTrack[this.checkpoint+1].x!==0){
        if(theTrack[this.checkpoint].x-theTrack[this.checkpoint+1].x<0){
          this.x+=this.speed;
        }else{
          this.x-=this.speed;
        }
      }else{
        if(theTrack[this.checkpoint].y-theTrack[this.checkpoint+1].y<0){
          this.y+=this.speed;
        }else{
          this.y-=this.speed;
        }
      }
    }else{
      this.x+=this.speed;
    }
    for(var i=0; i<theTrack.length; i++){
      if(this.x<=theTrack[i].x+this.speed&&this.x>=theTrack[i].x-this.speed&&this.y<=theTrack[i].y+this.speed&&this.y>=theTrack[i].y-this.speed){
        this.checkpoint = i;
      }
    }
  }

  display(){
    fill(255,0,255);
    circle(this.x,this.y,this.diameter);
  }

  pop(i){
    theBloons.splice(i,1,new YellowBloon(this.x,this.y,this.checkpoint))
  }

  through(i){
    theBloons.splice(i,1);
  }
}

class BlackBloon{
  constructor(x,y,checkpoint){
    this.x = x;
    this.y = y;
    this.diameter = 20;
    this.speed = 6;
    this.checkpoint = checkpoint;
  }

  move(){
    if(this.checkpoint!==theTrack.length-1){
      if(theTrack[this.checkpoint].x-theTrack[this.checkpoint+1].x!==0){
        if(theTrack[this.checkpoint].x-theTrack[this.checkpoint+1].x<0){
          this.x+=this.speed;
        }else{
          this.x-=this.speed;
        }
      }else{
        if(theTrack[this.checkpoint].y-theTrack[this.checkpoint+1].y<0){
          this.y+=this.speed;
        }else{
          this.y-=this.speed;
        }
      }
    }else{
      this.x+=this.speed;
    }
    for(var i=0; i<theTrack.length; i++){
      if(this.x<=theTrack[i].x+this.speed&&this.x>=theTrack[i].x-this.speed&&this.y<=theTrack[i].y+this.speed&&this.y>=theTrack[i].y-this.speed){
        this.checkpoint = i;
      }
    }
  }

  display(){
    fill(0);
    circle(this.x,this.y,this.diameter);
  }

  pop(i){
    theBloons.splice(i,1,new PinkBloon(this.x-5,this.y,this.checkpoint));
    theBloons.push(new PinkBloon(this.x+5,this.y,this.checkpoint));
  }

  through(i){
    theBloons.splice(i,1);
  }
}

class WhiteBloon{
  constructor(x,y,checkpoint){
    this.x = x;
    this.y = y;
    this.diameter = 20;
    this.speed = 6;
    this.checkpoint = checkpoint;
  }

  move(){
    if(this.checkpoint!==theTrack.length-1){
      if(theTrack[this.checkpoint].x-theTrack[this.checkpoint+1].x!==0){
        if(theTrack[this.checkpoint].x-theTrack[this.checkpoint+1].x<0){
          this.x+=this.speed;
        }else{
          this.x-=this.speed;
        }
      }else{
        if(theTrack[this.checkpoint].y-theTrack[this.checkpoint+1].y<0){
          this.y+=this.speed;
        }else{
          this.y-=this.speed;
        }
      }
    }else{
      this.x+=this.speed;
    }
    for(var i=0; i<theTrack.length; i++){
      if(this.x<=theTrack[i].x+this.speed&&this.x>=theTrack[i].x-this.speed&&this.y<=theTrack[i].y+this.speed&&this.y>=theTrack[i].y-this.speed){
        this.checkpoint = i;
      }
    }
  }

  display(){
    fill(255);
    circle(this.x,this.y,this.diameter);
  }

  pop(i){
    theBloons.splice(i,1,new PinkBloon(this.x-5,this.y,this.checkpoint));
    theBloons.push(new PinkBloon(this.x+5,this.y,this.checkpoint));
  }

  through(i){
    theBloons.splice(i,1);
  }
}