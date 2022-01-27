var bottleColor = "yellow"; //decaled a variable and assgined it with a string
var bottleNum = 5; //decaled a variable and assigned it with a num;

//array
var house = ["bedroom", "bathroom", "kicthn", "dinningRoom"];
console.log(house);
var bathRoom = house.indexOf("bathroom");
console.log(bathRoom); // logged out 1
var offlie = house.indexOf("offlie");
console.log(offlie); // logged out -1
var secondBedRoom = house.push("bedroom-2");
console.log(house);
house.pop();
house.pop();
house.pop();
console.log(house);
var addOfflie = house.push("offlie");
console.log(house);

function gameBuying() {
  if (house.length >= 4) {
    console.log("You are so rich");
  } else if ((house.length = 4)) {
    console.log("You are so normal");
  } else {
    console.log("You are so poor");
  }
}
gameBuying();
