var favourtieBook = "js learning";

var num = [64, 84, 68, 35, "65", 49, "31", 7, 654, "69", 87, "24", 35];
var indexNum = num.indexOf("65");
console.log(indexNum);
num[1] = 54;
num.push(75);
num.push("75");
num.push(574);
num.pop();

function con() {
  if (num[1] == 84) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
con();

var i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

console.log(" ");
console.log(" ");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
