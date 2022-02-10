/* function doubleNum(num) {
  const result = num * 2;
  return result;
}
let dnum = doubleNum(5);
console.log(dnum); */

function getInputvalue(inputId) {
  const depositInput = document.getElementById(inputId);
  const depositAmount = depositInput.value;
  const newDepositAmount = parseFloat(depositAmount);
  depositInput.value = "";
  return newDepositAmount;
}

// depostie btn click function

document.getElementById("depostie-btn").addEventListener("click", function () {
  const newDepositAmount = getInputvalue("deposit-input");

  const depostiTotal = document.getElementById("deposit-total");

  const perviousAmount = depostiTotal.innerText;
  const perviousDepostiAmount = parseFloat(perviousAmount);
  const newDepositTotal = perviousDepostiAmount + newDepositAmount;

  depostiTotal.innerText = newDepositTotal;

  // adding deposti to balance
  const balanceTotal = document.getElementById("balance-total");

  const balancePerviousAmount = balanceTotal.innerText;
  const perviousBalanceAmount = parseFloat(balancePerviousAmount);

  const newBalanceTotal = perviousBalanceAmount + newDepositAmount;

  balanceTotal.innerText = newBalanceTotal;
});

// withdraw btn click function

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const newWithdrawAmount = getInputvalue("withdraw-input");

  const withdrawTotal = document.getElementById("withdraw-total");

  const perviousWithDrawText = withdrawTotal.innerText;
  const perviouseWithDraw = parseFloat(perviousWithDrawText);

  const newWithDrawTotal = perviouseWithDraw + newWithdrawAmount;

  withdrawTotal.innerText = newWithDrawTotal;

  // withdrawing money from balance

  const balanceTotal = document.getElementById("balance-total");
  const balancePerviousAmount = balanceTotal.innerText;
  const perviousBalanceAmount = parseFloat(balancePerviousAmount);
  const newBalanceTotal = perviousBalanceAmount - newWithdrawAmount;
  balanceTotal.innerText = newBalanceTotal;
});
