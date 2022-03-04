// alerts

// alert("HELLO"); // default alert

function alertButton() {
  // function alert
  alert("Alert Button is clicked");
}

// confirm
const confirmToClick = () => {
  const response = confirm("Are you confirm to click this button?");
  if (response == true) {
    alert("ok");
  } else {
    alert("don't click it");
  }
  //   console.log(response);
};

// prompt
const askName = () => {
  const name = prompt("Type your name here: ");
  if (name) {
    alert(`Hi, ${name}`);
  } else if (name == "") {
    alert("You have to enter your name");
  } else {
    console.log("ok");
  }
};

// location

const RefreshPage = () => {
  location.reload();
};
const visitYoutube = () => {
  location.assign("https://www.youtube.com/");
};
const visitGoogle = () => {
  location.href = "https://www.google.com";
};

const goBack = () => {
  history.back();
};
const goBack2 = () => {
  history.go(-2);
};

const getCookie = (name) => {
  const cookie = document.cookie;
  const allCookie = cookie.split(";");
  const findCookies = allCookie.find((c) => c.includes(name));
  if (findCookies) {
    const cookiesValue = findCookies.split("=");
    console.log(cookiesValue[1]);
  } else {
    console.log("no cookies");
  }
};

// local storage
localStorage.setItem("owner", "Maria");
/* Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously. */
const owner = localStorage.getItem("owner");
/* Returns the current value associated with the given key, or null if the given key does not exist. */

console.log(owner);
// session storage

const url = document.getElementById("anchor");
const path = url.pathname;
console.log(url);
