
function setup() {
  /*
  for(var n=100; n<=10000; n++){
    let k = 16*n;
    let b = 7*k+n;
    let ls = (3*b+k)/b-PI;
    let rs = (3*(b+1)+k)/(b+1)-PI;
    if(abs(ls)>abs(rs)){
    print(abs(ls));
    print(abs(rs));  
    print(n);
    print(ls+PI);
    print(rs+PI);
    break;
    }
  }
  print("done");
  */

  //b
  //1,6,7,7,106,
  //113,113,27678,32763,33102
  //165849,265381,1360120,
  //6535219,23785549,52746197

  //k
  //0,1,1,11,15
  //16,16,3919,4639,4687
  //23483,37576,192583
  //925339,3367859,7468474

  /*
  let total = 3;
  let k = 0;
  let n = 1000000;
  let digits = 15
  for(b=4; b<=8+7*16*n+n; b++){
    let ls = abs((3*b+k)/b-PI);
    let rs = abs((3*b+k+1)/b-PI);
    if(Math.floor(Math.pow(10,digits)*(3*(b)+k)/(b))===Math.floor(Math.pow(10,digits)*PI)){
      print(PI);
      print((3*(b)+k)/(b));
      print((3*(b)+k) + "/" + (b))
      print(k);
      break;
    }
    if(ls<rs){
      total++;
    }else{
      //print("k = " + k);
      //print(total);
      if(total === 7){
        //print("k = " + k);
        //print(total);
        //print((3*(b-4)+k)/(b-4));
      }else{
        //print((3*(b-3)+k)/(b-3));
      }

      k++;
      total = 0;
    }
  }
  if(b===8+7*16*n+n){
    print("Not Found")
  }
  */

  let total = 3;
  let k = 1;
  let n = 1000000;
  let digits = 11
  for(b=7; b<=8+7*16*n+n; b+=7){
    if(Math.floor(Math.pow(10,digits)*(3*(b)+k)/(b))===Math.floor(Math.pow(10,digits)*PI)){
      print(PI);
      print((3*(b)+k)/(b));
      print((3*(b)+k) + "/" + (b))
      print(k);
      break;
    }
    k++
    if((k+8)%16===0){
      b++
    }
  }
  if(b>=8+7*16*n+n){
    print("Not Found")
  }
}