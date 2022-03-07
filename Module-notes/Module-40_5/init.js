console.log("a");
function addB() {
  console.log("b");
}
setTimeout(addB, 3500);
console.log("c");

function add200ToUsersNumber() {
  let usersNumber = prompt("Enter a number that you like");
  if (usersNumber) {
    usersNumber;
    usersNumber = parseInt(usersNumber);
    const result = usersNumber + 200;
    alert(result);
  } else if (usersNumber < 0) {
    alert("Please enter a positive number which is more than 0");
  } else {
    alert("Please enter a number again");
  }
}

function seeLocation() {
  const question = confirm("Do you want to see your location now ?");
  if (question == true) {
    alert("Your current location is " + location.href);
  } else {
    alert("We can't find your location" + " 😓");
  }
}
