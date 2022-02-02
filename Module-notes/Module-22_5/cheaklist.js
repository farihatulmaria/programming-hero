/* 
প্রব্লেম সলভিং চেকলিস্ট/সেলফ এসেসমেন্ট : 

৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

এইবার ভালো করে খেয়াল করো। 

প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 

সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 

তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 



এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 

উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 



.

৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 



.

৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 

 */

// 1. writing varibles(number, string,boolean)

let name = "Maria";
let age = 14;
let isHandsome = true;

// 2. writing varibles(let, const)

isHandsome = false; // it can be changed

const personAge = [20, 50, 4, 0, 98, 7, 68, 45, 32, 41, 54]; //it can't be changed

// 3. using math operators ( + - * / %  )

let a = 6,
  b = 5;
let c = a + b;
console.log(c);
let d = a - b;
console.log(d);
let e = a * b;
console.log(e);
let f = a / b;
console.log(f);
let g = a % b;
console.log(g);

// 4. comparison ( < > <= >= != !== == === )

console.log(a < b);
console.log(a <= b);
console.log(a > b);
console.log(a >= b);
console.log(a != b);
console.log(a !== b);
console.log(a == b);
console.log(a === b);

// 5. fulfill both conditions . fulfill at least on one conditions
// 6. if - else
if (a < b && a === b) {
  console.log("Fulfilled both conditions");
} else if (a < b || a !== b) {
  console.log("Fulfilled one conditions");
} else {
  console.log("Both conditions are not fulfilled");
}

// using whlie loop for finding odd numbers from 7 to 19
let oddnum = 7;
while (oddnum < 19) {
  oddnum += 2;
  console.log(oddnum);
}
// 8. declare an array. number of element . update the 4th element . add or remove elements .

let person = ["Maria", 14];
console.log(person.length);
console.log(person.push("girl"));
console.log(person.pop());
person[1] = 15;
console.log(person.indexOf(15));
console.log(person);

// 9. for loop  to display every elements of an array
for (let i = 0; i < personAge.length; i++) {
  const element = personAge[i];
  console.log(element);
}

// 10. you have array of numbers . display only the number bigger thean 8

console.log("  ");
console.log("  ");

for (let i = 0; i < personAge.length; i++) {
  const element = personAge[i];
  if (i >= 8) {
    console.log(element);
  } else {
    console.log("none");
  }
}

// 11. write a function that takes three numbers and returns a multiplication of three numbers

function multiply(num1, num2, num3) {
  let total = num1 * num2 * num3;
  console.log(total);
}
multiply(50, 40, 20);

// 12. declare an object and change any propetrty of that object

const student = {
  name: "Jhonson",
  age: 20,
  id: 50357,
};
student.age = 15;
console.log(student);
