function sumFor(numbers){
  let  i = 0;
  let sum = 0;
  for(i = 0; i < numbers.length(), i++){
    sum += numbers[i];
  }
  return sum;
}


function sumWhile(numbers){
  let sum = 0;
  let done  false;
  let i = 0;

  while(done == false){
    sum += numbers[i];
    i++;
    if(i == numbers.length){
      done = true;
    }
  }
  return sum;
}


function sumRecursion(numbers, n){
  if(n==0){
    return numbers[n];
  }else {
    return numbers[n] + sumRecursion(numbers, n-1);
  }

}

function sumTheSimpleWay(numbers){
  let sum = _.reduce(numbers, function(num, key){num + key,0})
  return sum;
}

let test = [1,2,3,4,5];
sumFor(test);
sumWhile(test);
sumRecursion(test, test.length-1);
sumTheSimpleWay(test);