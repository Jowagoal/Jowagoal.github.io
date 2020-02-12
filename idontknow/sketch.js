let shotX;
let shotY;
let shotTime = true;
let boardSize;
let newSize;
let newBoard;
let hit;
let display;
let x = 0;
let y = 0;
let x2;
let y2;
let x3;
let y3;
let doneLineToShot;
let counter = 0;
let doneChord;
let doneChordToCenter;
let c = -1;

function setup(){
  createCanvas(windowWidth, windowHeight);
  boardSize = height;
}

function draw(){
  createBoard();
  displayShot();
  if(!shotTime){
    if(newBoard){
      doneLineToShot = false;
      doneChord = false;
      doneChordToCenter = false;
      newBoard = false;
    }
    calculateNewBoard();
    displayNewBoard();
  }
}

function createBoard(){
  translate(width/2, height/2);
  background(220);
  stroke(0);
  strokeWeight(5);
  fill(255);
  circle(0,0,boardSize);
  circle(0,0,1);
}

function displayShot(){
  strokeWeight(0);
  fill(255,0,0);
  if(hit){
    if(display){
      circle(shotX, shotY, 10);
    }
  }else{
    shotTime = true;
  }
}

function calculateNewBoard(){
  newSize = Math.sqrt(Math.pow(boardSize/2,2)-Math.pow(dist(0,0,shotX,shotY),2))*2;
}

function displayNewBoard(){
  animateLineToShot();
  if(doneLineToShot){
    animateChord();
    if(doneChord){
      animateChordToCenter();
      if(doneChordToCenter){
        animateNewCircle();
      }
    }
  }
}

function animateLineToShot(){
  let vertical = dist(0,0,0,shotY);
  let horizontal = dist(0,0,shotX,0);
  if(shotX<0){
    horizontal*=-1;  
  }
  if(shotY<0){
    vertical*=-1;  
  }
  if(!doneLineToShot){
    strokeWeight(1);
    line(0,0,x,y);
    if(counter===100){
      doneLineToShot = true;
      counter = 0;
      x2 = x;
      y2 = y;
      x3 = x;
      y3 = y;
    }else{
      x += horizontal/100;
      y += vertical/100;
      counter++;
    }
  }
}

function animateChord(){
  line(0,0,x,y);
  let pHorizontal = dist(0,0,0,shotY)/2;
  let pVertical = -dist(0,0,shotX,0)/2;
  if(shotX<0){
    pHorizontal*=-1;  
  }
  if(shotY<0){
    pVertical*=-1;  
  }
  if(!doneChord){
    strokeWeight(1);
    line(x,y,0,0);
    line(x2,y2,x3,y3);
    if(dist(x,y,x2,y2)>=newSize/2){
      doneChord = true;
    }else{
      if(newSize>boardSize-1){
        x2 += pHorizontal*newSize/100;
        y2 += pVertical*newSize/100;
        x3 -= pHorizontal*newSize/100;
        y3 -= pVertical*newSize/100;  
      }else if(newSize<boardSize*0.6){
        x2 += pHorizontal/50;
        y2 += pVertical/50;
        x3 -= pHorizontal/50;
        y3 -= pVertical/50;
      }else if(newSize<boardSize*0.3){
        x2 += pHorizontal/100;
        y2 += pVertical/100;
        x3 -= pHorizontal/100;
        y3 -= pVertical/100;
      }else{
        x2 += pHorizontal/25;
        y2 += pVertical/25;
        x3 -= pHorizontal/25;
        y3 -= pVertical/25;
      }
    }
  }
}

function animateChordToCenter(){
  let vertical = dist(0,0,0,shotY);
  let horizontal = dist(0,0,shotX,0);
  if(shotX<0){
    horizontal*=-1;  
  }
  if(shotY<0){
    vertical*=-1;  
  }
  if(!doneChordToCenter){
    strokeWeight(1);
    line(x2,y2,x3,y3);
    line(0,0,x,y);
    if(counter===100){
      doneChordToCenter = true;
      counter = 0;
      display = false;
    }else{
      x3 -= horizontal/100;
      y3 -= vertical/100;
      x2 -= horizontal/100;
      y2 -= vertical/100;
      counter++;
    }
  }
}

function animateNewCircle(){
  strokeWeight(1);
  push()
  noFill();
  arc(0,0,newSize,newSize,atan2(x2,y2),atan2(x2,y2)+PI*(c+3.01));
  arc(0,0,newSize,newSize,atan2(x3,y3),atan2(x3,y3)+PI*(c+3.01));
  pop()
  push();
  if(c<0){
    rotate(PI*c)
    line(x2,y2,x3,y3);
    c+=0.01;
  }else{
    boardSize = newSize;
    resetValues();
  }
  pop();
}

function resetValues(){
  shotX;
  shotY;
  shotTime = true;
  hit;
  x = 0;
  y = 0;
  x2;
  y2;
  x3;
  y3;
  doneLineToShot = false;
  doneChord = false;
  doneChordToCenter = false;
  newBoard = false;
  counter = 0;
  c = -1;
}

function mouseReleased(){
  if(shotTime){
    shotX = mouseX - width/2;
    shotY = mouseY - height/2;
    shotTime = false;
    newBoard = true;
    if(dist(0,0,shotX,shotY)>boardSize/2){
      hit = false;
    }else{
      hit = true;
      display = true;
    }
  }
}