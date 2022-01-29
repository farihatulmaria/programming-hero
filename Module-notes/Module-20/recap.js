var time = "10:15pm"; //string
var bookPrice = 1000; //number
var isHot = false; //boolean
var partner = ["sajid", "mojid", "sojid", "lajid"];
var elementPartners = partner.length;
var mojidIndex = partner.indexOf("mojid");
partner.push("kuijd");
partner.pop();
partner.pop();

if (bookPrice < 100) {
  console.log("buy it");
} else {
  console.log("i need a discount");
}
var i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
for (var i = 0; i <= 10; i++) {
  console.log(i);
}
function isHot() {
  if (time >= 19 && time <= 5) {
    return false;
  } else {
    return true;
  }
}
var isWinter = isHot();

// let and const
var price = 27;
price = 85;
price = 15;
