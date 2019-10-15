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
  circle(0,0, cannonWidth)
  pop();
}

function mouseClicked(){
  fire();
}

function fire(){
  let thisBullet = {
    x: cannonX,
    y: cannonY,
    radius: cannonLength,
    angle: cannonAngle,
    speed: 15
  };
  bullets.push(thisBullet);
}

function updateBullets(){
  for (let i=0; i<bullets.length; i++){
    bullets[i].x += bullets[i].speed*cos(bullets[i].angle);
    bullets[i].y += bullets[i].speed*sin(bullets[i].angle);
    circle(bullets[i].x, bullets[i].y, bullets[i].radius);
    //if(bullets[i].x>width||bullets[i].x<width||bullets[i].y>height||bullets[i].y>height){
      //bullets.splice(i,1);
    //}
  }
}

function windowResized(){
  setup();
}