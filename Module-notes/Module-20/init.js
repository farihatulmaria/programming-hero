// inch >> feet
function inchToFeet(inche) {
  let inches = inche;
  let feet = inches / 12;
  console.log(feet);
}

inchToFeet(132);

// miles >> kilometer
function mileToKm(mile) {
  let miles = mile;
  let km = mile * 1.60934;
  console.log(km);
}

mileToKm(20);

//even or odd
function evenOrOdd(num) {
  let number = num;
  let remainer = num % 2;
  if (remainer == 0) {
    console.log("even");
  } else if (remainer != 0) {
    console.log("odd");
  }
}
evenOrOdd(1892);

// finding leap year
function leapYear(year) {
  let years = year;
  let remainer = year % 4;
  if (remainer == 0) {
    console.log("Yes , " + year + " is a Leap Year");
  } else {
    console.log("no , " + year + " isn't a Leap Year");
  }
}
leapYear(2040);

// factorial
for (var i = 1; i <= 5; i++) {
  console.log(i);
  let factorial = 1;
  factorial = factorial * i;
}
console.log(" ");
console.log("factorial funtion");
console.log(" ");

function forFactorial(num) {
  let factor = 1;
  for (let i = 1; i <= num; i++) {
    factor = factor * i;
  }
  console.log(factor);
}
forFactorial(7);
function whlieFactorial(num) {
  let whliefactor = 1;
  let i = 1;
  while (i <= num) {
    whliefactor = whliefactor * i;
    i++;
  }
  console.log(whliefactor);
}
whlieFactorial(10);

function negWhlieFactorial(num) {
  let negfactor = 1;
  let i = num;
  while (i >= 1) {
    negfactor = negfactor * i;
    i--;
  }
  console.log(negfactor);
}
negWhlieFactorial(8);
function negForFactorial(num) {
  let negfactor = 1;
  for (let i = num; i >= 1; i--) {
    negfactor = negfactor * i;
  }
  console.log(negfactor);
}
negForFactorial(10);
