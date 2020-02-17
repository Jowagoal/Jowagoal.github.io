100000000000000000
let number = 277777788888899;
let counter = 0;
let test = 0;
let found = false;

function setup(){
  createCanvas(width, height);
  product(0);
}

function draw(){
  if(found){
    noLoop();
  }
  if(frameCount%60===0){
    console.log(test);
  }
  counter = 0;
  let hold = test;
  if(hold%10===9){
    let thisStr = str(test);
    let arr = [];
    for(var i=0; i<thisStr.length; i++){
      arr.push(int(thisStr.charAt(i)));
    }
    for(var i=arr.length-1; i>=0; i--){
      if(arr[i]!==9){
        arr[i]+=1;
        for(var j=i; j<arr.length; j++){
          arr[j] = arr[i];
        }
        break;
      }else if(i===0){
        let firstNumber = 0;
        for(var i=0; i<arr.length; i++){
          firstNumber*=10;
          firstNumber+=arr[i];
        }
        let secondNumber = 0;
        for(var i=0; i<arr.length; i++){
          secondNumber*=10;
          secondNumber+=9;
        }
        if(firstNumber===secondNumber){
          arr.push(1);
          for(var i=0; i<arr.length; i++){
            arr[i] = 1;
          }
        }
        break;
      }
    }
    let newNumber = 0;
    for(var i=0; i<arr.length; i++){
      newNumber*=10;
      newNumber+=arr[i];
    }
    test = newNumber;
  }else{
    test++;
  }
  product(test);
}

function product(n){
  counter++;
  let productOfDigits = n%10;
  n = Math.floor(n/10);
  while(n>0){
    productOfDigits *= n%10;
    n = Math.floor(n/10);
  }
  if(productOfDigits/10<1){
    if(counter===12){
      console.log(test);
      console.log(counter);
      found = true;
    }
  }else{
    product(productOfDigits);
  }
}