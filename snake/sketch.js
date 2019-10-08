// State Variable - Snake
// Jordie Walter
// Sept 9, 2019
//
// Extra for Experts:

//global variables
let state = "Menu";

let arr = [0,0,0,0];
let position = [0,0,0];
let secondPosition = [0,0,0];
let foodPosition = [0,0,0];
let bodyPosition = [];
let positionStored = [0,0,0];

let push0 = 50;
let push1 = 0;
let push2 = 0;
let push3 = 1;
let snakeLength = 3;

let inconsolata;
let instructions = ["Controls:", "A          = left", "D          = right", "W          = forward", "S          = back", "Up Arrow   = up", "Down Arrow = down"];
let sliderX = 225;

let gameCounter = 0;

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
    createCanvas(windowWidth, windowHeight, WEBGL);
    
    camera(-300,-400,600,500,700,-500);
    
    frameRate(10);

    foodPosition[0]=ceil(random(0,19))*50;
    foodPosition[1]=ceil(random(0,19))*50;
    foodPosition[2]=ceil(random(-19,0))*50;
  }else if(state==="Game Over"){
    createCanvas(windowWidth, windowHeight);
  }
}

function draw() {
  checkState();
}

function checkState(){
  if(state==="Menu"){
    resetAllValues();
    startScreen();
  }
  if(state==="Options"){
    optionMenu();
  }
  if(state==="Play"){
    gamePlay();
  }
  if(state==="Game Over"){
    gameCounter=1;
    deathScreen();
  }
}

function startScreen(){
  if(gameCounter===1){
    translate(-1/2*width,-1/2*height);
  }
  noStroke();
  background(220);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(75);
  
  fill(0,255,100);
  text("3D Snake",width/2, height/8);
  
  stroke(0);
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

function resetAllValues(){
  arr = [0,0,0,0];
  position = [0,0,0];
  secondPosition = [0,0,0];
  foodPosition = [0,0,0];
  bodyPosition = [];
  positionStored = [0,0,0];

  push0 = 50;
  push1 = 0;
  push2 = 0;
  push3 = 1;
  snakeLength = 3;
}

function optionMenu(){
  textFont(inconsolata);
  if(gameCounter===1){
    translate(-1/2*width,-1/2*height);
  }
  background(220);
  textAlign(LEFT, TOP);
  fill(0);
  for(var i=0; i<=instructions.length; i++){
    text(instructions[i], 100, 100);
    translate(0, 25);
  }

  stroke(1);
  fill(255);
  rect(225, 200, 250, 20);

  noStroke();
  fill(220);
  rect(225-25*4, 200, 5, 20);
  rect(225-25*3, 200, 5, 20);
  rect(225-25*2, 200, 5, 20);
  rect(225-25*1, 200, 5, 20);
  
  rect(225, 200, 5, 20);

  rect(225+25*1, 200, 5, 20);
  rect(225+25*2, 200, 5, 20);
  rect(225+25*3, 200, 5, 20);
  rect(225+25*4, 200, 5, 20);

  stroke(1);
  fill(150);

  rect(sliderX, 200, 9, 25);
  if(mouseX>100&&mouseX<350&&mouseY>400-12&&mouseY<400+12&&mouseIsPressed){
    sliderX=mouseX;
  }else if(sliderX<100+25/2){
    sliderX=100;
  }else if(sliderX>=100+25/2&&sliderX<100+25/2*3){
    sliderX=100+25;
  }

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
  strokeWeight(2);
  
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
  
  line(975,-25,25,975,975,25);
}

function gameStartedWaitTime(){
}

function gameStart(){
  stroke(0);
  orbitControl();
  
  food();

  arr.push(push0);
  arr.push(push1);
  arr.push(push2);
  arr.push(push3);

  moveSnake();
}

function moveSnake(){
  position[0]=0;
  position[1]=0;
  position[2]=0;
  secondPosition[0]=0;
  secondPosition[1]=0;
  secondPosition[2]=0;
  for(var i=0; i<=arr.length; i+=4){
    translate(arr[i],arr[i+1],arr[i+2]);
    if(arr[i+0]===50||arr[i+0]===-50||arr[i+1]===50||arr[i+1]===-50||arr[i+2]===50||arr[i+2]===-50){
      position[0]=position[0]+arr[i+0];
      position[1]=position[1]+arr[i+1];
      position[2]=position[2]+arr[i+2];
      secondPosition[0]=secondPosition[0]+arr[i-4];
      secondPosition[1]=secondPosition[1]+arr[i-3];
      secondPosition[2]=secondPosition[2]+arr[i-2];
    }
    if(position[0]<0||position[0]>950||position[1]<0||position[1]>950||position[2]>0||position[2]<-950){
      state = "Game Over";
      setup();
    }
    if(arr[i+3]===1){
      placeBox();
    }
    if(arr[i-(4*snakeLength-3)]===1){
      arr[i-(4*snakeLength-3)]=0;
    }
  }
  
  bodyPosition.push(positionStored[0]);
  bodyPosition.push(positionStored[1]);
  bodyPosition.push(positionStored[2]);
  
  positionStored.splice(0,3);

  positionStored.push(position[0]);
  positionStored.push(position[1]);
  positionStored.push(position[2]);
  
  if(bodyPosition.length>snakeLength*3){
    bodyPosition.splice(0,3);
  }
  for(var j=0; j<=bodyPosition.length-3; j+=3){
    if(position[0]===bodyPosition[j]&&position[1]===bodyPosition[j+1]&&position[2]===bodyPosition[j+2]){
      state = "Game Over";
      setup();
    }
  }
}

function placeBox(){
  let x = position[0];
  let y = position[1];
  let z = position[2];
  if(x<=0||x>=950||y<=0||y>=950||z<=-950||z>=0){
    fill(255,0,0,50);
    box(50);
  }else if(x<=100||x>=850||y<=100||y>=850||z<=-850||z>=-100){
    fill(0,0,255,50);
    box(50);
  }
  else{
    fill(0,255,0,50);
    box(50);
  }
}

function food(){
  if(position[0]+push0===foodPosition[0]&&position[1]+push1===foodPosition[1]&&position[2]+push2===foodPosition[2]){
    foodPosition[0]=ceil(random(0,19))*50;
    foodPosition[1]=ceil(random(0,19))*50;
    foodPosition[2]=ceil(random(-19,0))*50;
    snakeLength++;
  }else if(position[0]===foodPosition[0]&&position[1]===foodPosition[1]&&position[2]===foodPosition[2]){
    foodPosition[0]=ceil(random(0,19))*50;
    foodPosition[1]=ceil(random(0,19))*50;
    foodPosition[2]=ceil(random(-19,0))*50;
    snakeLength++;
  }else{

    let x = foodPosition[0];
    let y = foodPosition[1];
    let z = foodPosition[2];
    fill(255,0,0);
    noStroke();
    translate(x, y, z);
    box(50);
    translate(-1*x, -1*y, -1*z);
    stroke(2);
  }
}

function deathScreen(){
  textFont(inconsolata);
  translate(-1/2*width,-1/2*height);
  background(220);
  textAlign(CENTER, CENTER);
  
  fill(255,0,0);
  textSize(50);
  text("You Died!", width/2, height/8);
  
  fill(0);
  textSize(25);
  text("Score: " + snakeLength, width/2, height/4);

  fill(255);
  rectMode(CENTER);
  rect(width/2,height/2+height/8, width/4, height/8);

  fill(0);
  text("Back to Menu", width/2, height/2+height/8);
  if(mouseX>width/2-width/8&&mouseX<width/2+width/8&&mouseY>height/2+height/8-height/16&&mouseY<height/2+height/8+height/16&&mouseIsPressed){
    state="Menu";
    setup();
  }
}

function keyPressed(){
  if(keyIsDown(68)){
    if(secondPosition[0]!==position[0]+50){
      push0=50;
      push1=0;
      push2=0;
      position[0]=position[0]+50;
    }
  }else if(keyIsDown(65)){
    if(secondPosition[0]!==position[0]-50){
      push0=-50;
      push1=0;
      push2=0;
      position[0]=position[0]-50;
    }
  }else if(keyIsDown(87)){
    if(secondPosition[2]!==position[2]-50){
      push0=0;
      push1=0;
      push2=-50;
      position[2]=position[2]-50;
    }
  }else if(keyIsDown(83)){
    if(secondPosition[2]!==position[2]+50){
      push0=0;
      push1=0;
      push2=50;
      position[2]=position[2]+50;
    }
  }else if(keyIsDown(38)){
    if(secondPosition[1]!==position[1]-50){
      push0=0;
      push1=-50;
      push2=0;
      position[1]=position[1]-50;
    }
  }else if(keyIsDown(40)){
    if(secondPosition[1]!==position[1]+50){
      push0=0;
      push1=50;
      push2=0;
      position[1]=position[1]+50;
    }
  }
}

function windowResized(){
  setup();
}