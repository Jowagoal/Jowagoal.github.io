let cam;
let camZ = -1100;
let rotate = false;
let move = false;
let rotation = 0;
let step1 = true;
let step2 = false;
let counter = 0;

function setup() {
  createCanvas(1187, 562, WEBGL);
  normalMaterial();
  background(220);
  cam = createCamera();
  cam.setPosition(0,-100,camZ);
  cam.lookAt(0,0,-2500);
}

function draw() {
  background(220);
  orbitControl();
  amIMoving();
  amIRotating();
  rotateY(rotation)
  displayBoxes();
}

function amIMoving(){
  if(move){
    camZ+=3;
    cam.setPosition(0,-100,camZ);
  }
  if(camZ>2000){
    move = false;
    cam.setPosition(0,-100,2000);
    step2 = true;
  }
}

function amIRotating(){
  if(step2){
    counter++;
  }
  if(counter>180){
    rotate = true;
  }
  if(rotate){
    rotation-=0.01;
  }
  if(rotation<-HALF_PI){
    rotate = false;
    rotation = -HALF_PI
  }
}

function displayBoxes(){
  //H
  thing(-700,-200,0);
  thing(-380,-140,910);//B
  thing(-700,-100,0);
  thing(-440,-60,700);//I
  thing(-700,-20,0);

  thing(-650,-100,-70);//H

  thing(-470,-100,400);//R

  thing(-650,-100,-550);//A

  thing(-500,-200,160);//T
  thing(-500,-150,0);
  thing(-340,-100,670);//I
  thing(-370,-50,500);//R
  thing(-500,0,0);

  //A
  thing(-290,-10,600);//I
  thing(-220,-70,850);//B

  thing(-350,-100,0);
  thing(-380,-158,-270);//D
  
  thing(-320,-120,-110);//H
  thing(-270,-190,280);//T

  thing(-170,-140,620);//I
  thing(-295,-85,-350);//D

  thing(-110,-30,850);//B
  thing(-190,-60,390);//R

  //P1
  thing(-65,-22,600);//I
  thing(-90,-60,210);//T
  thing(-50,-110,900);//B
  thing(-100,-160,-120);//H
  thing(-100,-200,0);

  thing(-50,-100,-240);//D
  thing(-50,-200,0);

  thing(10,-130,-900);//Y
  thing(0,-160,630);//I
  
  thing(40,-140,350);//R

  //P2
  thing(120,-25,600);//I
  thing(100,-70,830);//B
  thing(150,-100,-90);//D
  thing(120,-140,500);//I
  thing(150,-200,0);

  thing(180,-110,180);//T
  thing(290,-250,-900);//Y

  thing(200,-100,370);//R
  thing(300,-200,-450);//A
  
  thing(240,-150,360);//R

  //Y
  thing(525,-225,-550);//Y
  
  thing(300,-145,700);//B

  thing(500,-100,0);
  thing(530,-65,-75);//H
  thing(330,-40,730);//B

  thing(510,-150,140);//T

  thing(400,-155,700);//B

  //extras
  //B
  thing(-1500,-100,1430);

  //R
  thing(-1700,40,770);
  thing(-1900,40,640);

  //T
  thing(-2050,40,400);

  //H
  thing(-2500,-10,10);
  thing(-2510,10,-10);

  //D
  thing(-800,-50,-310);
  thing(-800,0,-330);
  thing(170,-130,-250);
  thing(-430,-35,-320);

  //A
  thing(600,-135,-325);
  thing(600,-140,-420);
  thing(-100,-120,-550);
  thing(-700,-100,-870);
  thing(220,-60,-350);
  thing(220,-60,-600);

  //Y
  thing(320,-200,-700);
  thing(320,-200,-820);
  thing(-380,-185,-1070);
  thing(-20,-100,-915);
  thing(-550,-45,-1150);
}

function thing(x,y,z){
  push();
  translate(x,y,z);
  box(50);
  pop();
}

function keyPressed(){
  if(keyIsDown(32)&&step1){
    move = true;
  }
}