document.getElementById("submit-btn").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  const passwordField = document.getElementById("user-password");
  const userPassword = passwordField.value;
  if (userEmail == "maria@gmail.com" && userPassword == 123) {
    window.location.href = "bank.html";
  } else {
    document.getElementById("error").textContent = "Error";
  }
});
