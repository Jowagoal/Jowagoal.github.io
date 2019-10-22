// Line Art Demo
// Jordie Walter
// Sept 9, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

  let cannonX;
  let cannonY;
  let cannonWidth;
  let cannonLength;
  let cannonAngle;
  let bullets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  cannonX = 75;
  cannonY = height-150;
  cannonWidth = 50;
  cannonLength = 125;
}

function draw() {
  background(220);
  
  displayCannon();
  
  updateBullets();
}

function displayCannon(){
  push();
  translate(cannonX,cannonY);
  cannonAngle = atan2(mouseY - cannonY, mouseX - cannonX);
  rotate(cannonAngle);
  rect(0, -cannonWidth/2, cannonLength, cannonWidth);
  circle(0,0, cannonWidth);
  pop();
  if(keyIsDown(68)){
    cannonX+=5;
  }
  if(keyIsDown(65)){
    cannonX-=5;
  }
}

function mouseClicked(){
  fire();
}

function fire(){
  let thisBullet = {
    x: cannonX,
    y: cannonY,
    radius: cannonWidth,
    angle: cannonAngle,
    speed: 10
  };
  bullets.push(thisBullet);
}

function updateBullets(){
  for (let i=bullets.length-1; i>=0; i--){
    bullets[i].x += bullets[i].speed*cos(bullets[i].angle);
    bullets[i].y += bullets[i].speed*sin(bullets[i].angle);
    circle(bullets[i].x, bullets[i].y, bullets[i].radius);
    if(bullets[i].x>width+bullets[i].radius||bullets[i].x<0-bullets[i].radius||bullets[i].y>height+bullets[i].radius||bullets[i].y<0-bullets[i].radius){
      bullets.splice(i,1);
    }
  }
}

function windowResized(){
  setup();
}