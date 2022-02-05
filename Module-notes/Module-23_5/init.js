// limited loop
/* for (let i = 0; i <= 5; i++) {
  console.log(i);
}
 */
// forever loop
/* function consoleNumber(i) {
  if (i > 5) {
    return " I can't do this anymore! ";
  }
  console.log(i);
  consoleNumber(i + 1);
}
consoleNumber(1); */

// summing numbers with for loop

let sum = 0;
for (let i = 5; i >= 1; i--) {
  sum += i;
}
console.log(sum);

function add(i) {
  console.log(i);
  if (i == 1) {
    return 1;
  }
  return i + add(--i);
}
console.log(add(5));

let factorial = 1;
for (let i = 4; i >= 1; i--) {
  factorial = factorial * i;
}
console.log(factorial);

function factorialFunction(i) {
  if (i == 1) {
    return 1;
  }
  return i * factorialFunction(--i);
}
console.log(factorialFunction(4));

//seaching a thing
const products = [
  { name: "computer-1", price: 80000 },
  { name: "Mac21", price: 700000 },
  { name: "macbook", price: 50000 },
  { name: "iphone", price: 170000 },
  { name: "watch", price: 4000 },
  { name: "applewatch", price: 200000 },
];
function findProduct(product, seachText) {
  const result = [];

  for (const product of products) {
    if (product.name.includes(seachText)) {
      result.push(product);
    }
  }
  return result;
}
console.log(findProduct(products, "phone"));

// break and continue for selecting some products
for (const product of products) {
  if (product.price < 50000) {
    // break;
    continue;
  }
  console.log(product);
}
