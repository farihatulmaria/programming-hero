function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
}

document.getElementById("key-pad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const calcInput = document.getElementById("display-number");
  if (isNaN(number)) {
    if (number == "C") {
      calcInput.value = "";
    }
  } else {
    const previousClacInput = calcInput.value;
    const newNumber = previousClacInput + number;
    calcInput.value = newNumber;
  }
});

function submitPin() {
  const pin = document.getElementById("display-pin").value;
  const typedNumber = document.getElementById("display-number").value;

  const successMessage = document.getElementById("success");
  const failMessage = document.getElementById("fail");

  if (pin == typedNumber) {
    successMessage.style.display = "block";
    failMessage.style.display = "none";
  } else {
    failMessage.style.display = "block";
    successMessage.style.display = "none";
  }
}
