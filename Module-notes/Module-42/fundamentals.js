/* JS fundamentals that you need to know before you go to learn React */

// 1. decaling a variable with let and const

const myName = "Farihatul Maria"; // use const when you don't need to change the variable's value

let age = 15; // use let when you need to change the variable's value

// 2. condition

/* 6  basic condition symbols :- > , >= , < , <= , === , !==*/
/* multiple condition : AND && , OR || , NOT !*/

if (5 < 6) {
  console.log("ok");
} else if (age < 62 && myName.indexOf("a")) {
  console.log("You must be young");
} else {
  console.log("no");
}

// 3. array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// 3.1 array element's index
console.log(numbers.indexOf(15));

// 3.2 pushing an element into the array
numbers.push(100);
console.log(numbers);

// 3.3 knowing the length of the array
console.log(numbers.length);
// 6. object

const student = { id: 404, age: 20, hobby: ["reading", "writing"] };

// 4. for loop

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
console.log(" ");
console.log(" ");
// for of an array
for (const person of student) {
  console.log(person);
}
console.log(" ");
console.log(" ");
// for in on objects
for (const product in products) {
  if (Object.hasOwnProperty.call(products, product)) {
    const element = products[product];
  }
}
console.log(" ");
console.log(" ");
// 5. function

function multiple(num1, num2) {
  const result = num1 * num2;
  return result;
}
const output = multiple(5, 5);
console.log(output);

/* 3. ways to access property by name*/

console.log(student.age); // by property name
console.log(student["id"]); // by property name in a string
const myVariable = "hobby";
console.log(student[myVariable]); // by a variable

/* ES6 */

// 1. let and const
// in the top

// 2. template string

const weather = "hot";
const temperature = `"It is ${weather}" said student ${student.id}`;
console.log(temperature);

// 3. arrow functions

const add65 = (num) => num + 65;
console.log(add65(20));
// multiple lined arraow functions
const adding = (num1, num2) => {
  const add = num1 + num2;
  return add;
};

const addedNum = adding(5, 100);
console.log(addedNum);
// 4. spreading an object with three dots

console.log(numbers);
console.log(...numbers);

/* Array methods */
const products = [
  { name: "laptop", price: 320000, color: "black" },
  { name: "Mac", price: 4400000, color: "blue" },
  { name: "watch", price: 3500, color: "sliver" },
  { name: "iphone", price: 32000, color: "gold" },
  { name: "ipad", price: 320000, color: "white" },
  { name: "pen", price: 2, color: "black" },
];

// map

const productPrices = products.map((product) => product.price);

/* Calls a defined callback function on each element of an array, and returns an array that contains the results. */
console.log(productPrices);

// forEach

products.forEach((product) => {
  console.log(product.name);
});
/* Performs the specified action for each element in an array. */

// filter

const cheap = products.filter((product) => product.price <= 5000);
console.log(cheap);
/* Returns the elements of an array that meet the condition specified in a callback function. */

// find
const special = products.find((p) => p.name.includes("n"));
/* Returns the value of the first element in the array where predicate is true, and undefined otherwise. */
console.log(special);

// Array destructuriong

const [a, b] = [42, 50];
console.log(a, b);

const [x, y] = numbers;
console.log(x, y);

function boxify(x, y) {
  const num = [x, y];
  console.log(num);
}
boxify(50, 10);

// object destructuring

const { name, Aluage } = { name: "alu", Aluage: 14 };
console.log(name, Aluage);

const { id, hobby } = student;
console.log(id, hobby);

// JSON

const studentJson = JSON.stringify(student);
console.log(student);
console.log(studentJson);

const studentObjected = JSON.parse(studentJson);
console.log(studentObjected);

// fetching

// basic fetch
/* fetch("https://jsonplaceholder.typicode.com/users");
.then(response => response.json())
.then(data => console.log(data))
 */

const studentKeys = Object.keys(student);
console.log(studentKeys);
const studentValues = Object.values(student);
console.log(studentValues);

// copying products array and then adding a new product
const newProduct = { name: "webcam", price: 1000, brand: "lal" };
const newProductArray = [...products, newProduct];
console.log(newProductArray);

// copying product array without the item phone
const noPhonedProduct = products.filter((p) => p !== "phone");
console.log(noPhonedProduct);
