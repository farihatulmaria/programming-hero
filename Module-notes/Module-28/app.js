function getInputValue(product) {
  const productInput = document.getElementById(product + "-number");
  const productNumber = parseInt(productInput.value);
  return productNumber;
}

function calculateTotal() {
  const phoneTotal = getInputValue("phone") * 1219;
  const caseTotal = getInputValue("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 10;
  const totalPrice = subTotal + tax;
  document.getElementById("subtotal").innerText = subTotal;
  document.getElementById("tax").innerText = tax;
  document.getElementById("total").innerText = totalPrice;
}
function updateNum(product, price, isIcreasing) {
  const productInput = document.getElementById(product + "-number");
  let productNumber = productInput.value;
  if (isIcreasing) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  const total = document.getElementById(product + "-total");
  productInput.value = productNumber;

  total.value = parseInt(total);
  total.innerText = productNumber * price;

  calculateTotal();
}

// phone

document.getElementById("phone-plus").addEventListener("click", function () {
  updateNum("phone", 1219, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateNum("phone", 1219, false);
});

// case

document.getElementById("case-plus").addEventListener("click", function () {
  updateNum("case", 59, true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updateNum("case", 59, false);
});
