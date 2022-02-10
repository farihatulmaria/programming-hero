function getInputvalue(inputId) {
  const input = document.getElementById(inputId);
  const Amount = input.value;
  const newAmount = parseFloat(Amount);
  input.value = "";
  return newAmount;
}
function getTotal(totalId, newAmount) {
  const total = document.getElementById(totalId);

  const perviousAmountText = total.innerText;
  const perviousAmount = parseFloat(perviousAmountText);
  total.innerText = perviousAmount + newAmount;
}
function getCurrentBalance() {
  const balanceTotal = document.getElementById("balance-total");

  const balancePerviousAmount = balanceTotal.innerText;
  const perviousBalanceAmount = parseFloat(balancePerviousAmount);
  return perviousBalanceAmount;
}
function updateBalance(newAmount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");

  /* const balancePerviousAmount = balanceTotal.innerText;
  const perviousBalanceAmount = parseFloat(balancePerviousAmount); */
  const perviousBalanceAmount = getCurrentBalance();
  if (isAdd == true) {
    balanceTotal.innerText = perviousBalanceAmount + newAmount;
  } else {
    balanceTotal.innerText = perviousBalanceAmount - newAmount;
  }
}

// depostie btn click function

document.getElementById("depostie-btn").addEventListener("click", function () {
  const newDepositAmount = getInputvalue("deposit-input");
  if (newDepositAmount > 0) {
    getTotal("deposit-total", newDepositAmount);

    // adding deposti to balance
    updateBalance(newDepositAmount, true);
  }
});

// withdraw btn click function
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const newWithdrawAmount = getInputvalue("withdraw-input");
  const currentBalance = getCurrentBalance();
  if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
    getTotal("withdraw-total", newWithdrawAmount);

    // withdrawing money from balance

    updateBalance(newWithdrawAmount, false);
  } else if (newWithdrawAmount < currentBalance) {
    console.log("no money for you");
  }
});
