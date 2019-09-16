// 3d Test
// Jordie Walter
// Sept 9, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let arr = [];
let position = [0,0,0,0];
let positionCube = [];

let numCubesX = 0;
let numCubesY = 0;
let numCubesZ = 0;

let xCentre;
let yCentre;
let zCentre;

let cam;

let camX=0;
let camY=0;
let camZ=0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  normalMaterial();
  background(220);
  cam = createCamera();
  cam.lookAt(camX,camY,camZ);
}

function draw() {
  background(220)
  orbitControl();
  makeBoxes();
  lookAtCentre();
}

function makeBoxes(){
  for(var i=0; i<=arr.length; i+=4){
    translate(arr[i],arr[i+1],arr[i+2]);
    if(arr[i+3]===1){
      box(50);
    }
  }
}

function keyPressed(){
  if(keyIsDown(39)){
    arr.push(60,0,0,0);
    position[0]=position[0]+60;
  }
  if(keyIsDown(37)){
    arr.push(-60,0,0,0);
    position[0]=position[0]-60;
  }
  if(keyIsDown(38)){
    arr.push(0,0,-60,0);
    position[2]=position[2]-60;
  }
  if(keyIsDown(40)){
    arr.push(0,0,60,0);
    position[2]=position[2]+60;
  }
  if(keyIsDown(32)){
    arr.push(0,-60,0,0);
    position[1]=position[1]-60;
  }
  if(keyIsDown(8)){
    arr.push(0,60,0,0);
    position[1]=position[1]+60;
  }
  if(keyIsDown(80)){
    arr.push(0,0,0,1);
    positionCube.push(position[0],position[1],position[2],position[3]);
  }
  if(keyIsDown(68)){
    //if there is a cube a 'd' is pressed, get rid of the cube
  }
  console.log(position);
  console.log(positionCube);
}

function lookAtCentre(){
xCentre=numCubesX*60/2
if(camX<xCentre){
    while(camX<xCentre){
      cam.lookAt(camX,camY,camZ);
      camX++;
      //slow down frame rate or move camera slower
    }
  }else if(camX>xCentre){
    while(camX>xCentre){
      cam.lookAt(camX,camY,camZ);
      camX--;
      //slow down frame rate or move camera slower
    }
  }
  
  yCentre=numCubesY*-60/2
  if(camY<yCentre){
    while(camY<=yCentre){
      cam.lookAt(camX,camY,camZ);
      camY++;
      //slow down frame rate or move camera slower
    }
  }else if(camY>yCentre){
    while(camY>=yCentre){
      cam.lookAt(camX,camY,camZ);
      camY--;
      //slow down frame rate or move camera slower
    }
  }

  zCentre=numCubesZ*-60/2
  if(camZ<zCentre){
    while(camZ<zCentre){
      cam.lookAt(camX,camY,camZ);
      camZ++;
      //slow down frame rate or move camera slower
    }
  }else if(camZ>zCentre){
    while(camZ>zCentre){
      cam.lookAt(camX,camY,camZ);
      camZ--;
      //slow down frame rate or move camera slower
    }
  }
}

function windowResized(){
  setup();
}