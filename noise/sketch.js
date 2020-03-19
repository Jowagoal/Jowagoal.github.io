let startingPoint = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  stroke(0);
  strokeWeight(1);
}

function draw() {
  background(220)
  for(var x=0; x<width; x++){
    let h = noise((x+startingPoint)/500);
    rect(x,height,1,h*-100);
  }
  if(keyIsDown(39)){
    startingPoint+=5;
  }else if(keyIsDown(37)){
    startingPoint-=5;
  }
}

function windowResized(){
  setup();
}