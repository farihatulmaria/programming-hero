var i = 0;

console.log(" ");
console.log("basic while loop");
console.log(" ");

while (i <= 10) {
  console.log(i);
  i++;
}

console.log(" ");
console.log("basic for loop");
console.log(" ");

for (var i = 0; i <= 10; i++) {
  console.log(i);
}

var num = [
  654, 6, 87, 987, 324, 65, 35, 3, 56, 4, 6, 87, 354, 54, 5, 16, 15, 24, 897,
]; //number array

console.log(" ");
console.log("for looping an number array");
console.log(" ");
for (var i = 0; i <= num.length; i++) {
  var element = num[i];
  console.log(element);
}

console.log(" ");
console.log("while looping an number array");
console.log(" ");
var i = 0;
while (i <= num.length) {
  var element = num[i];
  i++;
  console.log(element);
}

var items = [
  "book",
  "pc",
  "mac",
  "glass",
  "moblie",
  "person",
  "chair",
  "papar",
];

console.log(" ");
console.log("while looping an string array");
console.log(" ");
var i = 0;
while (i <= items.length) {
  var element = items[i];
  i++;
  console.log(element);
}

console.log(" ");
console.log("for looping an string array");
console.log(" ");

for (var i = 0; i <= items.length; i++) {
  var element = items[i];
  console.log(element);
}
