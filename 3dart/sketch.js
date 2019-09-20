// 3d Test
// Jordie Walter
// Sept 9, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let arr = [0,0,0,0,1];
let position = [0,0,0];
let positionCube = [];

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

    let i = 0;
    while(true){
      if(positionCube[i]===position[0]&&positionCube[i+1]===position[1]&&positionCube[i+2]===position[2]){
        positionCube.splice(i, 1);
        positionCube.splice(i, 1);
        positionCube.splice(i, 1);
        break;
      }
      i+=3;
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
  let furthestCubeX = 0;
  let furthestCubeY = 0;
  let furthestCubeZ = 0;
  let closestCubeX = 0;
  let closestCubeY = 0;
  let closestCubeZ = 0;

  let ballX = 0;
  let ballY = 0;
  let ballZ = 0;
  
  let xCentre;
  let yCentre;
  let zCentre;
  for(var i=0; i<=positionCube.length; i+=3){
    if(positionCube[i]<closestCubeX){
      closestCubeX=positionCube[i];
    }
    if(positionCube[i+1]<closestCubeY){
      closestCubeY=positionCube[i+1];
    }
    if(positionCube[i+2]<closestCubeZ){
      closestCubeZ=positionCube[i+2];
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
  
  ballX = position[0];
  ballY = position[1];
  ballZ = position[2];
  
  let furthestX;
  let furthestY;
  let furthestZ;
  let closestX;
  let closestY;
  let closestZ;
  
  if(ballX>=furthestCubeX){
    furthestX = ballX
  }else if(ballX<=furthestCubeX){
    furthestX = furthestCubeX
  }
  if(ballY>=furthestCubeY){
    furthestY = ballY
  }else if(ballY<=furthestCubeY){
    furthestY = furthestCubeY
  }
  if(ballZ>=furthestCubeZ){
    furthestZ = ballZ
  }else if(ballZ<=furthestCubeZ){
    furthestZ = furthestCubeZ
  }
  
  if(ballX<=closestCubeX){
    closestX = ballX
  }else if(ballX>=closestCubeX){
    closestX = closestCubeX
  }
  if(ballY<=closestCubeY){
    closestY = ballY
  }else if(ballY>=closestCubeY){
    closestY = closestCubeY
  }
  if(ballZ<=closestCubeZ){
    closestZ = ballZ
  }else if(ballZ>=closestCubeZ){
    closestZ = closestCubeZ
  }

  xCentre=((furthestX+closestX)/2);
  yCentre=((furthestY+closestY)/2);
  zCentre=((furthestZ+closestZ)/2);
  cam1.lookAt(xCentre,yCentre,zCentre);
}