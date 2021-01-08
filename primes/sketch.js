let digitCutPrime;
let numbers = 13000000;
if(digitCutPrime!==undefined){
  numbers = Math.pow(10,digitCutPrime);
}
let primes = [2];
let cutPrimes = [];
let lowestCutPrimes = [];

function setup(){
  findPrimes();
  print(primes);

  if(digitCutPrime!==undefined){
    findCutPrimes(digitCutPrime);
  }else{
    findCutPrimes();
    print(cutPrimes);
  
    findLowestCutPrimes();
    print(lowestCutPrimes);
  }
}

function findPrimes(){
  for(var i=3; i<numbers; i+=2){
    let prime = isPrime(i);
    if(prime){
      primes.push(i);
    }
  }
}

function isPrime(n){
  let hold = true;
  for(var j=0; j<primes.length; j++){
    if(n%primes[j]===0&&primes[j]!==n){
      hold = false;
    }
  }
  if(hold){
    return true;
  }
}

function findCutPrimes(digit){
  let start;
  if(digit===undefined){
    start = 0;
  }else{
    for(var i=0; i<primes.length; i++){
      if(int(str(primes[i]).length)===digit){
        start = i;
        break;
      }
    }
  }
  for(var i=start; i<primes.length; i++){
    let isCutPrime = cutPrime(primes[i]);
    if(isCutPrime&&int(str(primes[i]).length)===digit){
      print(digit + ' digits: ' + primes[i]);
      break;
    }
    if(isCutPrime){
      cutPrimes.push(primes[i]);
    }
  }
}

function cutPrime(n){
if(str(n).length===1){
    if(n===1){
      return false;
    }else{
      return true;
    }
  }
  let cut = int(str(n).substring(1));
  let front = int(str(n).substring(1).charAt(0));
  if(front===0){
    return false;
  }
  if(isPrime(cut)){
    return cutPrime(cut);
  }else{
    return false;
  }
}

function findLowestCutPrimes(){
  let digit = 1;
  for(var i=0; i<cutPrimes.length; i++){
    if(int(str(cutPrimes[i]).length)===digit){
      lowestCutPrimes.push(cutPrimes[i]);
      digit++
    }
  }
}