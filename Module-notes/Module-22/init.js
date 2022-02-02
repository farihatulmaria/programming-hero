// removing a duplicate item in an array

const name = [
  "Abul",
  "Babul",
  "Jhonson",
  "Jhon",
  "Jamal",
  "Abul",
  "Jhon",
  "Kamal",
  "Jamal",
];

function removeDuplicate(names) {
  const unique = [];
  for (const element of names) {
    if (unique.indexOf(element) === -1) {
      unique.push(element);
    }
  }
}
removeDuplicate(name);

// Explore string nature and reverse a string

let myString = "Hello, how are you ?"; // length of a string
console.log(myString.length);
console.log(myString[0]); // the first letter of a string
// you can't changed a string

function add(num1, num2) {
  const sum = num1 + num2;
  console.log(sum);
}
add(354, 637);
add(354 + 637);

function mutilpy(num1, num2, num3, num4) {
  let total = num1 * num2 * num3 * num4;
  console.log(total);
}

for (let i = 0; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("foo");
  } else if (i % 3 === 0) {
    console.log("bar");
  } else if (i % 5 === 0) {
    console.log("foobar");
  } else {
    console.log(i);
  }
}

const phone = [
  {
    name: "Samsung s5",
    price: 50000,
    carmera: 10,
  },
  {
    name: "Samsung s7",
    price: 5000,
    carmera: 8,
  },
  {
    name: "Samsung s0",
    price: 500,
    carmera: 6,
  },
];

let cheapest = phone[0];
for (const phones of phone) {
  if (phones.price < cheapest.price) {
    cheapest = phones;
  }
}
console.log(cheapest);
const products = [
  {
    name: "Samsung s5",
    price: 50000,
  },
  {
    name: "watch",
    price: 5000,
  },
  {
    name: "laptop",
    price: 50000,
  },
];

let totalPrice = 0;
for (const product of products) {
  totalPrice += product.price;
}
console.log(totalPrice);

const carts = [
  {
    name: "Samsung s5",
    price: 50000,
    quantity: 5,
  },
  {
    name: "watch",
    price: 5000,
    quantity: 3,
  },
  {
    name: "laptop",
    price: 50000,
    quantity: 3,
  },
];
let cartPrice = 0;
for (const product of carts) {
  const productTotal = product.price * product.quantity;
  cartPrice += productTotal;
}
console.log(cartPrice);

function animalCount(miles) {
  const animalInFirst10 = 10;
  const animalInsecond10 = 50;
  if (miles <= 10) {
    const animal = miles * animalInFirst10;
    return animal;
  } else if (miles <= 20) {
    const first10 = 10 * animalInFirst10;
    const restMlies = animalInsecond10 - 10;
    const secondAnimals = restMlies * animalInsecond10;
    const totalAnimals = first10 + secondAnimals;
    return totalAnimals;
  } else {
    console.log("I can't do this anymore");
  }
}
const animals = animalCount(50);
console.log(animals);
