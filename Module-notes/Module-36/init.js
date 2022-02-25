/* Object:- 
    1. using object literal
    2. using object constructor
    3. using object prototype / create method
    4. using object class keywords
    5. using object function
*/

const developer = { name: "John", job: "developer" };
const person = new Object();
const human = Object.create(developer);
console.log(human.name);

class People {
  // it is one kind of function
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const peop = new People("Jhonson", 50);
console.log(peop);

function Manus(name, age) {
  this.name = name;
  this.age = age;
}
const man = new Manus("Jhonson", 50);
console.log(man);

/* object methods*/
const student404 = {
  id: 404,
  major: "math",
  isRich: false,
  subjects: ["english", "science", "math", "biology"],
  bestFriend: {
    id: 202,
    major: "english",
    subjects: ["english", "science", "math", "biology"],
  },
  takingExam: function () {
    console.log(`Student ${this.id} is taking exam in ${this.major}`);
  },
};
console.log(student404.takingExam());

/* object properties */
const bottle = {
  color: "yellow",
  //key   value
  hold: "water",
  price: 50,
  isClean: true,
};
// geting all properties names
const bottleKeys = Object.keys(bottle);
console.log(bottleKeys);

// geting all properties values
const bottleValues = Object.values(bottle);
console.log(bottleValues);

// geting all properties names and values in pairs
const bottlePairs = Object.entries(bottle);
console.log(bottlePairs);

// deleteing a property of an object
delete bottle.isClean;
console.log(bottle);

/* not leting the properties of the object to

1. delete the properties
2. can't add new properties to the object
 */
// your can change the properties values
Object.seal(bottle);

bottle.price = 100;
delete bottle.color;
console.log(bottle);

/* freezing a object
1. you cannot delete the properties
2. you cannot add new properties to the object
3. you cannot change the properties values */
Object.freeze(bottle);
console.log(bottle);

// Loop through an object

for (const prop in bottle) {
  console.log(prop, bottle[prop]);
}
for (const prop in bottleKeys) {
  console.log(prop, bottleKeys[prop]);
}
for (const [key, value] of bottlePairs) {
  console.log(key, value);
}

/* Comparing objects */

const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
const third = first;
if (first == second) {
  console.log("objects are equal");
} else {
  console.log("objects are different");
}

if (JSON.stringify(first) === JSON.stringify(second)) {
  console.log("objects are equal");
} else {
  console.log("objects are different");
}

const first2 = { a: 1, b: 2 };
const second2 = { b: 2, a: 1 };

if (JSON.stringify(first2) === JSON.stringify(second2)) {
  console.log("objects are equal");
} else {
  console.log("objects are different");
}

function comparingObject(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    console.log(false);
  } else {
    console.log(true);
  }
  for (const prop in object1) {
    if (object1[prop] !== object2[prop]) {
      console.log(false);
    } else {
      console.log(true);
    }
  }
}
comparingObject(first2, second2);

// binding objects

const kibria = {
  id: 101,
  money: 5000,
  name: "RJ Kibria",
  treatDey: function (expense, boksis) {
    this.money = this.money - expense - boksis;
    console.log(this);
  },
};
const balam = {
  id: 102,
  money: 50000,
  name: "DJ Balam",
};

const balamTreatDey = kibria.treatDey.bind(balam);
// balamTreatDey(500);
/* bind:-
For a given function, creates a bound function that has the same body as the original function. The this object of the bound function is associated with the specified object, and has the specified initial parameters. */

kibria.treatDey.call(balam, 5000, 200);
kibria.treatDey.apply(balam, [5000, 200]);
