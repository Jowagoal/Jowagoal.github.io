let theBloons = [];
let theTrack = [];
let theDartMonkeys = [];
let theDarts = [];
let addingDartMonkey = false;

function setup(){
  createCanvas(windowWidth, windowHeight);
  strokeWeight(3);
  createTrack();
}

function draw(){
  background(0,255,0);
  displayTrack();
  displayBloons();
  displayTowers();
  displayProjectiles();
}

function displayTrack(){
  for(var i=0; i<theTrack.length; i++){
    if(i!==theTrack.length-1){
      line(theTrack[i].x,theTrack[i].y,theTrack[i+1].x,theTrack[i+1].y);
    }
  }
}

function displayBloons(){
  for(var i=theBloons.length-1; i>=0; i--){
    theBloons[i].move();
    theBloons[i].display();
    if(theBloons[i].x>width+theBloons[i].diameter/2){
      theBloons[i].through(i);
    }
  }
}

function displayTowers(){
  displayDartMonkeys();
}

function displayDartMonkeys(){
  if(addingDartMonkey){
    fill(0,0,0,50);
    circle(mouseX,mouseY,400);
    fill(150,75,0);
    circle(mouseX,mouseY,40);
    line(mouseX,mouseY,mouseX+30,mouseY);
  }
  for(var i=theDartMonkeys.length-1; i>=0; i--){
    let bloonInRange = [];
    theDartMonkeys[i].display();
    for(var j=0; j<theBloons.length; j++){
      if(dist(theBloons[j].x,theBloons[j].y,theDartMonkeys[i].x,theDartMonkeys[i].y)<200){
        bloonInRange.push(theBloons[j]);
      }
    }
    if(bloonInRange.length!==0){
      let first = findFirst(bloonInRange);
      theDartMonkeys[i].faceBloon(first);
      if(frameCount%60===0){
        theDartMonkeys[i].shoot();
      }
    }
  }
}

function findFirst(arr){
  let furthest = arr[0];
  for(var i=1; i<arr.length; i++){
    if(arr[i].checkpoint>furthest.checkpoint){
      furthest = arr[i];
    }else if(arr[i].checkpoint===furthest.checkpoint){
      if(arr[i].checkpoint!==theTrack.length-1){
        if(theTrack[arr[i].checkpoint].x-theTrack[arr[i].checkpoint+1].x!==0){
          if(theTrack[arr[i].checkpoint].x-theTrack[arr[i].checkpoint+1].x<0){
            if(arr[i].x>furthest.x){
              furthest = arr[i];
            }
          }else{
            if(arr[i].x<furthest.x){
              furthest = arr[i];
            }
          }
        }else{
          if(theTrack[arr[i].checkpoint].y-theTrack[arr[i].checkpoint+1].y<0){
            if(arr[i].y>furthest.y){
              furthest = arr[i];
            }
          }else{
            if(arr[i].y<furthest.y){
              furthest = arr[i];
            }
          }
        }
      }else{
        if(arr[i].x>furthest.x){
          furthest = arr[i];
        }
      }
    }
  }
  return furthest;
}

function displayProjectiles(){
  for(var i=theDarts.length-1; i>=0; i--){
    theDarts[i].move();
    let done = theDarts[i].isDone();
    if(done){
      theDarts.splice(i,1);
    }
  }
}

function mousePressed(){
  if(addingDartMonkey){
    checkIfOpen('Dart Monkey');
  }else{
    for(var i=0; i<theDartMonkeys.length; i++){
      if(dist(mouseX,mouseY,theDartMonkeys[i].x,theDartMonkeys[i].y)<40){
        theDartMonkeys[i].showingUpgrades = true;
      }else{
        theDartMonkeys[i].showingUpgrades = false;
      }
    }
  }
}

function checkIfOpen(tower){
  let open = true;
  for(var i=0; i<theTrack.length; i++){
    if(i!==theTrack.length-1){
      if(theTrack[i].x-theTrack[i+1].x!==0){
        if(mouseX>theTrack[i].x&&mouseX<theTrack[i+1].x||mouseX<theTrack[i].x&&mouseX>theTrack[i+1].x){
          if(mouseY<theTrack[i].y+20&&mouseY>theTrack[i].y-20){
            open = false;
          }
        }
      }else{
        if(mouseY>theTrack[i].y&&mouseY<theTrack[i+1].y||mouseY<theTrack[i].y&&mouseY>theTrack[i+1].y){
          if(mouseX<theTrack[i].x+20&&mouseX>theTrack[i].x-20){
            open = false;
          }
        }
      }
    }
    if(dist(theTrack[i].x,theTrack[i].y,mouseX,mouseY)<20){
      open = false;
    }
  }

  for(var i=0; i<theDartMonkeys.length; i++){
    if(dist(theDartMonkeys[i].x,theDartMonkeys[i].y,mouseX,mouseY)<40){
      open = false;
    }
  }

  if(open){
    if(tower==='Dart Monkey'){
      addingDartMonkey = false;
      theDartMonkeys.push(new DartMonkey(mouseX,mouseY));
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
  if(keyIsDown(68)&&keyIsDown(77)){
    addingDartMonkey = true;
  }
}

class DartMonkey{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.showingUpgrades = false;
  }

  display(){
    push();
    translate(this.x,this.y)
    rotate(this.angle);
    fill(150,75,0);
    circle(0,0,40);
    line(0,0,30,0);
    if(this.showingUpgrades){
      fill(0,0,0,50);
      circle(0,0,400);
    }
    pop();
  }

  faceBloon(bloon){
    push();
    translate(this.x,this.y)
    this.angle = atan2(bloon.y - this.y, bloon.x - this.x);
    pop();
  }

  shoot(){
    theDarts.push(new Dart(this.x,this.y,this.angle));
  }
}

class Dart{
  constructor(x,y,angle){
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.hostTowerX = x;
    this.hostTowerY = y;
  }

  move(){
    this.y+=30*sin(this.angle);
    this.x+=30*cos(this.angle);
    circle(this.x,this.y,3);
  }

  isDone(){
    let done = false;
    for(var i=0; i<theBloons.length; i++){
      if(dist(this.x,this.y,theBloons[i].x,theBloons[i].y)<theBloons[i].diameter/2+1.5){
        done = true;
        theBloons[i].pop(i);
      }
    }
    if(dist(this.x,this.y,this.hostTowerX,this.hostTowerY)>200){
      done = true;
    }
    return done;
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
      if(this.x<=theTrack[i].x+7&&this.x>=theTrack[i].x-7&&this.y<=theTrack[i].y+7&&this.y>=theTrack[i].y-7){
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
      if(this.x<=theTrack[i].x+7&&this.x>=theTrack[i].x-7&&this.y<=theTrack[i].y+7&&this.y>=theTrack[i].y-7){
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
      if(this.x<=theTrack[i].x+7&&this.x>=theTrack[i].x-7&&this.y<=theTrack[i].y+7&&this.y>=theTrack[i].y-7){
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
      if(this.x<=theTrack[i].x+7&&this.x>=theTrack[i].x-7&&this.y<=theTrack[i].y+7&&this.y>=theTrack[i].y-7){
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
      if(this.x<=theTrack[i].x+7&&this.x>=theTrack[i].x-7&&this.y<=theTrack[i].y+7&&this.y>=theTrack[i].y-7){
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
      if(this.x<=theTrack[i].x+7&&this.x>=theTrack[i].x-7&&this.y<=theTrack[i].y+7&&this.y>=theTrack[i].y-7){
        this.checkpoint = i;
      }
    }
  }

  display(){
    fill(0);
    circle(this.x,this.y,this.diameter);
  }

  pop(i){
    if(this.checkpoint%2===0){
      theBloons.splice(i,1,new PinkBloon(this.x-5,this.y,this.checkpoint));
      theBloons.push(new PinkBloon(this.x+5,this.y,this.checkpoint));
    }else{
      theBloons.splice(i,1,new PinkBloon(this.x,this.y-5,this.checkpoint));
      theBloons.push(new PinkBloon(this.x,this.y+5,this.checkpoint));
    }
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
      if(this.x<=theTrack[i].x+7&&this.x>=theTrack[i].x-7&&this.y<=theTrack[i].y+7&&this.y>=theTrack[i].y-7){
        this.checkpoint = i;
      }
    }
  }

  display(){
    fill(255);
    circle(this.x,this.y,this.diameter);
  }

  pop(i){
    if(this.checkpoint%2===0){
      theBloons.splice(i,1,new PinkBloon(this.x-5,this.y,this.checkpoint));
      theBloons.push(new PinkBloon(this.x+5,this.y,this.checkpoint));
    }else{
      theBloons.splice(i,1,new PinkBloon(this.x,this.y-5,this.checkpoint));
      theBloons.push(new PinkBloon(this.x,this.y+5,this.checkpoint));
    }
  }

  through(i){
    theBloons.splice(i,1);
  }
}