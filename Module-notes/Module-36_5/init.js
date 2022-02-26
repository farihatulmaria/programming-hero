const person = {
  name: "John",
  age: 20,
  bestFriend: {
    name: "Johnson",
    age: 21,
  },
  job: ["web developer", "ui designer", "ux designer"],
};

const templateString = `Hello I am ${person.name} and I am ${person.age} years old. I am  also a${person.job[0]}`;

const zeroParameterFunction = () => console.log(89);
const singleParameterFunction = (num1) => {
  const result = num1 / 7;
  console.log(result);
};

const doubleParameterFunction = (num1, num2) => {
  const sum = num1 + num2;
  const result = sum / 2;
  console.log(result);
};

const multiLineFunction = (num1, num2) => {
  const firstParameter = num1 + 7;
  const secondParameter = num2 + 7;
  const total = firstParameter + secondParameter;
  console.log(total);
};

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayMaping = number.map((x) => x / 7);
console.log(arrayMaping);
