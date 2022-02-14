const nameString = "I am Maria";
const nameString2 = "i am Maria"; // not the same
// toLowerCase()-  Converts all the alphabetic characters in a string to lowercase.
const lowerName = nameString.toLowerCase();
// toUpperCase()-  Converts all the alphabetic characters in a string to uppercase.
const upperName = nameString.toUpperCase();

// use of toUppperCase() and tolowerCase()

const userInput = "Maria";
const savedUserName = "maria";

if (userInput == savedUserName) {
  console.log("user name, hacked");
} else if (userInput.toLowerCase() == savedUserName.toLowerCase()) {
  // you can use toUpperCase() for your use
  console.log("user name, ok");
} else {
  console.log("user name, hacked");
}
// seching products with some funcitons
const products = [
  "laptop",
  "phone",
  "Mac",
  "Macbook",
  "Laptop",
  "Phone",
  "mac",
  "Headphone",
  "pen",
  "glass",
];
const searchingProducts = "laptop";

const outputProducts = [];
// without toLowerCase() and using indexOf() function

for (const product of products) {
  if (product.indexOf(searchingProducts) != -1) {
    outputProducts.push();
  }
}
// console.log(outputProducts)

// with toLowerCase()
for (const product of products) {
  if (product.toLowerCase().indexOf(searchingProducts.toLowerCase()) != -1) {
    outputProducts.push(product);
  }
}
// console.log(outputProducts);

// with toLowerCase() and using includes function
for (const product of products) {
  if (product.toLowerCase().includes(searchingProducts.toLowerCase())) {
    outputProducts.push(product);
  }
}

// console.log(outputProducts);

// cheaking it with startsWith() function
for (const product of products) {
  if (product.toLowerCase().startsWith(searchingProducts.toLowerCase())) {
    outputProducts.push(product);
  }
}

// console.log(outputProducts);

// sliceing strings and arrays

const name = nameString.slice(5, 10);

/* Returns a section of a string.

@param start — The index to the beginning of the specified portion of stringObj.

@param end
The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end. If this value is not specified, the substring continues to the end of stringObj.
*/
console.log(name);
const nameStringWord = nameString.split(" ");

/* Split a string into substrings using the specified separator and return them as an array.

@param separator — A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.

@param limit — A value used to limit the number of elements returned in the array. */
console.log(nameStringWord);

const nameWithOutA = nameString.split("a");
console.log(nameWithOutA);

const nameSubStr = nameString.substr(5, 5);
console.log(nameSubStr);
/* Gets a substring beginning at the specified location and having the specified length.

@deprecated — A legacy feature for browser compatibility

@param from — The starting position of the desired substring. The index of the first character in the string is zero.

@param length — The number of characters to include in the returned substring. */

const namSubString = nameString.substring(5, 10);
console.log(namSubString);
/* Returns the substring at the specified location within a String object.

@param start — The zero-based index number indicating the beginning of the substring.

@param end
Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end. If end is omitted, the characters from start through the end of the original string are returned.

 */

// concating two strings ( varrible.value + varrible.value   )

const first = "Amader";
const second = "City";
const fullString = first.concat(second).concat("abc");
console.log(fullString);

const words = ["Vallejo", "Kathleen", "Hager", "John", "Wilbur"];
// const joinAllWords = words.join(" ");
// const joinAllWords = words.join(" - ");
const joinAllWords = words.join(" , "); // joining array elements into a string
// const joinAllWords = words.join(" -*- ");
// const joinAllWords = words.join(" / ");

/* 
Adds all the elements of an array into a string, separated by the specified separator string.

@param separator — A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma. 
*/

const friends = ["Vallejo", "Kathleen", "Hager", "John", "Wilbur"];

function megaFriend(firends) {
  if (Array.isArray(firends) === false) {
    console.log("write an array not somthing else");
  }
  let mega = firends[0];
  for (const friend of firends) {
    if (friend.length > mega.length) {
      mega = friend;
    }
  }
  console.log(mega);
}
megaFriend(friends);

// finding a element of array with indexOf

if (friends.indexOf("Kathleen") != -1) {
  console.log("she is ok");
} else {
  console.log("she is dead");
}
// finding a element of array with includes

if (friends.includes("John")) {
  console.log("he is ok");
} else {
  console.log("he is dead");
}

// concating an array

const firstArray = [1, 5, 4];
const secondArray = [4, 57, 5, 8];
const concatingArray = firstArray.concat(secondArray);
console.log(concatingArray);

const number = [67, 84, 24, 5, 8, 4, 564, 21, 9, 4, 654, 27, 64, 82, 19];
// slicing an array
const numberSliced = number.slice(5, 10);
console.log(numberSliced);

// splicing an array
const numberSpliced = number.splice(5, 2);
console.log(numberSpliced);

// splicing an array part-2

const numberSpliced2 = number.splice(4, 3, "64", "7", "54", "10");

const num = [54, 87, 5, 59, 20, 14, 16, 545, 8, 15, 1];
const sortingNum = num.sort();
console.log(sortingNum);

const sortingFriend = friends.sort(); // firends array is in 137 line ( i guest )
console.log(sortingFriend);

const reversingFriends = friends.reverse();
console.log(reversingFriends);

const sortReversingFriends = friends.sort().reverse();
console.log(sortReversingFriends);

//sorting numbers in js

const bigNumbers = [58, 45, 66, 81, 77, 57, 68, 24, 35, 61, 90];
const sortBigNumbers = bigNumbers.sort(function (a, b) {
  return a - b;
});
console.log(sortBigNumbers);

// making an unlimited adding number function

function addNumbers(num1, num2) {
  console.log(arguments);
  let result = 0;
  for (const num of arguments) {
    result += num;
  }
  console.log(result);
}
addNumbers(67, 98, 45, 8, 57, 22, 74, 24);

// making an unlimited adding name function

function getFullName(fristName, lastName) {
  console.log(arguments);
  let fullName = " ";
  for (const name of arguments) {
    fullName += name;
  }
  console.log(fullName);
}
getFullName("Gerald", " M.", " Loyd");

// error handing with try-catch

const name2 = "ami";
try {
  name2 = "tomi";
} catch (error) {
  console.log(name2);
}

const myFavDate = new Date("1971-12-16");
//  y(year) m(month) d(day)  y    m   d
console.log(myFavDate);

const myFavAnotherDate = new Date(1971, 3, 5, 11, 50, 20, 2);
console.log(myFavAnotherDate);

// Coordinated Universal Time (UTC)

/* 
getFullYear() --	Get the year as a four digit number (yyyy)
getMonth() --	Get the month as a number (0-11)
getDate() --	Get the day as a number (1-31)
getHours() --	Get the hour (0-23)
getMinutes() --	Get the minute (0-59)
getSeconds() --	Get the second (0-59)
getMilliseconds() --	Get the millisecond (0-999)
getTime() --	Get the time (milliseconds since January 1, 1970)
getDay() --	Get the weekday as a number (0-6)
Date.now() --	Get the time. ECMAScript 5.
 */
const array = ["121", "12", "1", "112", "111"];

console.log(array.sort());
