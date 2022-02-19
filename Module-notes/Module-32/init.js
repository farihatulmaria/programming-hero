const fish = {
  id: 68,
  fishname: "King Hilsha",
  price: "5000tk",
  phone: 0175493657,
  address: "Barishali",
  color: "sliver",
};

/*
 Destructuring Object

 The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

*/

const { phone, price, address, id, fishname } = fish;

console.log(phone);
console.log(price);
console.log(id);
console.log(fishname);

const company = {
  name: "GP",
  CEO: {
    id: 1,
    name: "Manuel J. Webb",
  },
  web: {
    work: "website development",
    framework: "js",
  },
  employee: 20,
};

const { work, framework } = company.web;
console.log(work);
console.log(framework);
// console.log(company?.e?.t);

// Destructuring Array

const [p, q] = [87, 35, 8, 24, 39, 85];
console.log(p);
console.log(q);

const { color } = { sky: "blue", soil: "brown", color: "black" };

console.log(color);

const num = [4, 6, 8, 10, 546, 4, 465];
const squareNum = (x) => x * x;

const output = num.map(squareNum);
/* map : -
Calls a defined callback function on each element of an array, and returns an array that contains the results. */
console.log(output);

const firends = ["tom", "tom Hanks", "cooper", "jhon", "jhonson"];
const flength = firends.map((firend) => firend.length);
console.log(flength);

const products = [
  { name: "water-bottle", price: 50, color: "black" },
  { name: "iphone", price: 50000, color: "black" },
  { name: "pen", price: 5, color: "red" },
  { name: "watch", price: 18000, color: "white" },
  { name: "mac", price: 180000, color: "black" },
];
const expensive = products.filter((product) => product.price > 500);
console.log(expensive);

const blacks = products.filter((product) => product.color == "black");
console.log(blacks);

const whites = products.find((product) => product.color == "white");
console.log(whites);

const productsName = products.map((product) => product.name);
console.log(productsName);

const productsPrice = products.map((product) => product.price);
console.log(productsPrice);

products.map((product) => console.log(product.color));

/* 
forEach

Performs the specified action for each element in an array. */
products.forEach((product) => console.log(product.name));

const bigNumber = num.filter((number) => number <= 10);
console.log(bigNumber);

class Support {
  name;
  roll = "support web dev";
  work = "web dev";
  startSession() {
    console.log(this.name, " hi");
  }
  address;
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}

const aamir = new Support("Aamir", "BD");
console.log(aamir);
aamir.startSession();
