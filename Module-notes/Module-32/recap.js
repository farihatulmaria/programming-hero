// let and const

const hubby = "Omor Sani";
console.log(hubby);
let moblie = "iphone - 12";
console.log(moblie);

// template string

const myNotes = `
<h1>Note</h1>

<ul>
    <li>${moblie}</li>
    <li>${hubby}</li>
    <li>${moblie}</li>
    <li>${hubby}</li>
    <li>${moblie}</li>
</ul>
`;
console.log(myNotes);

const number = [57, 58, 5, 7, 26, 54, 21, 87, 24, 98, 54, 32];

// default parameter

function findMaxNum(array = "Sorry , I did found anything") {
  const max = Math.max(...array); // spead or(...)
  console.log(max);
}
findMaxNum();
findMaxNum(number);

// arrow function

const square = (number) => console.log(number * number);

square(5);

// copy array

const number2 = [...number];
console.log(number2);

number.push(4);
console.log(number);
