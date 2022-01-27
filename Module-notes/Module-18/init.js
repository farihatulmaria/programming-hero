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
console.log(friuts.length);
console.log(vowels);
console.log(vowelsCount);
console.log(indexVowels);
console.log(indexNum);
console.log(indexNone);
console.log(firstIndexfriuts);

var hateVegetable = ["tomato", "celery", "pepper", "onion", "corn"];

hateVegetable.push("carrot"); // adds items in the array from the right side and makes a new length of the array
hateVegetable.push("eggplant");
console.log(hateVegetable);

hateVegetable.pop(); // Removes a item in the array from th right side and gives the array a new length again
var lastVegetabls = hateVegetable.pop();
console.log(hateVegetable);
console.log(lastVegetabls);

// greater than
console.log(5 > 6);
// less than
console.log(5 < 6);
// greater or equal than
console.log(5 >= 6);
// less or equal than
console.log(5 <= 6);
// equel
console.log(5 == 6);
// not equel
console.log(5 != 6);
// equel from everytype
console.log("5" === "6");

console.log(5 != 6 && 5 < 6); // The logical AND (&&) operator (logical conjunction) for a set of Boolean operands will be true if and only if all the operands are true. Otherwise it will be false.

console.log(5 != 6 || 5 > 6); // The logical OR (||) operator (logical conjunction) for a set of Boolean operands will be true if and only if only the operands are true. Otherwise it will be false.

function food() {
  var isFoodReady = false;
  if (isFoodReady == true) {
    // if (condition)
    console.log("Go to eat");
  } else {
    console.log("NO");
  }
}
food();

function iphoneBuying() {
  var iphonePrice = 186460;
  var money_in_my_pocket = 500000;
  var packagedWell = true;
  if (iphonePrice < money_in_my_pocket || iphonePrice == money_in_my_pocket) {
    if (packagedWell == true) {
      console.log("akon kino poria mar kai o");
    } else {
      console.log("na, go kinbo na . Doi number mal");
    }
  } else if (iphonePrice == money_in_my_pocket) {
    console.log("akoni kinbo");
  } else {
    console.log("na, go kinbo na");
  }
}
iphoneBuying();
