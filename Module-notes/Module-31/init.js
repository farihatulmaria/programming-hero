function add(num1 = 0, num2 = 0) {
  const total = num1 + num2;
  console.log(total);
}
add(15, 17);

const temlateString = `this is what a ' template String ' looks like`;
console.log(temlateString);

const friendNumber = 5;
const oldHeader = `<h3 class = "friend-name">Friend No. ${friendNumber}</h3>`;
console.log(oldHeader);

const suming3 = (num1, num2, num3) => {
  const result = num1 + num2 + num3;
  console.log(result);
};
suming3(567, 57, 57);

const number = [657, 987, 54, 24, 65, 87, 24, 75];
console.log(number);
console.log(...number);
const maxNumber1 = Math.max(number);
const maxNumber2 = Math.max(...number);

const number2 = number;
const number3 = [...number];
number.push(55);
console.log(number2);
console.log(number3);

const y = (x) => x * x;
const x = y(5);
console.log(x);
