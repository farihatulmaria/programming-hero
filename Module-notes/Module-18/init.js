/* Array is a single variable that is used to store different elements. It is often used when we want to store list of elements and access them by a single variable.*/

var friendsAge = [11, 15, 16, 13, 17, 12];
//  arrayname =  [0   1   2   3   4   5] ;
var friuts = ["Banana", "Kiwi", "Mango", "berry "];
//  arrayname = [0       1       2        3   ] ;
friuts[3] = "Blueberry";
console.log(friuts);
var vowels = ["a", "e", "i", "o", "u"];
//arrayname = [ 0   1    2    3     4] ;
var num = [648, 57, 87, 67, 58, 54, 78];
var indexNum = num.indexOf(67);
var firstIndexfriuts = friuts[3];

var indexNone = num.indexOf(40);
var indexVowels = vowels.indexOf("a");
var vowelsCount = vowels.length;

console.log(friendsAge);
console.log(friendsAge.length); // the total number of items
console.log(friuts);
console.log(friuts.length);
console.log(vowels);
console.log(vowelsCount);
console.log(indexVowels);
console.log(indexNum);
console.log(indexNone);
console.log(firstIndexfriuts);
