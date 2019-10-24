// State Variable - Snake
// Jordie Walter
// October 21, 2019
//
// In this program, a state variable is used to determine what is on screen
// based on what the user does, the state of the program will be in Menu, Options, Play, or Game Over 
//
// Extra for Experts: 
// This game requires a strong understanding of translation. Since it is a 3D program,
// there is no coordinate system for shapes (there is for line and the camera though)
// my previous 3D art program was just a peek into 3D translation, this program requires 
// so much more since there is now the translation for the snake aswell as the food
// happening at the same time

//global variables

//this variable determines the state of the program
let state = "Menu";

//these variables are the memory of the program
let arr = [0,0,0,0];
let position = [0,0,0];
let secondPosition = [0,0,0];
let foodPosition = [0,0,0];
let bodyPosition = [];

//these variables determine how the snake moves aswell as how long the snake is
let push0 = 50;
let push1 = 0;
let push2 = 0;
let push3 = 1;
let snakeLength;

//these variables are for text and the difficulty slider in the options menu
let inconsolata;
let instructions = ["Controls:", "A          = left", "D          = right", "W          = forward", "S          = back", "Up Arrow   = up", "Down Arrow = down"];
let sliderX = 225;
let difficulty = 10;

//this variable kees track of if the game has been restarted
let restarted = false;

//preloads text font
function preload(){
  inconsolata = loadFont('assets/Inconsolata.otf');
}

//based on the state of the program, setup will create a new canvas
function setup() {
  if(state==="Menu"){
    createCanvas(windowWidth, windowHeight);
  }else if(state==="Options"){
    createCanvas(windowWidth, windowHeight);
  }else if(state==="Play"){
    //creates 3d canvas
    createCanvas(windowWidth, windowHeight, WEBGL);
    
    //sets camera position and where it looks
    camera(-300,-400,600,500,700,-500);

    //sets initial position of food
    foodPosition[0]=ceil(random(0,19))*50;
    foodPosition[1]=ceil(random(0,19))*50;
    foodPosition[2]=ceil(random(-19,0))*50;
  }else if(state==="Game Over"){
    createCanvas(windowWidth, windowHeight);
  }
}

//draw loop will first check the state
function draw() {
  checkState();
}

//after state is determined, it will call its corresponding function
function checkState(){
  if(state==="Menu"){
    //after user resets, all values that changed need to be reset
    resetAllValues();
    startScreen();
    pointerDot();
  }
  if(state==="Options"){
    optionMenu();
    pointerDot();
  }
  if(state==="Play"){
    gamePlay();
  }
  if(state==="Game Over"){
    restarted=true;
    deathScreen();
    pointerDot();
  }
}

//this just puts a red dot on the mouse
function pointerDot(){
  noStroke();
  fill(255,0,0);
  circle(mouseX, mouseY, 3);
}

//this function does everything on the start screen
function startScreen(){
  //after the program is restarted, everything on the screen is displaced
  //this corrects that displacement
  if(restarted===true){
    translate(-1/2*width,-1/2*height);
  }

  background(100);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textFont(inconsolata);
  
  //sets stroke, size, and fill for title
  noStroke();
  textSize(100);
  fill(0,255,100);
  //title
  text("3D Snake",width/2, height/8);
  
  //sets stroke and fill for the buttons
  stroke(0);
  fill(200);
  //creates buttons
  rect(width/2, height/2, width/4, height/8);
  rect(width/2, height/2+height/4, width/4, height/8);
  
  //sets stroke, size, and fill for buttons
  noStroke();
  textSize(25);
  fill(0);
  //start game button
  text("Start Game",width/2, height/2);
  
  fill(0);
  //options button
  text("Options",width/2, height/2+height/4);
  
  
  if(mouseX>width/2-width/8&&mouseX<width/2+width/8&&mouseY>height/2-height/16&&mouseY<height/2+height/16&&mouseIsPressed){
    //when mouse clicks options button, sets state to play and calls setup again to start the game
    state="Play";
    setup();
  }else if(mouseX>width/2-width/8&&mouseX<width/2+width/8&&mouseY>height/2-height/16+height/4&&mouseY<height/2+height/16+height/4&&mouseIsPressed){
    //when mouse clicks options button, sets state to play and calls setup again to open options screen
    state="Options";
    setup();
  }
}

//after user resets, all values that changed need to be reset
function resetAllValues(){
  arr = [0,0,0,0];
  position = [0,0,0];
  secondPosition = [0,0,0];
  foodPosition = [0,0,0];
  bodyPosition = [];
  
  push0 = 50;
  push1 = 0;
  push2 = 0;
  push3 = 1;
  snakeLength = 3;
}

//this function does everything on the options screen
function optionMenu(){
  background(150);
  fill(0);
  
  //after the program is restarted, everything on the screen is displaced
  //this corrects that displacement
  if(restarted===true){
    translate(-1/2*width,-1/2*height);
  }
  
  //writes the instructions on screen
  textAlign(LEFT, TOP);
  textFont(inconsolata);
  noStroke();
  textSize(25);
  //for loop allows for easy changes to the instructions
  for(var i=0; i<instructions.length; i++){
    text(instructions[i], 100, 100);
    translate(0, 25);
  }
  
  //difficulty slider bar
  stroke(0);
  fill(255);
  rect(225, 300, 250, 20);
  
  //notches on slider bar
  noStroke();
  fill(220);
  for(var j=0; j<9; j++){
    rect(125+25*j, 300, 5, 20);
  }
  
  //text for difficulty
  fill(0);
  textAlign(CENTER, CENTER);
  text("Difficulty", 225, 250);
  textSize(15);
  text("Easy", 100, 325);
  text("Normal", 225, 325);
  text("Hard", 350, 325);
  
  //the slider
  stroke(0);
  fill(150);
  rect(sliderX, 300, 9, 25);

  //if the mouse is down on any part of the bar, the slider will move to that position
  if(mouseX>100&&mouseX<350&&mouseY>474-12&&mouseY<474+12&&mouseIsPressed){
    sliderX=mouseX;
  }else 
  //when the mouse is released, the slider will snap to its nearest notch
  //each notch changes the difficulty of the game
  if(sliderX<100+25/2){
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
  
  //red back rectangle, changes the state back to menu
  fill(255,0,0);
  rectMode(CENTER);
  rect(width*0.9,-125, 30, 20);
  if(mouseX>width*0.9-15&&mouseX<width*0.9+15&&mouseY>38&&mouseY<60&&mouseIsPressed){
    state="Menu";
    setup();
  }
  //translates the origin back to the top left of the screen
  translate(0,-25*instructions.length);
}

//gameplay is split into two parts, board creation and the part that the user plays
function gamePlay(){
  background(200);
  
  createBoard();

  gameStart();
}

//the board is simply 12 lines to make a large box, the game is played within
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

//every part of the game the user plays is in this function
function gameStart(){
  //the difficulty changes the framerate
  frameRate(difficulty);
  
  orbitControl();
  strokeWeight(2);
  stroke(0);
  
  //food function makes the food
  food();

  //arr is the memory of the moves
  //push0 through push3 tells the array which of 6 directions to move
  arr.push(push0);
  arr.push(push1);
  arr.push(push2);
  arr.push(push3);
  
  //moves the snake
  moveSnake();
}


function moveSnake(){
  //resets the current position to 0
  position[0]=0;
  position[1]=0;
  position[2]=0;
  //resets second position to 0
  secondPosition[0]=0;
  secondPosition[1]=0;
  secondPosition[2]=0;
  //for loop reads every 4 elements (bit) of the array
  for(var i=0; i<=arr.length; i+=4){
    //translates by the first 3 elements of a bit (x,y,z) 
    translate(arr[i],arr[i+1],arr[i+2]);
    //updates position and secondPosition
    if(arr[i+0]===50||arr[i+0]===-50||arr[i+1]===50||arr[i+1]===-50||arr[i+2]===50||arr[i+2]===-50){
      position[0]=position[0]+arr[i+0];
      position[1]=position[1]+arr[i+1];
      position[2]=position[2]+arr[i+2];
      secondPosition[0]=secondPosition[0]+arr[i-4];
      secondPosition[1]=secondPosition[1]+arr[i-3];
      secondPosition[2]=secondPosition[2]+arr[i-2];
    }
    //if the position is outside the border, state changes to game over and calls setup
    if(position[0]<0||position[0]>950||position[1]<0||position[1]>950||position[2]>0||position[2]<-950){
      state = "Game Over";
      setup();
    }
    //if the fourth element of a bit is equal to 1, calls the placeBox function
    if(arr[i+3]===1){
      placeBox();
    }
    //checks a snakeLength bit back if the third element is equal to 1
    //if so, changes it to 0
    //this keeps the length of the snake equal to snakelength
    if(arr[i-4*snakeLength+3]===1){
      arr[i-4*snakeLength+3]=0;
    }
  }
  
  //pushes the secondPosition into the bodyPosition
  bodyPosition.push(secondPosition[0]);
  bodyPosition.push(secondPosition[1]);
  bodyPosition.push(secondPosition[2]);

  //if bodyPosition is greater than the snake length
  //the first three elements are deleted since they are no longer a part of the body
  if(bodyPosition.length>snakeLength*3){
    bodyPosition.splice(0,3);
  }

  //checks if the position is equal to any of the body positions
  //if so, state changes to game over and calls setup
  for(var j=0; j<=bodyPosition.length; j+=3){
    if(position[0]===bodyPosition[j]&&position[1]===bodyPosition[j+1]&&position[2]===bodyPosition[j+2]){
      state = "Game Over";
      setup();
    }
  }
}

//function shows the snake on screen
function placeBox(){
  let x = position[0];
  let y = position[1];
  let z = position[2];
  //if the position is 1 box away from the border, place a box with the color red
  if(x<=0||x>=950||y<=0||y>=950||z<=-950||z>=0){
    fill(255,0,0,50);
    box(50);
  }else 
  //if the position is 2-3 boxs away from the border, place a box with the color blue
  if(x<=100||x>=850||y<=100||y>=850||z<=-850||z>=-100){
    fill(0,0,255,50);
    box(50);
  }else{
    //otherwise, place a box with the color green
    fill(0,255,0,50);
    box(50);
  }
  //the color scheme is a warning system for the user, tells them how close they are to the border
}

//food function places food on screen and checks if the snake has eaten it
function food(){
  //there are two scenarios to check if the snake has eaten the food
  //the first checks the position ahead of the snake head
  //the second checks on the snake head
  //having these two scenarios will stop the snake from going straight through the food
  //when the snake has 'eaten' the food, a new piece will randomly be chosen
  if(position[0]+push0===foodPosition[0]&&position[1]+push1===foodPosition[1]&&position[2]+push2===foodPosition[2]){
    foodPosition[0]=ceil(random(0,19))*50;
    foodPosition[1]=ceil(random(0,19))*50;
    foodPosition[2]=ceil(random(-19,0))*50;
    snakeLength++;
    for(var i=0; i<=bodyPosition.length-3; i+=3){
      //incase this scenario misses the food on the position, checks if the food is in the body
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
        //incase this scenario misses the food on the position, checks if the food is in the body
        foodPosition[0]=ceil(random(0,19))*50;
        foodPosition[1]=ceil(random(0,19))*50;
        foodPosition[2]=ceil(random(-19,0))*50;
      }
    }
  }else{
    //places the food on screen
    let x = foodPosition[0];
    let y = foodPosition[1];
    let z = foodPosition[2];
    fill(255,0,0);
    noStroke();
    //moves origin to food position
    translate(x, y, z);
    box(50);
    //returns origin to 0,0,0
    translate(-1*x, -1*y, -1*z);
    stroke(2);
  }
}

//when the user dies the death screen is shown
function deathScreen(){
  frameRate(60);
  textFont(inconsolata);
  textAlign(CENTER, CENTER);
  background(100);
  //screen is displaced, translation fixes it
  translate(-1/2*width,-1/2*height);
  
  //says 'You Died!' at top of screen
  fill(255,0,0);
  textSize(50);
  text("You Died!", width/2, height/8);
  
  //displays the users score
  fill(0);
  textSize(25);
  text("Score: " + snakeLength, width/2, height/4);

  //makes Back to Menu button
  stroke(0);
  fill(255);
  rectMode(CENTER);
  rect(width/2,height/2+height/8, width/4, height/8);
  fill(0);
  text("Back to Menu", width/2, height/2+height/8);

  //if mouse is clicked on button, state changes to menu and calls setup
  if(mouseX>width/2-width/8&&mouseX<width/2+width/8&&mouseY>height/2+height/8-height/16&&mouseY<height/2+height/8+height/16&&mouseIsPressed){
    state="Menu";
    setup();
  }
}

function keyPressed(){
  //'d', changes direction to right unless snake is going left
  if(keyIsDown(68)){
    if(secondPosition[0]!==position[0]+50){
      push0=50;
      push1=0;
      push2=0;
      //updates current position
      position[0]=position[0]+50;
    }
  }else 
  //'a', changes direction to left unless snake is going right
  if(keyIsDown(65)){
    if(secondPosition[0]!==position[0]-50){
      push0=-50;
      push1=0;
      push2=0;
      //updates current position
      position[0]=position[0]-50;
    }
  }else 
  //'w', changes direction to forward unless snake is going back
  if(keyIsDown(87)){
    if(secondPosition[2]!==position[2]-50){
      push0=0;
      push1=0;
      push2=-50;
      //updates current position
      position[2]=position[2]-50;
    }
  }else 
  //'s', changes direction to back unless snake is going forward
  if(keyIsDown(83)){
    if(secondPosition[2]!==position[2]+50){
      push0=0;
      push1=0;
      push2=50;
      //updates current position
      position[2]=position[2]+50;
    }
  }else 
  //'UP_ARROW', changes direction to up unless snake is going down
  if(keyIsDown(38)){
    if(secondPosition[1]!==position[1]-50){
      push0=0;
      push1=-50;
      push2=0;
      //updates current position
      position[1]=position[1]-50;
    }
  }else 
  //'DOWN_ARROW', changes direction to down unless snake is going up
  if(keyIsDown(40)){
    if(secondPosition[1]!==position[1]+50){
      push0=0;
      push1=50;
      push2=0;
      //updates current position
      position[1]=position[1]+50;
    }
  }
}

//calls set up when window is resized
function windowResized(){
  setup();
}