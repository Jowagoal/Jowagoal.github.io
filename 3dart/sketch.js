// 3d Test
// Jordie Walter
// Sept 9, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let arr = [0,0,0,0,1];
let position = [0,0,0];
let positionCube = [];

let furthestCubeX = 0;
let furthestCubeY = 0;
let furthestCubeZ = 0;
let closestCubeX = 0;
let closestCubeY = 0;
let closestCubeZ = 0;

let furthestBallX = 0;
let furthestBallY = 0;
let furthestBallZ = 0;
let closestBallX = 0;
let closestBallY = 0;
let closestBallZ = 0;

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
    let checkPosition = [0,0,0];
    let indexNumber=0;
    while(true){
      checkPosition[0]=checkPosition[0]+arr[indexNumber];
      checkPosition[1]=checkPosition[1]+arr[indexNumber+1];
      checkPosition[2]=checkPosition[2]+arr[indexNumber+2];
      indexNumber+=5;
      if(checkPosition[0]===position[0]&&checkPosition[1]===position[1]&&checkPosition[2]===position[2]&&arr[indexNumber+3]===1){
        arr[indexNumber+3]=0;
        break;
      }
      if(indexNumber>=arr.length){
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
  for(var i=0; i<=positionCube.length; i+=3){
    if(positionCube[i]<closestCubeX){
      closestCubeX=positionCube[i];
    }
    if(positionCube[i+1]<closestCubeY){
      closestCubeY=positionCube[i+1];
    }
    if(positionCube[i+2]<closestCubeZ){
      closestCubeZ=positionCube[i+1];
    }
    if(positionCube[i]>furthestCubeX){
      furthestCubeX=positionCube[i];
    }
    if(positionCube[i+1]>furthestCubeY){
      furthestCubeY=positionCube[i+1];
    }
    if(positionCube[i+2]>furthestCubeZ){
      furthestCubeZ=positionCube[i+2];
    }
  }
  
  if(position[0]<closestBallX){
    closestBallX=position[0];
  }
  if(position[1]<closestCubeY){
    closestBallY=position[1];
  }
  if(position[2]<closestCubeZ){
    closestBallZ=position[1];
  }
  if(position[0]>furthestCubeX){
    furthestBallX=position[0];
  }
  if(position[1]>furthestCubeY){
    furthestBallY=position[1];
  }
  if(position[2]>furthestCubeZ){
    furthestBallZ=position[2];
  }
  
  let furthestX;
  let furthestY;
  let furthestZ;
  let closestX;
  let closestY;
  let closestZ;
  //not working
  if(furthestBallX>furthestCubeX){
    furthestX = furthestBallX
  }else if(furthestBallX<furthestCubeX){
    furthestX = furthestCubeX
  }
  if(furthestBallY>furthestCubeY){
    furthestY = furthestBallY
  }else if(furthestBallY<furthestCubeY){
    furthestY = furthestCubeY
  }
  if(furthestBallZ>furthestCubeZ){
    furthestZ = furthestBallZ
  }else if(furthestBallZ<furthestCubeZ){
    furthestZ = furthestCubeZ
  }

  if(closestBallX>closestCubeX){
    closestX = closestBallX
  }else if(closestBallX<closestCubeX){
    closestX = closestCubeX
  }
  if(closestBallY>closestCubeY){
    closestY = closestBallY
  }else if(closestBallY<closestCubeY){
    closestY = closestCubeY
  }
  if(closestBallZ>closestCubeZ){
    closestZ = closestBallZ
  }else if(closestBallZ<closestCubeZ){
    closestZ = closestCubeZ
  }



  xCentre=(furthestX+closestX)/2;
  yCentre=(furthestY+closestY)/2;
  zCentre=(furthestZ+closestZ)/2;
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