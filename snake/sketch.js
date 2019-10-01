// State Variable - Snake
// Jordie Walter
// Sept 9, 2019
//
// Extra for Experts:

//global variables
let state = "Play";

let arr = [50,0,0,0];
let position = [0,0,0];
let positionCube = [];
let push0 = 50;
let push1 = 0;
let push2 = 0;
let push3 = 1;
let snakeLength = 3;

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
  inconsolata = loadFont('assets/Inconsolata.otf');
}

function setup() {
  //creates a 3d canvas
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  //creates each camera
  cam1 = createCamera();
  cam1.lookAt(0,0,0);
  
  //sets font
  textFont(inconsolata);
  textSize(25);
  textAlign(LEFT, BOTTOM);

  frameRate(10);
  strokeWeight(5);
}

//draw loop calls all functions
function draw() {
  checkState();
}

function checkState(){
  if(state==="Menu"){
    startScreen();
  }
  if(state==="Play"){
    gamePlay();
  }
  if(state==="Game Over"){

  }
}

function startScreen(){
  background(220);
}

function gamePlay(){
  background(220);
  
  createBoard();
  gameStartedWaitTime();
  gameStart();
}

function createBoard(){
  fill(0,0,0);
  stroke(255,0,0);
  line(-25,-25,25,975,-25,25);
  line(-25,-25,25,-25,975,25);
  line(-25,-25,25,-25,-25,-975);

  line(975,975,-975,975,975,25);
  line(975,975,-975,975,-25,-975);
  line(975,975,-975,-25,975,-975);

  line(-25,975,25,975,975,25);
  line(-25,975,25,-25,975,-975);
  
  line(975,-25,-975,975,-25,25);
  line(975,-25,-975,-25,-25,-975);

  line(-25,-25,-975,-25,975,-975);

  line(975,-25,25,975,975,25)
  //translate(500,-500, 0);
}

function gameStartedWaitTime(){
  
}

function gameStart(){
  stroke(0);
  orbitControl();
  
  readArray();
  cam();
  controls();
  
  position[0]=position[0]+push0;
  position[1]=position[1]+push1;
  position[2]=position[2]+push2;
  
  arr.push(push0);
  arr.push(push1);
  arr.push(push2);
  arr.push(push3);
  if(push1===50||push1===-50){
    push0=arr[arr.length-8];
    push1=0;
    push2=arr[arr.length-6];
    push3=arr[arr.length-5];
  }
  if(position[0]<-100){
    console.log('over');
    state = "Game Over";
  }
  if(position[0]>950){
    console.log('over');
    state = "Game Over";
  }
  if(position[1]<0){
    console.log('over');
    state = "Game Over";
  }
  if(position[1]>1950){
    console.log('over');
    state = "Game Over";
  }
  if(position[2]>0){
    console.log('over');
    state = "Game Over";
  }
  if(position[2]<-1050){
    console.log('over');
    state = "Game Over";
  }
}

//reads avery 5 indexs of the array
function readArray(){
  for(var i=0; i<=arr.length; i+=4){
    //translates by the first 3 indexs of 5
    translate(arr[i],arr[i+1],arr[i+2]);
    //creates a box if the fourth index is a 1
    if(arr[i+3]===1){
      placeBox();
      //fill(0,200,0, 50);
      //box(50);
    }
    if(arr[i-(4*snakeLength-3)]===1){
      arr[i-(4*snakeLength-3)]=0;
    }
  }
}

//borders are -100<x>900, 0<y>1950, -1000<z>0
function placeBox(){
  let x = position[0];
  let y = position[1];
  let z = position[2];
  if(x<=0||x>=800||y<=200||y>=1700||z<=-900||z>=-100){
  fill(255,0,0,50);
    box(50);
  }else if(x<=200||x>=550||y<=500||y>=1400||z<=-750||z>=-300){
    fill(0,0,255,50);
    box(50);
  }
  else{
    fill(0,255,0,50);
    box(50);
  }
}

//when a key is pressed this function is called
function keyPressed(){
  //if 'd' is pressed it pushes 5-bits into the array
  //telling it to move the ball to the right 
  if(keyIsDown(68)){
    if(push0!==-50){
      push0=50;
    }
    push1=0;
    push2=0;
    position[0]=position[0]+50;
  }
  //if 'a' is pressed it pushes 5-bits into the array
  //telling it to move the ball to the left
  if(keyIsDown(65)){
    if(push0!==50){
      push0=-50;
    }
    push1=0;
    push2=0;
    position[0]=position[0]-50;
  }
  //if 'w' is pressed it pushes 5-bits into the array
  //telling it to move the ball forward
  if(keyIsDown(87)){
    push0=0;
    push1=0;
    if(push2!==50){
      push2=-50;
    }
    position[2]=position[2]-50;
  }
  //if 's' is pressed it pushes 5-bits into the array
  //telling it to move the ball backward 
  if(keyIsDown(83)){
    push0=0;
    push1=0;
    if(push2!==-50){
      push2=50;
    }
    position[2]=position[2]+50;
  }
  //if 'UP_ARROW' is pressed it pushes 5-bits into the array
  //telling it to move the ball up 
  if(keyIsDown(38)){
    push0=0;
    if(push1!==50){
      push1=-50;
    }
    push2=0;
    position[1]=position[1]-50;
  }
  //if 'DOWN_ARROW' is pressed it pushes 5-bits into the array
  //telling it to move the ball down 
  if(keyIsDown(40)){
    push0=0;
    if(push1!==-50){
      push1=50;
    }
    push2=0;
    position[1]=position[1]+50;
  }
  //if 't' is pressed it changes which camera is active
  if(keyIsDown(84)){
    toggle*=-1;
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
    cam1.lookAt(500,500,-500);
  }
}

//when window is resized setup is called again
function windowResized(){
  setup();
}