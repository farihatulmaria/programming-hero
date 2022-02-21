function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPosts(data));
}
loadPost();

function displayPosts(posts) {
  const postContainer = document.getElementById("post-container");
  for (const post of posts) {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      `;
    postContainer.appendChild(div);
  }
}
/* function addAPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({ title: "New post", dec: "NEW POST" }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  .then((res) => res.json())
  .then((data) => console.log(data));
}
 */
