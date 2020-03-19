let factorial = 0;


let scale = 5;
let vertical = 5;
let horizontal = 5;
let thisStart = 0;
let xStep;
let yStep;
let mode = 'powers'

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  stroke(0);
  strokeWeight(1);
  textSize(20);
  rectMode(RADIUS);
}

function draw() {
  background(255);
  translate(width/2,height/2);
  line(0,-height/2,0,height/2);
  line(-width/2,0,width/2,0);
  grid(horizontal,vertical,mode);
  graphFactorial();
}

function grid(numberX, numberY, mode){
  let counter = 0;
  let subCounter = 0;
  xStep = width/2/numberX-1;
  yStep = height/2/numberY-1;
  
  for(var i=xStep; i<width/2; i+=xStep){
    counter++;
    line(i,0,i,20);
    line(-i,0,-i,20);
    textAlign(CENTER, CENTER);
    if(counter%Math.floor(scale/2)===0){
      text(counter,i,40);
      text(-counter,-i,40);
    }
  }
  counter = 0;
  subCounter = 0;
  for(var i=yStep; i<width/2; i+=yStep){
    if(mode === '1:1'){
      counter++;
    }else if(mode === 'powers'){
      subCounter++;
      counter = Math.pow(subCounter, factorial);
    }
    line(0,i,0-20,i);
    line(0,-i,0-20,-i);
    textAlign(RIGHT);
    if(counter%scale===0&&i<height/2&&mode==='1:1'){
      text(-counter,-30, i);
      text(counter,-30,-i);
    }else if(mode==='powers'){
      text(-counter,-30, i);
      text(counter,-30,-i);
    }
  }
}

function graphFactorial(){
  let arr = [];
  //let start = Math.ceil(factorial/-2);
  let start = thisStart;
  //let start = -factorial;
  for(var i=start; i<=start+factorial; i++){
    arr.push(Math.pow(i, factorial));
  }
  for(var i=0; i<=factorial; i++){
    for(var k=0; k<arr.length; k++){
      strokeWeight(10);
      graphPoint(i,arr[k],xStep,yStep,mode);
      strokeWeight(1);
    }
    for(var j=arr.length-1; j>0; j--){
      arr[j]-=arr[j-1];
    }
    arr.splice(0,1);
  }
}

function graphPoint(x,y,xStep,yStep,mode){
  if(mode==='1:1'){
    point(x*xStep,y*yStep);
  }else if(mode==='powers'){
    if(y>0){
      if(factorial===0){
        point(x*xStep,-y*yStep);
      }else{
        y = -Math.pow(y, 1/factorial);
        point(x*xStep,y*yStep);
      }
    }else{
      if(factorial%2==0){
        y = Math.pow(-y, 1/factorial);
      }else{
        y = Math.pow(-y, 1/factorial);
      }
      point(x*xStep,y*yStep);
    }
  }
}

function keyPressed(){
  if(keyIsDown(40)){
    vertical++;
  }else if(keyIsDown(38)){
    vertical--;
  }else if(keyIsDown(37)){
    horizontal++;
  }else if(keyIsDown(39)){
    horizontal--;
  }else if(keyIsDown(87)){
    thisStart++;
  }else if(keyIsDown(83)){
    thisStart--;
  }else if(keyIsDown(70)){
    factorial++;
  }else if(keyIsDown(86)&&factorial>0){
    factorial--;
  }
}

function windowResized(){
  setup();
}