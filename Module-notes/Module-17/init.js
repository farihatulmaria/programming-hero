// hover everything in js to know what the thing is

/* JS is the short form of Javascript

JavaScript was created by Brendan Eich at Netscape, and has since been updated to conform to ECMA-262 Edition 5 and later versions. 

JS is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.*/

console.log("Baba posa"); //is a function in JavaScript which is used to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user.;

/* Var */

// vary + able = varible >> var

var price = 50; /*is the keyword that tells JavaScript you're declaring a variable.
It is change able . We can store data in it.
*/
// integer / numbers
var age = 14;
/* Var nameing */
/*Variable names are pretty flexible as long as you follow a few rules:
 1. Start them with a letter, underscore _, or dollar sign $.
 Ex:
     var myName ;
     var my_name ;
     var my$Name ;

 2. After the first letter, you can use numbers, as well as letters        underscores, or dollar signs.
 Ex:
    var beer5050 ;
    var beer$5050 ;

 3. Don’t use any of JavaScript’s reserved keywords.
 Ex:
    var delete ;
    var false ;
*/

var my_Father = "Sajjad Hossain";
console.log(typeof my_Father);

// baba is assigned to  string

var a = 546; //number
console.log(typeof a);

var no;
console.log(typeof no);

var i = "Hello"; // string

// double or single qutoetion doesn't mater in js

var iAmOk = true; // boolean in a datatype that returns either of two values true or false

var i_am_not_ok = false;
console.log(typeof i_am_not_ok);
// Var name = "none" 'Var' is not the keyword . The word is 'var'

/* Mathematical operations */
var onionPrice = 688;
var eggPrice = 458;

var total = onionPrice + eggPrice;

console.log(onionPrice);
console.log(eggPrice);
console.log(onionPrice + eggPrice);
console.log(total);

var b = 50;
var c = 80;
console.log(b - c);
console.log(b * c);
console.log(b ** c);
console.log(b % c);
console.log(b / c);

var s = 874;

s += 654; // s = s + 654
console.log(s);

s -= 654; // s = s - 654
console.log(s);

s *= 654; // s = s * 654
console.log(s);

s /= 654; // s = s / 654
console.log(s);

age++; // age = age + 1
console.log(age);
age--; // age = age - 1
console.log(age);

var firstName = "Jennie";
var lastName = "Kim";
var fullName = firstName + " " + lastName;
console.log(fullName);

var feelingNow = "Happy";
var feelingThen = "sad";
var feeling = feelingNow + " " + feelingThen;
console.log(feeling);

var price1 = "45";
var price2 = "8";
var fullPrice = price1 + " " + price2;
console.log(fullPrice);

// float
var carPrice = 1000.999;
var int = "67987979.7987";
var intNum = parseInt(int);
var intFlo = parseFloat(int);
console.log(int);
console.log(intNum);
console.log(intFlo);

var today = new Date();
var num1 = 0.1;
var num2 = 0.2;
var totalNum = num1 + num2;
console.log(totalNum);
console.log(totalNum.toFixed(1));
console.log(totalNum.toFixed(2)); // it returns a string representation of numObj that does not use exponential notation and has exactly digits digits after the decimal place. The number is rounded if necessary, and the fractional part is padded with zeros if necessary so that it has the specified length.
