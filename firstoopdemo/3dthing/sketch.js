let adderX = 0;
let changeX;
let adderZ = 0;
let changeZ;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  normalMaterial();
  let cam = createCamera();
  cam.setPosition(-1000,-600,1200);
  cam.lookAt(0, 0, 0);
  changeX = random(-0.1,0.1);
  changeZ = random(-0.1,0.1);
}

function draw(){
  orbitControl();
  background(220);
  if(adderX<=-5||adderX>=5){
    changeX*=-1;
  }
  if(adderZ<=-5||adderZ>=5){
    changeZ*=-1;
  }
  adderX+=changeX;
  adderZ+=changeZ;
  for(var x=-5; x<=5; x++){
    push();
    translate((x+adderX)*50,0,0);
    for(var z=-5; z<=5; z++){
      push();
      translate(0,0,(z+adderZ)*-50);
      box(50,sin(millis()/1000)*(x+adderX)*(z+adderZ)*10+50,50);
      pop();
    }
    pop();
  }
}