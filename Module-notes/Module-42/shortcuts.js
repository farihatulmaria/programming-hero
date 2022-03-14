// truthy and falsy values

// truthy :- string , numbers , true, {} , []
// falsy:- "", 0 , false , null , undefined

let myVar = 5;
// checking the truthy value in shortcut
if (myVar) {
  console.log(myVar + 5);
} else {
  myVar = 0;
}

let myString = "";
// checking the falsy value in shortcut
if (!myString) {
  console.log("falsy");
} else {
  console.log("truthy");
}

// trnary operator
const money = 800;
let food = money > 100 ? "biryani" : "cha";
console.log(food);

// shortcut to converting a number into a string

const num1 = 54;
const num1Str = num1 + "";
console.log(num1);
console.log(num1Str);

// shortcut to converting a string into a number

const stredNum = "8520";
const num = +stredNum;
console.log(stredNum);
console.log(num);

// shortcut conditioning in some functions

const isActive = false;
const showUser = () => {
  console.log("display User");
};
const hideUser = () => {
  console.log("hide User");
};

isActive ? showUser() : hideUser();
// use && if the left side is true then right side will executed
isActive && showUser();

// use || if the left side is false then right side will executed
isActive || hideUser();

// toggling between true and false values / toggle booleans

let isIdOk = true;
isIdOk = !isIdOk;
console.log(isIdOk);
