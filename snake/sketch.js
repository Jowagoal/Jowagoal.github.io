// State Variable - Snake
// Jordie Walter
// Sept 9, 2019
//
// Extra for Experts:

//global variables
let state = "Menu";

let arr = [0,0,0,0];
let position = [0,0,0];
let positionCube = [];
let push0 = 50;
let push1 = 0;
let push2 = 0;
let push3 = 1;
let snakeLength = 3;

let cam1;

let inconsolata;
let instructions = ["Controls:", "A                   = left", "D                   = right", "W                  = forward", "S                   = back", "Up Arrow      = up", "Down Arrow =  down"];
let toggle = 1;

//preloads the font
function preload(){
  inconsolata = loadFont('assets/Inconsolata.otf');
}

function setup() {
  if(state==="Menu"){
    createCanvas(windowWidth, windowHeight);
  }else if(state==="Options"){
    createCanvas(windowWidth, windowHeight);
    textSize(25);
  }else if(state==="Play"){
    //creates a 3d canvas
    createCanvas(windowWidth, windowHeight, WEBGL);
    
    camera(-300,-400,600,500,700,-500);

    frameRate(10);
  }else if(state==="Game Over"){
    
  }
}

//draw loop calls all functions
function draw() {
  checkState();
}

function checkState(){
  if(state==="Menu"){
    startScreen();
  }
  if(state==="Options"){
    optionMenu();
  }
  if(state==="Play"){
    gamePlay();
  }
  if(state==="Game Over"){
    
  }
}

function startScreen(){
  background(220);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(25);

  fill(255);
  rect(width/2, height/2, width/4, height/8);
  fill(0);
  text("Start Game",width/2, height/2);
  
  fill(255);
  rect(width/2, height/2+height/4, width/4, height/8);
  fill(0);
  text("Options",width/2, height/2+height/4);

  
  if(mouseX>width/2-width/8&&mouseX<width/2+width/8&&mouseY>height/2-height/16&&mouseY<height/2+height/16&&mouseIsPressed){
    state="Play";
    setup();
  }else if(mouseX>width/2-width/8&&mouseX<width/2+width/8&&mouseY>height/2-height/16+height/4&&mouseY<height/2+height/16+height/4&&mouseIsPressed){
    state="Options";
    setup();
  }
}

function optionMenu(){
  background(220);
  controls();
  fill(255,0,0);

  rectMode(CENTER);
  rect(width*0.9,-150, 30, 20);
  if(mouseX>width*0.9-15&&mouseX<width*0.9+15&&mouseY>38&&mouseY<60&&mouseIsPressed){
    state="Menu";
    setup();
  }
}

function gamePlay(){
  background(220);
  
  strokeWeight(5);
  createBoard();

  gameStartedWaitTime();

  strokeWeight(2);
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

  line(975,-25,25,975,975,25);
}

function gameStartedWaitTime(){
  
}

function gameStart(){
  stroke(0);
  orbitControl();
  
  readArray();
  
  position[0]=position[0]+push0;
  position[1]=position[1]+push1;
  position[2]=position[2]+push2;
  
  arr.push(push0);
  arr.push(push1);
  arr.push(push2);
  arr.push(push3);
  
  if(position[0]<-100||position[0]>950||position[1]<0||position[1]>1000||position[2]>0||position[2]<-1050){
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

//borders are -100<x>900, 0<y>1000, -1000<z>0
function placeBox(){
  let x = position[0];
  let y = position[1];
  let z = position[2];
  if(x<=-100||x>=900||y<=0||y>=1000||z<=-1000||z>=0){
  fill(255,0,0,50);
    box(50);
  }else if(x<=0||x>=800||y<=100||y>=900||z<=-900||z>=-100){
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
  }else if(keyIsDown(65)){
  //if 'a' is pressed it pushes 5-bits into the array
  //telling it to move the ball to the left
    if(push0!==50){
      push0=-50;
    }
    push1=0;
    push2=0;
    position[0]=position[0]-50;
  }else if(keyIsDown(87)){
    //if 'w' is pressed it pushes 5-bits into the array
    //telling it to move the ball forward
    push0=0;
    push1=0;
    if(push2!==50){
      push2=-50;
    }
    position[2]=position[2]-50;
  }else if(keyIsDown(83)){
    //if 's' is pressed it pushes 5-bits into the array
    //telling it to move the ball backward 
    push0=0;
    push1=0;
    if(push2!==-50){
      push2=50;
    }
    position[2]=position[2]+50;
  }else if(keyIsDown(38)){
    //if 'UP_ARROW' is pressed it pushes 5-bits into the array
    //telling it to move the ball up 
    push0=0;
    if(push1!==50){
      push1=-50;
    }
    push2=0;
    position[1]=position[1]-50;
  }else if(keyIsDown(40)){
    //if 'DOWN_ARROW' is pressed it pushes 5-bits into the array
    //telling it to move the ball down 
    push0=0;
    if(push1!==-50){
      push1=50;
    }
    push2=0;
    position[1]=position[1]+50;
  }
}


//shows the controls if it is toggeled on
function controls(){
  textAlign(LEFT, TOP);
  fill(0);
  for(var i=0; i<=instructions.length; i++){
    text(instructions[i], 100, 100);
    translate(0, 25);
  }
}

//when window is resized setup is called again
function windowResized(){
  setup();
}