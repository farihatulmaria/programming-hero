// inch >> feet

function inchToFeet(inche) {
  let feet = inche * 12;
  console.log(feet);
}
inchToFeet(20);

// feet >> inch

function feetToInche(feet) {
  let inche = feet / 12;
  console.log(inche);
}
feetToInche(20);

// miles >> kilometer
function milesToKm(miles) {
  let kilometer = miles * 1.60934;
  console.log(kilometer);
}
milesToKm(20);
function kmToMiles(km) {
  let miles = km / 1.60934;
  console.log(miles);
}
kmToMiles(20);

// even or odd

function evenOrOdd(num) {
  let remainer = num % 2;
  if (remainer == 0) {
    console.log("It's EVEN!");
  } else {
    console.log("It's ODD!");
  }
}
evenOrOdd(5);

// finding leap year

function leapYear(year) {
  let remainer = year % 4;
  if (remainer === 0) {
    console.log(year + " is a Leap Year. ");
  } else {
    console.log(year + " isn't a Leap Year. ");
  }
}
leapYear(2040);

// factorial

function forFactorial(num) {
  let factor = 1;
  for (let i = 1; i <= num; i++) {
    factor *= i;
  }
  console.log(factor);
}
forFactorial(5);

function whileFactorial(num) {
  let factor = 1;
  let i = 1;
  while (i <= num) {
    factor *= i;
    i++;
  }
  console.log(factor);
}
whileFactorial(7);
