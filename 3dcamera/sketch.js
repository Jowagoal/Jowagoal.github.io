// Line Art Demo
// Jordie Walter
// Sept 9, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let numCubes = 0;
let cam;
let xCentre;
let yCentre;
let zCentre;
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
  makeCubes();
  lookAtCubes();
}

function lookAtCubes(){
  xCentre=numCubes*60/2
  while(camX<=xCentre){
    console.log(camX);
    cam.lookAt(camX,camY,camZ);
    camX++;
    //slow down frame rate or move camera slower
  }
}

function rotation(){
  if(keyIsDown(32)){
    console.log('space pressed');
    rotateY(mouseX*0.01);
    rotateX(mouseY*-0.01);
  }
}
function keyPressed(){
  if(keyIsDown(39)){
    numCubes +=1;
  }
  if(keyIsDown(37)){
    numCubes -=1;
  }
}

function makeCubes(){
  for(let i=0; i<=numCubes; i++){
    box(50);
    translate(60,0,0);
  }
}