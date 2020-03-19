let total = 100;
let mult = 0;

let adder = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  textSize(50);
  text(mult,50,50);
  text(total,50,100);
  translate(width/2, height/2);

  let r = height/2;
  noFill();
  stroke(255);
  
  circle(0,0,r*2);
  for(var i=0; i<total; i++){
    let angle = map(i, 0, total, 0, TWO_PI);
    let x = r*cos(angle);
    let y = r*sin(angle);
    fill(255);
    circle(x,y,16);
  }

  for(var i=0; i<total; i++){
    let angle = map(i, 0, total, 0, TWO_PI);
    let previousX = r*cos(angle);
    let previousY = r*sin(angle);
    let newAngle = map(i*mult, 0, total, 0, TWO_PI);
    let newX = r*cos(newAngle);
    let newY = r*sin(newAngle);
    line(previousX,previousY,newX,newY);
  }
  //mult+=0.01;
  if(frameCount%60==0){
    mult++;
    //total++;
  }
  /*
  mult++;
  total+=adder;
  if(mult===50){
    mult = 0;
    total = 0;
    adder++;
  }
  */
}

function windowResized(){
  setup();
}