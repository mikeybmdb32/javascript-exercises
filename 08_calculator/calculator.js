const add = function() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i += 1) {
      sum = sum + arguments[i];
  }
  return sum;
	
};

const subtract = function() {
  let difference = arguments[0];
  for (let i = 1; i < arguments.length; i += 1) {
    difference = difference - arguments[i];
  }
  return difference;
};

const sum = function(numbersToSum) {
  let summation = 0;
  for (let i = 0; i < numbersToSum.length; i += 1) {
    summation = summation + numbersToSum[i];
  }
  return summation;
};

const multiply = function(numbersToMultiply) {
  let product = numbersToMultiply[0];
  for (let i = 1; i < numbersToMultiply.length; i += 1) {
    product = product*numbersToMultiply[i];
  }
  return product;
};


const power = function() {
  return arguments[0] ** arguments[1]
	
};

const factorial = function(n) {
  if (n === 0) return 1;
  else return n * factorial(n - 1);
};

///*
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
//*/

//console.log(multiply([2,4]));