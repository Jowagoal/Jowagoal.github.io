// 3d Test
// Jordie Walter
// Sept 9, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let arr = [0,0,0,0,1];
let position = [0,0,0];
let positionCube = [];

let furthestX = 0;
let furthestY = 0;
let furthestZ = 0;
let closestX = 0;
let closestY = 0;
let closestZ = 0;
let xCentre;
let yCentre;
let zCentre;

let cam1;
//let cam2;
//let currentCam = 1;

let camX=0;
let camY=0;
let camZ=0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  normalMaterial();
  background(220);
  cam1 = createCamera();
  cam1.lookAt(camX,camY,camZ);
  //cam2 = createCamera();
  //cam2.lookAt(position[0],position[1],position[2]);
}

function draw() {
  background(220)
  orbitControl();
  readArray();
  lookAtCentre();
  //currentCamera();
}

function readArray(){
  for(var i=0; i<=arr.length; i+=5){
    translate(arr[i],arr[i+1],arr[i+2]);
    if(arr[i+3]===1){
      box(50);
    }
    if(arr[i+4]===1){
      sphere(25);
      arr[i-1]=0;
    }
  }
}


function keyPressed(){
  if(keyIsDown(68)){
    arr.push(60,0,0,0,1);
    position[0]=position[0]+60;
  }
  if(keyIsDown(65)){
    arr.push(-60,0,0,0,1);
    position[0]=position[0]-60;
  }
  if(keyIsDown(87)){
    arr.push(0,0,-60,0,1);
    position[2]=position[2]-60;
  }
  if(keyIsDown(83)){
    arr.push(0,0,60,0,1);
    position[2]=position[2]+60;
  }
  if(keyIsDown(38)){
    arr.push(0,-60,0,0,1);
    position[1]=position[1]-60;
  }
  if(keyIsDown(40)){
    arr.push(0,60,0,0,1);
    position[1]=position[1]+60;
  }
  if(keyIsDown(13)){
    arr.push(0,0,0,1,1);
    positionCube.push(position[0],position[1],position[2]);
  }
  if(keyIsDown(8)){
    //sometimes a box will not disappear
    let checkPosition = [0,0,0];
    let indexNumber=0;
    while(true){
      checkPosition[0]=checkPosition[0]+arr[indexNumber];
      checkPosition[1]=checkPosition[1]+arr[indexNumber+1];
      checkPosition[2]=checkPosition[2]+arr[indexNumber+2];
      indexNumber+=5;
      if(checkPosition[0]===position[0]&&checkPosition[1]===position[1]&&checkPosition[2]===position[2]){
        arr[indexNumber+3]=0;
        break;
      }
    }
  }
}


function windowResized(){
  setup();
}

/*
function currentCamera(){
  if(keyIsDown(49)){
    setCamera(cam1);
    currentCam=1;
  }else if(keyIsDown(50)){
    setCamera(cam2);
    currentCam=2;
  }
  if(currentCam===1){
    lookAtCentre();
  }else if(currentCam===2){
    lookAtPoint();
  }
}

function lookAtPoint(){
  cam2.lookAt(position[0],position[1],position[2]);
}
*/

function lookAtCentre(){
  if(position[0]<closestX){
    closestX=position[0];
  }
  if(position[1]<closestY){
    closestY=position[1];
  }
  if(position[2]<closestZ){
    closestZ=position[2];
  }
  if(position[0]>furthestX){
    furthestX=position[0];
  }
  if(position[1]>furthestY){
    furthestY=position[1];
  }
  if(position[2]>furthestZ){
    furthestZ=position[2];
  }

xCentre=(furthestX+closestX)/2;
if(camX<xCentre){
    while(camX<xCentre){
      cam1.lookAt(camX,camY,camZ);
      camX++;
      //slow down frame rate or move camera slower
    }
  }else if(camX>xCentre){
    while(camX>xCentre){
      cam1.lookAt(camX,camY,camZ);
      camX--;
      //slow down frame rate or move camera slower
    }
  }
  
  yCentre=(furthestY+closestY)/2;
  if(camY<yCentre){
    while(camY<=yCentre){
      cam1.lookAt(camX,camY,camZ);
      camY++;
      //slow down frame rate or move camera slower
    }
  }else if(camY>yCentre){
    while(camY>=yCentre){
      cam1.lookAt(camX,camY,camZ);
      camY--;
      //slow down frame rate or move camera slower
    }
  }

  zCentre=(furthestZ+closestZ)/2;
  if(camZ<zCentre){
    while(camZ<zCentre){
      cam1.lookAt(camX,camY,camZ);
      camZ++;
      //slow down frame rate or move camera slower
    }
  }else if(camZ>zCentre){
    while(camZ>zCentre){
      cam1.lookAt(camX,camY,camZ);
      camZ--;
      //slow down frame rate or move camera slower
    }
  }
}