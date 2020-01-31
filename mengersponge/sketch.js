// Line Art Demo
// Jordie Walter
// Sept 9, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const MAX = 5;
let depth = 1;
let frameHold = 0;

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  background(220);
  normalMaterial();
  if(depth<4){  //rotates cube continuosly
    rotateX((frameCount+frameHold)/300);
    rotateY((frameCount+frameHold)/300);
    rotateY((frameCount+frameHold)/300);
  }else{  //cube is too large to continuosly rotate
    rotateX(frameHold/300);
    rotateY(frameHold/300);
    rotateY(frameHold/300);
  }
  menger(1, 243);
  orbitControl();
}

function menger(x, boxSize){
  if(x===depth){
    box(boxSize);
  }else{
    nextLevel(boxSize/3,x,boxSize);
  }
}

function nextLevel(trans,x,boxSize){
  push();
  translate(-trans,-trans,-trans);
  menger(x+1,boxSize/3);
  translate(trans,0,0);
  menger(x+1,boxSize/3);
  translate(trans,0,0);
  menger(x+1,boxSize/3);
  translate(0,0,trans);
  menger(x+1,boxSize/3);
  translate(0,0,trans);
  menger(x+1,boxSize/3);
  translate(-trans,0,0);
  menger(x+1,boxSize/3);
  translate(-trans,0,0);
  menger(x+1,boxSize/3);
  translate(0,0,-trans);
  menger(x+1,boxSize/3);
  translate(0,trans*2,-trans);
  menger(x+1,boxSize/3);
  translate(trans,0,0);
  menger(x+1,boxSize/3);
  translate(trans,0,0);
  menger(x+1,boxSize/3);
  translate(0,0,trans);
  menger(x+1,boxSize/3);
  translate(0,0,trans);
  menger(x+1,boxSize/3);
  translate(-trans,0,0);
  menger(x+1,boxSize/3);
  translate(-trans,0,0);
  menger(x+1,boxSize/3);
  translate(0,0,-trans);
  menger(x+1,boxSize/3);
  translate(0,-trans,-trans);
  menger(x+1,boxSize/3);
  translate(trans*2,0,0);
  menger(x+1,boxSize/3);
  translate(0,0,trans*2);
  menger(x+1,boxSize/3);
  translate(trans*-2,0,0);
  menger(x+1,boxSize/3);
  pop();
}

function keyPressed(){
  if(keyIsDown(38)&&depth<MAX){
    depth++;
    if(depth===4){
      frameHold = frameHold+frameCount;
    }
  }
  if(keyIsDown(40)&&depth>1){
    if(depth>3){
      depth--;
      if(depth===3){
        frameCount = 0;
      }
    }else{
      depth--;
    }
  }
}