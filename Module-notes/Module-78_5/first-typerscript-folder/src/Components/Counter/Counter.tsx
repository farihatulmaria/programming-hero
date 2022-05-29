import React, { FormEvent, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);
  const [user, setUser] = useState<User | null>(null);

  //   const [user, setUser] = useState<User>({});
  const handleIncrease = (): void => {
    setCounter(counter + 1);
  };
  interface User {
    name?: string;
    age?: number;
  }
  const handleUserSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const userData = {
      name: "Adan",
      age: 20,
    };
    setUser(userData);
  };
  return (
    <div className="counter">
      <h1>This is a Counter</h1>
      <h2>{counter}</h2>
      <button onClick={handleIncrease}>Increase Count</button>
    </div>
  );
};

export default Counter;
