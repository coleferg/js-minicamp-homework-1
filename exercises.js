//Do not change any of the function names

function multiplyByTen(num) {
  return num * 10;
}

function subtractFive(num) {
  return num - 5;
}

function areSameLength(str1, str2) {
  if (str1.length === str2.length){
  return true;
  }
  else {
  return false;
  }
}

function areEqual(x, y) {
    if (x == y) {
    return true;
    }
    else {
    return false;
    }
}

function lessThanNinety(num) {
  // return true if num is less than ninety
  // otherwise return false
  // code here
    if (num < 90) {
    return true;
    }
    else {
    return false;
    }
}

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  // code here
  if (num > 50){
  return true;
  }
  else {
  return false;
  }
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  // subtract y from x and return the value
  // code here
  return x - y;
}

function divide(x, y) {
  return x/y;
}

function multiply(x, y) {
  return x*y;
}

function getRemainder(x, y) {
  return x % y;
}

function isEven(num) {
  // return true if num is even
  // otherwise return false
  // code here
  if (num % 2 === 0) {
    return true;
    }
    else {
    return false;
    }
}

function isOdd(num) {
  // return true if num is false
  // otherwise return false
  // code here
  if (num % 2 === 0) {
    return false;
    }
    else {
    return true;
    }
}

function square(num) {
  return num*num;
}

function cube(num) {
  return num*num*num;
}

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  // code here
  
  return Math.pow(num, exponent);
}

function roundNumber(num) {
  return Math.round(num);
}

function roundUp(num) {
  return Math.ceil(num);
}

function addExclamationPoint(str) {
  return str + '!';
}

function combineNames(firstName, lastName) {
  return firstName + ' ' + lastName;
}

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
  return 'Hello ' + name + '!';
}

// If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  // code here
  return length * width;
}

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  // code here
  return (base * height) / 2;
}

function getCircleArea(radius) {
  // return the rounded area of the circle given the radius
  // code here
  return Math.round(3.14159 * radius * radius);
}

function getRectangularPrismVolume(length, width, height) {
  // return the volume of the 3D rectangular prism given the length, width, and height
  // code here
  return length * width * height;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
