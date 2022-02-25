/*
 DATA TYPES IN JS

1.number
 let a = 33

2.string
 let a = "35"

3.boolean
 let a = true

4. undefined
 let a = undefined

5.null
 let a = null

6. object
let a = {54,87,24,9,2,4}

7.symbols
 1. primitive
   1.1 number
   1.2 string
   1.3 boolean
   1.4 undefined
   1.5 null
 
 2.non-primitive
   1.1 object
   1.2 array
*/

// primitive

let a = 33;
const b = a;
console.log(a, b);
a = 34;
console.log(a, b);

// non-primitive

let x = { name: "sonthing" };
let y = x;
console.log(x, y);
// x.name = "somthing";
y.name = "somthing";
console.log(x, y);

// Truthy values and Falsy values

const c = {};
if (c) {
  /* Truthy values:- 

    numbers even negative numbers 
    string 
    object even empty
    array even empty
    boolean
*/

  console.log("truthy");
} else {
  /* Falsy values:- 

    undefined
    null
    number 0
    empty string
    NaN
*/
  console.log("Falsy");
}

// undefined VS null

/* undefinded:-
1. a variable that is not assigned
2. function that didn't retured anything
3. having reture but didn't retured anything
4. not giving every parameter in a function
5. you called a object property that wasn't in the object
6. if you access the array element out of range
7. if you access the deleted array element of that array
8. set the value to undefined
*/

function second(x, y) {
  const sum = x + y;
}
console.log(second(52, 8));

function add(e, f) {
  const sum = e + f;
  return;
}

function double(num1, num2) {
  const x = num1 * num1;
  const y = num2 * num2;
  console.log(x, y);
}
double(123);

const someone = { name: "someone", address: "Bangladeh" };
console.log(someone.phone);

const numbers = [54, 87, 5, 6];
console.log(numbers[4]);

delete numbers[2]; // don't do this use slice()
console.log(numbers);

const something = undefined;
console.log(something);

/*null:-
1. set the value to undefined
*/
const element = null;
console.log(element);

// double equal (==) vs triple equal (===)

let firstNum = 123;
let secondNum = "123";

if (firstNum == secondNum) {
  // don't do this use === '
  // depented on the value of the varible
  console.log("true");
} else {
  console.log("false");
}

let firstNum2 = 4;
let secondNum2 = "4";

if (firstNum2 === secondNum2) {
  // depented on the typeof the varible and the value of the varible
  console.log("true");
} else {
  console.log("false");
}
const someNumber = 57;

const adding = (num1, num2) => {
  const result = num1 + num2;
  console.log(result);
  if (result > 0) {
    const mood = "happy";
    console.log(mood);
  }
  console.log(num1);
  console.log(num2);
  console.log(someNumber);
  // console.log(mood);//erro
};
adding(46, 456);
// console.log(num1); //error
console.log(someNumber);
//console.log(mood);//error

function stopWatch() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
let clock1 = stopWatch();
console.log(clock1());
console.log(clock1());

function welcomeMessage(name) {
  return name + " " + greetingMessage();
}

function greetingMessage() {
  return "Good Morning";
}

const greeting = welcomeMessage("jhon");
console.log(greeting);
