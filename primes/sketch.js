let numbers = 1000000;
let primes = [2];
let cutPrimes = [];
let lowestCutPrimes = [];

function setup(){
  findPrimes();
  print(primes);

  findCutPrimes();
  print(cutPrimes);

  findLowestCutPrimes();
  print(lowestCutPrimes);
}

function findPrimes(){
  for(var i=3; i<numbers; i+=2){
    let prime = isPrime(i);
    if(prime){
      primes.push(i);
    }
  }
}

function findCutPrimes(){
  for(var i=0; i<primes.length; i++){
    let isCutPrime = cutPrime(primes[i]);
    if(isCutPrime){
      cutPrimes.push(primes[i]);
    }
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

function isPrime(i){
  let hold = true;
  for(var j=3; j<i; j+=2){
    if(i%j===0){
      hold = false;
    }
  }
  if(hold){
    return true;
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