// 3d Test
// Jordie Walter
// Sept 9, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

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
  makeCubesX();
  makeCubesZ();
  makeCubesY();
  lookAtCubes();
}

function lookAtCubes(){
  xCentre=numCubesX*60/2
  while(camX<=xCentre){
    cam.lookAt(camX,camY,camZ);
    camX++;
    //slow down frame rate or move camera slower
  }
}


function makeCubesX(){
  for(let i=0; i<=numCubesX; i++){
    box(50);
    translate(60,0,0);
  }
}

function makeCubesZ(){
  for(let j=0; j<numCubesZ; j++){
    box(50);
    translate(0,0,-60);
  }
}

function makeCubesY(){
  for(let k=0; k<numCubesY; k++){
    box(50);
    translate(0,-60,0);
  }
}

function keyPressed(){
  if(keyIsDown(39)){
    numCubesX+=1;
  }
  if(keyIsDown(37)){
    numCubesX-=1;
  }
  if(keyIsDown(38)){
    numCubesZ+=1;
  }
  if(keyIsDown(40)){
    numCubesZ-=1;
  }
  if(keyIsDown(32)){
    numCubesY+=1;
  }
  if(keyIsDown(8)){
    numCubesY-=1;
  }
}