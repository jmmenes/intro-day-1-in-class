const returnEmptyString = function () {
  return "";
};

const returnZeroNumber = function () {
  return 0;
};

const returnEmptyArray = function () {
  return [];
};

const returnEmptyObject = function () {
  return {};
};

const returnAbcString = function (value) {
  return value;
};

const returnSumOfTen = function (arg1, arg2) {
  return arg1 + arg2;
};

const subtraction = function (arg1, arg2) {
  return arg1 - arg2;
};

const multiplication = function (arg1, arg2) {
  return arg1 * arg2;
};

const division = function (arg1, arg2) {
  return arg1 / arg2;
};

const returnArray = function (arg1) {
  return arg1;
};

const returnFirstIndex = function (arg1) {
  return arg1[0];
};

const returnSecondIndex = function (arg1) {
  return arg1[1];
};

const returnArrayLength = function (arg1) {
  return arg1.length;
};

const arraySum = function (arg1) {
  // set a variable called sum to zero
  let sum = 0;
  // loop over the index of given array
  for (let i of arg1) {
    // sum plus equals the index
    sum += i;
  }
  // return the sum var
  return sum;
};

const arraySubtraction = function (arg1) {
  let sum = 0;
  for (let i of arg1) {
    sum -= i;
  }
  return sum;
};

const multiplicationArray = function (arg1) {
  // set product var to 1
  let product = 1;
  // iterate over the numbers of given array
  for (const num of arg1) {
    // product times equals num
    product *= num;
  }
  // return the result
  return product;
};

const divisionArray = function (arg1) {};

const oddArray = function (arg1) {};

const evenArray = function (arg1) {};

const returnFruits = function (arg1) {};
