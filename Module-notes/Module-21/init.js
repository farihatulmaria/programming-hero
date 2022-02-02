const myNum = -558;
const output = Math.abs(myNum); //Returns the absolute value of a number (the value without regard to whether it is positive or negative). It logges positive

const yourNum = 50.87654;
const yourOutput = Math.ceil(yourNum); //Returns the smallest integer greater than or equal to its numeric argument.

const hisNum = 8.87654;
const hisOutput = Math.floor(hisNum); //Returns the greatest integer less than or equal to its numeric argument.

const herNum = 8.87654;
const herOutput = Math.round(herNum); //Returns a supplied numeric expression rounded to the nearest integer.

const randomNum = Math.random(); // 0.0001  -- > 0.99999 Returns a pseudorandom number between 0 and 1. -- default
const randomNum2 = Math.random() * 6 + 1; // 0.0001  -- > 6.99999
const round = Math.floor(randomNum2); // 0  -- > 6

console.log(output);
console.log(yourOutput);
console.log(hisOutput);
console.log(herOutput);
console.log(randomNum);
console.log(randomNum2);
console.log(round);

/* for (let i = 0; i <= 20; i++) {
   const randomNum = Math.random() * 6 + 1;
   const round = Math.floor(randomNum);
   console.log(round);
 }*/

// destructing

let firstItem = 8;
let secondItem = 7;
[firstItem, secondItem] = [secondItem, firstItem];
console.log(firstItem, secondItem);

//finding min and max

const business = 450;
const minister = 600;
const army = 650;

/* 
if (business > minister && business > army) {
  console.log("Business person er taka boro");
} else if (minister > business && minister > army) {
  console.log("Minister person er taka boro");
} else {
  console.log("Army person er taka boro");
}
 */
var max = Math.max(business, minister, army); //Returns the larger of a set of supplied numeric expressions.
console.log("the biggest is " + max);
var min = Math.min(business, minister, army); //Returns the smaller of a set of supplied numeric expressions.
console.log("the biggest is " + min);

//finding max number
// 1.
function findLargest(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(num1 + " is largest");
  } else if (num2 > num1 && num2 > num3) {
    console.log(num2 + " is largest");
  } else {
    console.log(num3 + " is largest");
  }
}
findLargest(1000, 500, 2000);
// 2.
function findLargest2(num1, num2, num3) {
  let max = Math.max(num1, num2, num3);
  console.log(max + " is the largest");
}
findLargest2(1000, 500, 200);

//finding min number

function findSmallest(num1, num2, num3) {
  if (num1 < num2 && num1 < num3) {
    console.log(num1 + " is smallest");
  } else if (num2 < num1 && num2 < num3) {
    console.log(num2 + " is smallest");
  } else {
    console.log(num3 + " is smallest");
  }
}
findSmallest(1000, 500, 2000);

function findSmallest2(num1, num2, num3) {
  let min = Math.min(num1, num2, num3);
  console.log(min + " is the smallest");
}
findSmallest2(100, 500, 204);

// summing all the numbers in an array

const num = [65, 57, 257, 27, 21, 658, 87, 24, 35, 647];
for (let i = 0; i < num.length; i++) {
  const element = num[i];
  var sum = 0;
  sum = sum + element;
}
console.log(sum);
// summing all the numbers in an array with a function

function arrayTotal(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    let element = num[i];
    sum = sum + element;
  }
  return sum;
}
var total = arrayTotal([1, 2, 3, 4]);
console.log(total);

//finding the largest item in an array
function largestItemInArray(num) {
  let max = Math.max();
  for (let i = 0; i < num.length; i++) {
    let element = num[i];
    if (element > max) {
      max = element;
    }
  }
  console.log(max);
}
largestItemInArray([55, 848, 98]);
largestItemInArray([-55, -848, -98]);

// function fiboFunction(num) {
//   if (typeof num !== "number") {
//     console.log("Please give a number in the parameter");
//   } else if (num < 2) {
//     console.log("Please give a positive number greater than 2");
//   }

let fibo = num;

for (let i = 2; i <= 20; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}

console.log(fibo);
// }
// fiboFunction(5);
