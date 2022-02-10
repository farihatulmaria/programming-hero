/* function doubleNum(num) {
  const result = num * 2;
  return result;
}
let dnum = doubleNum(5);
console.log(dnum); */

// depostie btn click function

document.getElementById("depostie-btn").addEventListener("click", function () {
  const depositInput = document.getElementById("deposit-input");
  const newDepositAmount = depositInput.value;

  const depostiTotal = document.getElementById("deposit-total");

  const perviousDepositAmount = depostiTotal.innerText;
  const newDepositTotal =
    parseFloat(perviousDepositAmount) + parseFloat(newDepositAmount);

  depostiTotal.innerText = newDepositTotal;

  depositInput.value = "";
  // adding deposti to balance
  const balanceTotal = document.getElementById("balance-total");
  const perviousBalanceAmount = balanceTotal.innerText;
  const newBalanceTotal =
    parseFloat(perviousBalanceAmount) + parseFloat(newDepositAmount);
  balanceTotal.innerText = newBalanceTotal;
});

// withdraw btn click function

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdraw-input");
  const withDrawAmount = withdrawInput.value;
  const newWithdrawAmount = parseFloat(withDrawAmount);

  const withdrawTotal = document.getElementById("withdraw-total");
  const perviousWithDrawText = withdrawTotal.innerText;
  const perviouseWithDraw = parseFloat(perviousWithDrawText);

  const newWithDrawTotal = perviouseWithDraw + newWithdrawAmount;

  withdrawTotal.innerText = newWithDrawTotal;

  withdrawInput.value = "";

  // withdrawing money from balance

  const balanceTotal = document.getElementById("balance-total");
  const perviousBalanceAmount = balanceTotal.innerText;
  const newBalanceTotal =
    parseFloat(perviousBalanceAmount) - parseFloat(newWithdrawAmount);
  balanceTotal.innerText = newBalanceTotal;
});
