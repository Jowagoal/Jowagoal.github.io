// Interactive Scene - 3D Art
// Jordie Walter
// Sept 9, 2019
//
// Extra for Experts:
// This code is entirely based around 3D.  Within it I have explored
// 3D objects, preloading fonts that support 3D, and the use of
// multiple cameras to view the user's masterpeice.

//global variables
let arr = [0,0,0,0,1];
let position = [0,0,0];
let positionCube = [];

let cam1;
let cam2;
let currentCam = 1;

let camX=0;
let camY=0;
let camZ=0;

let inconsolata;
let instructions = ["Controls:", "A          = left", "D          = right", "W          = forward", "S          = back", "Up Arrow   = up", "Down Arrow = down", "T          = hide/show controls", "Enter      = place block", "Backspace  = delete block", "1          = Camera 1 (looks at centre)", "2          = Camera 2 (looks at ball)", "","Click and drag to look around", "Mouse wheel to zoom in and out", "(Hint: be agressive with it!)"]
let toggle = 1;

//preloads the font
function preload(){
  inconsolata = loadFont('assets/inconsolata.otf');
}

function setup() {
  //creates a 3d canvas
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(220);
  
  //creates each camera
  cam1 = createCamera();
  cam1.lookAt(0,0,0);
  cam2 = createCamera();
  cam2.lookAt(0,0,0);
  
  //sets font
  textFont(inconsolata);
  textSize(25);
  textAlign(LEFT, BOTTOM);
}

//draw loop calls all functions
function draw() {
  normalMaterial();
  background(220)
  orbitControl();
  
  readArray();
  cam();
  controls();
}

//when a key is pressed this function is called
function keyPressed(){
  //if 'd' is pressed it pushes 5-bits into the array
  //telling it to move the ball to the right 
  if(keyIsDown(68)){
    arr.push(60,0,0,0,1);
    position[0]=position[0]+60;
  }
  //if 'a' is pressed it pushes 5-bits into the array
  //telling it to move the ball to the left
  if(keyIsDown(65)){
    arr.push(-60,0,0,0,1);
    position[0]=position[0]-60;
  }
  //if 'w' is pressed it pushes 5-bits into the array
  //telling it to move the ball forward
  if(keyIsDown(87)){
    arr.push(0,0,-60,0,1);
    position[2]=position[2]-60;
  }
  //if 's' is pressed it pushes 5-bits into the array
  //telling it to move the ball backward 
  if(keyIsDown(83)){
    arr.push(0,0,60,0,1);
    position[2]=position[2]+60;
  }
  //if 'UP_ARROW' is pressed it pushes 5-bits into the array
  //telling it to move the ball up 
  if(keyIsDown(38)){
    arr.push(0,-60,0,0,1);
    position[1]=position[1]-60;
  }
  //if 'DOWN_ARROW' is pressed it pushes 5-bits into the array
  //telling it to move the ball down 
  if(keyIsDown(40)){
    arr.push(0,60,0,0,1);
    position[1]=position[1]+60;
  }
  //if 't' is pressed it changes which camera is active
  if(keyIsDown(84)){
    toggle*=-1;
  }
  //if 'ENTER' is pressed it pushes 5-bits into the array
  //telling the program to put a box there
  if(keyIsDown(13)){
    arr.push(0,0,0,1,1);
    //positionCube remembers where each box is
    positionCube.push(position[0],position[1],position[2]);
  }
  //if 'BACKSPACE' is pressed it will remove the box at that position
  //and remove it from the positionCube array
  if(keyIsDown(8)){
    let checkPosition = [0,0,0];
    let indexNumber=0;
    while(true){
      //checkPosition will go through the array and find the current
      //position the program is in, then if the 'cube' bit is 1 change
      //it to a 0
      checkPosition[0]=checkPosition[0]+arr[indexNumber];
      checkPosition[1]=checkPosition[1]+arr[indexNumber+1];
      checkPosition[2]=checkPosition[2]+arr[indexNumber+2];
      indexNumber+=5;
      if(checkPosition[0]===position[0]&&checkPosition[1]===position[1]&&checkPosition[2]===position[2]&&arr[indexNumber+3]===1){
        arr[indexNumber+3]=0;
        break;
      }
      //if no cube is found at the position then the loop will break
      if(indexNumber>=arr.length){
        break;
      }
    }
    
    //will check the positionCube array and erase the position of a
    //cube if there is a cube in the position
    let i = 0;
    while(true){
      if(positionCube[i]===position[0]&&positionCube[i+1]===position[1]&&positionCube[i+2]===position[2]){
        positionCube.splice(i, 1);
        positionCube.splice(i, 1);
        positionCube.splice(i, 1);
        break;
      }
      i+=3;
      //if no cube is found at the position, break the loop
      if(i>=positionCube.length){
        break;
      }
    }
  }
  //if '1' is pressed, changes to camera 1
  if(keyIsDown(49)){
    currentCam=1;
    console.log(currentCam);
  }
  //if '2' is pressed, changes to camera 2
  if(keyIsDown(50)){
    currentCam=2;
    console.log(currentCam);
  }
}

//reads avery 5 indexs of the array
function readArray(){
  for(var i=0; i<=arr.length; i+=5){
    //translates by the first 3 indexs of 5
    translate(arr[i],arr[i+1],arr[i+2]);
    //creates a box if the fourth index is a 1
    if(arr[i+3]===1){
      box(50);
    }
    //creates a sphere at the current position the program is in
    if(arr[i+4]===1){
      sphere(25);
      //deletes last sphere so it doesn't stay there
      arr[i-1]=0;
    }
  }
}

//shows the controls if it is toggeled on
function controls(){
  if(toggle===1){
    fill(0);
    for(var i=0; i<=instructions.length; i++){
      text(instructions[i], -550, -150);
      translate(0, 25);
    }
  }
}

//determines which camera to use
function cam(){
  if(currentCam===1){
    lookAtCentre();
  }else if(currentCam===2){
    lookAtBall();
  }
}

//this camera will look at the ball
function lookAtBall(){
  setCamera(cam2);
  cam2.lookAt(position[0],position[1],position[2]);
}

//this camera will look at the centre of everything
function lookAtCentre(){
  setCamera(cam1);
  let furthestCubeX = 0;
  let furthestCubeY = 0;
  let furthestCubeZ = 0;
  let closestCubeX = 0;
  let closestCubeY = 0;
  let closestCubeZ = 0;

  let ballX = 0;
  let ballY = 0;
  let ballZ = 0;
  
  //for loop will find the furthest and closest cube in x, y, and z
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
  
  //sets the furthest and closest x, y, and z position to the
  //furthest/closest item (ball or box)
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

  let xCentre;
  let yCentre;
  let zCentre;

  //sets the centre of x, y, and z
  xCentre=((furthestX+closestX)/2);
  yCentre=((furthestY+closestY)/2);
  zCentre=((furthestZ+closestZ)/2);
  //camera will look at the centre
  cam1.lookAt(xCentre,yCentre,zCentre);
}

//when window is resized setup is called again
function windowResized(){
  setup();
}