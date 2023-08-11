module.exports = function (num) {
  let firstValue = 1;
  let secondValue = 1;
  let store = [1];
  let sum; 
  let result = 0;

  if(num <= 0){
    return 0;
  }
  while(secondValue <= 0){
    sum = firstValue + secondValue;
    firstValue = secondValue;
    secondValue = sum;
    if(firstValue % 2 !== 0){
      store.push(firstValue);
    }
  }
  for( n of store){
    result = result + n;
  }
  return result; 

  };

console.log(module.exports(10));
