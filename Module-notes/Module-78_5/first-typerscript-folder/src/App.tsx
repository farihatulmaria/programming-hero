import React from "react";
import "./App.css";

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
}

const person: Person = {
  name: "Ellen R. Thayer",
  age: 54,
  address: "4345 Hiddenview Drive Philadelphia, PA 19108",
};

console.log(age, isSmart, user, students, friends, person);

function App() {
  return <div className="App"></div>;
}

export default App;
