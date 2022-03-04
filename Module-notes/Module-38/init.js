function doSomething() {
  console.log("i am coding js");
}
/* example: 
 console.log("sdggggg");
doSomething();
console.log("95/595fyyfyt");
console.log("fti198f98i1f98i1"); 
*/
console.log("sdggggg");

setTimeout(doSomething, 5000); // do it in the end. it can be in a milliseconds -- by default

setTimeout(function () {
  console.log("i am using vs code");
}, 5000);

setTimeout(() => {
  console.log("exploring set timeout");
}, 4000);

console.log("95/595fyyfyt");
console.log("fti198f98i1f98i1");

console.log(111);
console.log(222);
/* fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data)); */
console.log(333);
console.log(444);
for (let i = 0; i < 1000; i++) {
  const element = i;
  console.log(element);
}

// infinity

/* console.log("first");
setInterval(() => {
  console.log("third");
}, 1000);
console.log("second"); */

// ctrl+c to stop the infinity

/* console.log("first");

let seconds = 0;
setInterval(() => {
  seconds++;
  console.log(seconds);
}, 1000);

console.log("second"); */

// to stop the infinity by code
console.log("first");

let seconds = 0;
const timeId = setInterval(() => {
  //   seconds++; // start at 1 end at 16
  //console.log(seconds++); // start at 0 end at 15
  console.log(++seconds); // start at 1 end at 16
  if (seconds > 15) {
    clearInterval(timeId);
  }
}, 1000);

console.log("second");
