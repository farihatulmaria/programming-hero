const bank = (owner) => {
  let balance = 0;
  return {
    deposit: (amount) => {
      balance += amount;
      console.log(balance);
    },
    withdraw: (amount) => {
      balance = amount;
      console.log(balance);
    },
  };
};

const person = bank("person");
person.deposit(456);
person.deposit(4506);

function partriChai(age, earnings) {
  console.log(canMarry(2000));

  const trueAge = age + 7;

  function canMarry(expense) {
    const remaining = earnings - expense;
    if (remaining > 1000) {
      console.log("can marry");
    } else {
      console.log("can't marry");
    }
  }
}
partriChai(21, 6454);
