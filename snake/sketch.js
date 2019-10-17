// State Variable - Snake
// Jordie Walter
// Sept 9, 2019
//
// Extra for Experts:

//global variables
let state = "Menu";
let play;

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
let snakeLength;

let inconsolata;
let instructions = ["Controls:", "A          = left", "D          = right", "W          = forward", "S          = back", "Up Arrow   = up", "Down Arrow = down"];
let sliderX = 225;
let difficulty = 10;

let gameCounter = 0;

let topView = new p5(( sketch ) => {

  let x = 50;
  let y = 50;

  sketch.setup = () => {
    sketch.createCanvas(150, 150);
  };
  sketch.draw = () => {
    if(state==="Menu"){
      sketch.background(100);
    }
    if(state==="Options"){
      sketch.background(220);
    }
    if(state==="Play"){
      sketch.background(0);
      sketch.fill(255);
      sketch.rect(x,y,50,50);
    }
    if(state==="Game Over"){
      sketch.background(220);
    }
  };
});

let sideView = new p5(( sketch ) => {

  let x = 50;
  let y = 50;

  sketch.setup = () => {
    sketch.createCanvas(150, 150);
  };
  sketch.draw = () => {
    if(state==="Menu"){
      sketch.background(100);
    }
    if(state==="Options"){
      sketch.background(220);
    }
    if(state==="Play"){
      sketch.background(100);
      sketch.fill(255);
      sketch.rect(x,y,50,50);
    }
    if(state==="Game Over"){
      sketch.background(220);
    }
  };
});

let frontView = new p5(( sketch ) => {

  let x = 50;
  let y = 50;

  sketch.setup = () => {
    sketch.createCanvas(150, 150);
  };
  sketch.draw = () => {
    if(state==="Menu"){
      sketch.background(100);
    }
    if(state==="Options"){
      sketch.background(220);
    }
    if(state==="Play"){
      sketch.background(200);
      sketch.fill(255);
      sketch.rect(x,y,50,50);
    }
    if(state==="Game Over"){
      sketch.background(220);
    }
  };
});
// myp5.style("position", "absolute");

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
    
    frameRate(60);
    
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
    play=false;
  }
  if(state==="Options"){
    optionMenu();
    play=false;
  }
  if(state==="Play"){
    gamePlay();
    play=true;
    box(100, 100, 0);
  }
  if(state==="Game Over"){
    gameCounter=1;
    deathScreen();
    play=false;
  }
  if(play===false){
    noStroke();
    fill(255,0,0);
    circle(mouseX, mouseY, 3);
  }
}

function startScreen(){
  if(gameCounter===1){
    translate(-1/2*width,-1/2*height);
  }
  noStroke();
  background(100);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(100);
  textFont(inconsolata);

  fill(0,255,100);
  text("3D Snake",width/2, height/8);
  
  stroke(0);
  textSize(25);
  fill(200);
  rect(width/2, height/2, width/4, height/8);
  rect(width/2, height/2+height/4, width/4, height/8);

  fill(0);
  noStroke();
  text("Start Game",width/2, height/2);
  
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
  play=false;

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
  noStroke();
  textFont(inconsolata);
  textSize(25);
  if(gameCounter===1){
    translate(-1/2*width,-1/2*height);
  }
  background(220);
  textAlign(LEFT, TOP);
  fill(0);
  for(var i=0; i<instructions.length; i++){
    text(instructions[i], 100, 100);
    translate(0, 25);
  }

  stroke(0);
  fill(255);
  rect(225, 300, 250, 20);

  noStroke();
  fill(220);
  for(var j=0; j<9; j++){
    rect(125+25*j, 300, 5, 20);
  }

  fill(0);
  textAlign(CENTER, CENTER);
  text("Difficulty", 225, 250);
  textSize(15);
  text("Easy", 100, 325);
  text("Normal", 225, 325);
  text("Hard", 350, 325);
  
  stroke(0);
  fill(150);
  rect(sliderX, 300, 9, 25);
  if(mouseX>100&&mouseX<350&&mouseY>474-12&&mouseY<474+12&&mouseIsPressed){
    sliderX=mouseX;
  }else if(sliderX<100+25/2){
    sliderX=100;
    difficulty = 5;
  }else if(sliderX>=100+25/2&&sliderX<100+25/2*3){
    sliderX=100+25;
    difficulty = 6;
  }else if(sliderX>=100+25/2*3&&sliderX<100+25/2*5){
    sliderX=100+25*2;
    difficulty = 7;
  }else if(sliderX>=100+25/2*5&&sliderX<100+25/2*7){
    sliderX=100+25*3;
    difficulty = 8;
  }else if(sliderX>=100+25/2*7&&sliderX<100+25/2*9){
    sliderX=100+25*4;
    difficulty = 9;
  }else if(sliderX>=100+25/2*9&&sliderX<100+25/2*11){
    sliderX=100+25*5;
    difficulty = 10;
  }else if(sliderX>=100+25/2*11&&sliderX<100+25/2*13){
    sliderX=100+25*6;
    difficulty = 11;
  }else if(sliderX>=100+25/2*13&&sliderX<100+25/2*15){
    sliderX=100+25*7;
    difficulty = 12;
  }else if(sliderX>=100+25/2*15&&sliderX<100+25/2*17){
    sliderX=100+25*8;
    difficulty = 13;
  }else if(sliderX>=100+25/2*17&&sliderX<100+25/2*19){
    sliderX=100+25*9;
    difficulty = 14;
  }else if(sliderX>=100+25/2*19){
    sliderX=100+25*10;
    difficulty = 15;
  }
  
  fill(255,0,0);
  rectMode(CENTER);
  rect(width*0.9,-125, 30, 20);
  if(mouseX>width*0.9-15&&mouseX<width*0.9+15&&mouseY>38&&mouseY<60&&mouseIsPressed){
    state="Menu";
    setup();
  }
  if(play===false){
    translate(0,-175);
    fill(255,0,0);
    circle(mouseX, mouseY, 3);
  }
}

function gamePlay(){
  background(220);
  
  createBoard();

  gameStart();
}

function createBoard(){
  strokeWeight(5);
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

function gameStart(){
  strokeWeight(2);
  frameRate(difficulty);
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
    for(var i=0; i<=bodyPosition.length-3; i+=3){
      if(foodPosition[0]===bodyPosition[i]&&foodPosition[1]===bodyPosition[i+1]&&foodPosition[2]===bodyPosition[i+2]){
        foodPosition[0]=ceil(random(0,19))*50;
        foodPosition[1]=ceil(random(0,19))*50;
        foodPosition[2]=ceil(random(-19,0))*50;
      }
    }
  }else if(position[0]===foodPosition[0]&&position[1]===foodPosition[1]&&position[2]===foodPosition[2]){
    foodPosition[0]=ceil(random(0,19))*50;
    foodPosition[1]=ceil(random(0,19))*50;
    foodPosition[2]=ceil(random(-19,0))*50;
    snakeLength++;
    for(var j=0; j<=bodyPosition.length-3; j+=3){
      if(foodPosition[0]===bodyPosition[j]&&foodPosition[1]===bodyPosition[j+1]&&foodPosition[2]===bodyPosition[j+2]){
        foodPosition[0]=ceil(random(0,19))*50;
        foodPosition[1]=ceil(random(0,19))*50;
        foodPosition[2]=ceil(random(-19,0))*50;
      }
    }
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
  frameRate(60);
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

  stroke(0);
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