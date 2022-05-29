import React from "react";
import "./App.css";
import Counter from "./Components/Counter/Counter";
import User from "./Components/User/User";

// const user = "Jhon"; js
const age: number = 54;
const isSmart: boolean = false;
const user: string = "Copper";

// array and objects
const students: string[] = ["jonny", "joe", "Harris"];
const friends: number[] = [65, 897, 4, 1, 65, 64, 87, 21];

interface Person {
  name: string;
  age: number;
  address: string;
  locaiton?: string; // if the object has this key / prop
}

const person: Person = {
  name: "Ellen R. Thayer",
  age: 54,
  address: "4345 Hiddenview Drive Philadelphia, PA 19108",
};

// console.log(age, isSmart, user, students, friends, person);

// function in typeScript

const handleUsers = (age: number): number => {
  const newAge: number = age + 1;
  console.log(newAge);
  return newAge;

  // (parameter):some type means that the function can only return that typed value
};
handleUsers(2005);

function App() {
  return (
    <div className="App">
      <Counter />
      <User name="Maria" age={20} />
    </div>
  );
}

export default App;
