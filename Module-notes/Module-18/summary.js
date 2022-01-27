var num = [679, 6578, 879, 987, 879, 87, 687, 7, 67, 67];
//arrayname[0   1      2     3   4   5   6    7   8  9] -total 10
num[7] = 35; //changed items value
var numLength = num.length;
console.log(numLength);
var firstNum = num.push(354);
console.log(num);
var lastNum = num.pop();
console.log(num);
var indexNum = num.indexOf(987);
console.log(num);
console.log(firstNum);
console.log(lastNum);
console.log(indexNum);

function iphoneBuying() {
  var iphonePrice = 186460;
  var money_in_my_pocket = 500000;
  var packagedWell = true;
  if (iphonePrice < money_in_my_pocket || iphonePrice == money_in_my_pocket) {
    if (packagedWell == true) {
      console.log("akon kino poria mar kai o");
    } else {
      console.log("na, go kinbo na . Doi number mal");
    }
  } else if (iphonePrice == money_in_my_pocket) {
    console.log("akoni kinbo");
  } else {
    console.log("na, go kinbo na");
  }
}
iphoneBuying();
