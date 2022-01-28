//function
function startFan() {
  //decaled the funtion startfan
  console.log("walk towards the switch");
  console.log("press the switch");
}
startFan(); //called the funtion startFan

console.log("");

//function with parameter

function bringSomeThing(money) {
  console.log("bring some thing for me with taka " + money);
  var singaraPrice = 10;
  var singaraQuantity = money / 10;
  return singaraQuantity + " singara nou";
}
var some_thing = bringSomeThing(300);
console.log(some_thing);

//function with a lot of parameter

function addNum(num1, num2) {
  var totalAddednum = num1 + num2;
  return totalAddednum;
}
var added = addNum(1, 99999);
console.log(added);

function multiNum(num1, num2) {
  var totalMultiNum = num1 * num2;
  return totalMultiNum;
}

var multipy = multiNum(45, 78);
console.log(multipy);

function biyog(num1, num2) {
  var biyog = num1 + num2;
  return biyog;
}
var biyogedNum = biyog(1, 99999);
console.log(biyogedNum);

function divetionanum(num1, num2) {
  var divetionNum = num1 * num2;
  return divetionNum;
}

var divetionedNum = divetionanum(45, 78);
console.log(divetionedNum);

// object
var student = {
  id: 4725,
  name: "Abir",
  isA: false,
  hight: 5.0,
  age: 14,
};
console.log(student);
var sutdentName = student.name + ", I miss you" + ". but now hate you ";
student.isA = true;
console.log(sutdentName);

student["hight"] = 5.8; // changeing a property vlaue of an object

console.log(student);

var moblie = {
  color: "black",
  price: "free",
  screenSize: 5.4,
};

// switch case vs if else   - the both is ok
console.log(" ");
console.log(" if else statement");
console.log(" ");
var color = "";

if (color == "blue") {
  console.log("it's blue");
} else if (color == "red") {
  console.log("it's red");
} else if (color == "pink") {
  console.log("it's pink");
} else if (color == "green") {
  console.log("it's green");
} else if (color == "white") {
  console.log("it's white");
} else if (color == "black") {
  console.log("it's black");
} else {
  console.log("color error");
}

console.log(" ");
console.log(" switch statement");
console.log(" ");

switch (color) {
  case "blue":
    console.log("it's blue");
    break;
  case "red":
    console.log("it's red");
    break;
  case "pink":
    console.log("it's pink");
    break;
  case "green":
    console.log("it's green");
    break;
  case "white":
    console.log("it's white");
    break;
  case "black":
    console.log("it's black");
    break;
  default:
    console.log("no error ");
}

// beaking and continueing a loop

console.log(" ");
console.log(" while loop");
console.log(" ");
var i = 0;
while (i <= 10) {
  console.log(i);
  if (i == 5) {
    break;
  }
  i++;
}
console.log(" ");
console.log(" for loop");
console.log(" ");
for (var i = 0; i <= 10; i++) {
  console.log(i);
  if (i == 7) {
    break;
  }
}
console.log(" ");
var num = [62, 4, 54, 87, 32, 50, 90, 65, 84, 35, 94];
for (var i = 0; i < num.length; i++) {
  var number = num[i];
  console.log(number);
  if (number > 90) {
    break;
  }
}
