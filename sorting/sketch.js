let arr = [];
let end = 0;
let j = 0;
let speed = 1;
let done = false;
let scramble = new Clickable(10,70);

function setup() {
  createCanvas(windowWidth, windowHeight);

  for(var x=0; x<width; x++){
    arr[x] = floor(random(0, height-1));
  }

  end = arr.length-2
  j = 0;
  
  strokeWeight(1);
  fill(0);
}

function draw() {
  background(220);
  calculateSwap();
  animateLines(); 
  topLeftStuff();
}

function topLeftStuff(){
  stroke(0);
  textSize(50);
  textAlign(LEFT, TOP);
  text('Playback speed: ' + speed + 'x',10,10);

  if(done){
    text('Sorted!',10,130);
  }

  scramble.draw();
  scramble.text = "Scramble";
  scramble.onRelease = function(){
    for(var x=0; x<width; x++){
      arr[x] = floor(random(0, height-1));
    }
    
    end = arr.length-2
    j = 0;
    done = false;
  }
}

function calculateSwap(){
  if(!done){
    for(var x=0; x<speed; x++){
      if(arr[j]<arr[j+1]){
        swap(arr, j, j+1);
      }
      j++;
      if(j>end){
        end--;
        j=0;
      }
    }
  }
  if(end<=0){
    done = true;
  }
}

function swap(arr, a, b){
  let hold = arr [a];
  arr[a]=arr[b];
  arr[b]=hold;
}

function animateLines(){
  for(var x=arr.length-1; x>=0; x--){
    if(x===j||x===j+1){
      stroke(255,0,0);
    }else{
      stroke(0,150,0);
    }
    line(x,height,x,height-arr[x]);
  }
}

function keyPressed(){
  if(keyIsDown(38)){
    speed*=2;
  }else if(keyIsDown(40)&&speed>1){
    speed/=2;
  }
}

function windowResized(){
  setup();
}