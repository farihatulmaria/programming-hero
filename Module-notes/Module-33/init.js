const user = {
  id: 1141452,
  name: "Jhon",
  job: "actor",
};
const user2 = {
  id: 1547511,
  name: "Jhonson",
  job: ["actor", "model"],
};
const userStringified = JSON.stringify(user);
/* Converts a JavaScript value to a JavaScript Object Notation (JSON) string. */

const userStringified2 = JSON.stringify(user2);
console.log(userStringified2);

const stringifyAString = JSON.parse(userStringified2);
console.log(stringifyAString);
/*  Converts a JavaScript Object Notation (JSON) string into an object. */

function loadData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => displayUsers(data));
}

function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data));
}
function displayUsers(data) {
  const ul = document.getElementById("users-list");
  for (const users of data) {
    const list = document.createElement("li");
    list.innerText(users.name);
    ul.appendChild(list);
  }
}
