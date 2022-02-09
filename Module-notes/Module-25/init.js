function makeTextCenter() {
  document.body.style.textAlign = "center";
}
const btn4 = document.getElementById("btn-4");
btn4.onmouseover = styleMe;

// this is toooooo much style in a function
function styleMe() {
  btn4.style.fontSize = "20px";
  btn4.style.background = "#0d80cc";
  btn4.style.border = "0";
  btn4.style.padding = "10px 20px";
  btn4.style.borderRadius = "10px";
  btn4.style.color = "#fff";
  btn4.style.fontWeight = "600";
}
// P.S I am a very lazy human that doesn't likes to name functions
// so,

const btn5 = document.getElementById("btn-5");
btn5.addEventListener("click", function () {
  btn5.style.fontSize = "20px";
  btn5.style.background = "#df4904";
  btn5.style.border = "0";
  btn5.style.padding = "10px 20px";
  btn5.style.borderRadius = "10px";
  btn5.style.color = "#fff";
  btn5.style.fontWeight = "600";
});

const showingBtn = document
  .getElementById("show")
  .addEventListener("click", function () {
    const hiddenPTag = (document.getElementById("hidden-p").innerText =
      " I am the hidden paragraph.");
  });

const updateBtn = document
  .getElementById("update-btn")
  .addEventListener("click", function () {
    const userInputs = document.getElementsByTagName("input");
    const name = window.prompt("What's your name?");
    alert("Are you " + name + " ?");
  });

const postingBtn = document
  .getElementById("post-btn")
  .addEventListener("click", function () {
    const commentBox = document.getElementById("comment-area");
    const usersComment = commentBox.value;
    const paragraph = document.createElement("p");
    paragraph.innerText = usersComment;

    const commentContainer = document.getElementById("comment-container");
    commentContainer.appendChild(paragraph);
    commentBox.value = " ";
  });

const deleteBtn = document
  .getElementById("delete-btn")
  .addEventListener("click", function () {
    const deleteSomething = (document.getElementById(
      "annoying-things"
    ).style.display = "none");
  });
document.getElementById("delete-inputs").addEventListener("focus", function () {
  document.body.style.background = "lightcoral";
});
document.getElementById("delete-inputs").addEventListener("blur", function () {
  document.body.style.background = "white";
});
document
  .getElementById("delete-inputs")
  .addEventListener("keyup", function (event) {
    if (event.target.value === "delete") {
      document.getElementById("delete-btn").removeAttribute = "disabled";
    }
  });
document
  .getElementById("delete-inputs")
  .addEventListener("change", function () {
    const deleteField = document.getElementById("delete-inputs");
    console.log(deleteField.value);
  });

// event Bubble
document.getElementById("containers").addEventListener("click", function () {
  console.log("containers");
});
document
  .getElementById("list-container")
  .addEventListener("click", function () {
    console.log("ul");
  });
document.getElementById("second").addEventListener("click", function (event) {
  console.log("second-item");
  event.stopPropagation();
  // event.stopImmediatePropagation();
});

// event delegate
const items = document.getElementsByClassName("item");
for (const item of items) {
  item.addEventListener("click", function (event) {
    // document.getElementById("item-container").removeChild(item);
    event.target.parentNode.removeChild(item);
  });
}
document.getElementById("add-items").addEventListener("click", function () {
  const li = document.createElement("li");
  li.innerText = "add item";
  li.classList.add("item");
  const parent = document.getElementById("item-container");
  parent.appendChild(li);
});
document
  .getElementById("item-container")
  .addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
  });
