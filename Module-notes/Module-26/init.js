document.getElementById("submit-btn").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  const passWordField = document.getElementById("user-password");
  const userPassWord = passWordField.value;
  if (userEmail === "maria@gmail.com" && userPassWord === 123) {
    console.log("ok");
  }
});
