// Line Art Demo
// Jordie Walter
// Sept 9, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;
let totalRows = 20;
let totalCols = 20;

function setup() {
  if(windowWidth>windowHeight){
    createCanvas(windowHeight,windowHeight);
  }else{
    createCanvas(windowWidth,windowWidth);
  }
  background(220);
  
  grid = create2dGrid(totalRows,totalCols);
}

function draw() {
  display(grid);
}

function create2dGrid(rows, cols){
  let grid2D = [];
  for(let i=0; i<rows; i++){
    let thisGrid = [];
    for(let j=0; j<cols; j++){
      if(random(100)>50){
        thisGrid.push(1);
      }else{
        thisGrid.push(0);
      }
    }
    grid2D.push(thisGrid);
  }
  return grid2D;
}

function display(grid){
  for(let i=0; i<totalRows; i++){
    for(let j=0; j<totalCols; j++){
      if(grid[i][j]===0){
        fill(0);
      }else{
        fill(255);
      }
      rect(i*width/totalRows, j*height/totalCols, 
           width/totalRows, height/totalRows);
    }
  }
}

function mouseClicked(){
  let x = mouseX;
  let y = mouseY;
  for(let i=0; i<totalRows; i++){
    for(let j=0; j<totalCols; j++){
      if(x>i*width/totalRows&&x<i*width/totalRows+width/totalRows+1&&
         y>j*height/totalCols&&y<j*height/totalCols+height/totalCols+1){
        if(grid[i][j]===0){
          grid[i][j]=1;
        }else{
          grid[i][j]=0;
        }
      }
    }
  }
}

function windowResized(){
  setup();
}