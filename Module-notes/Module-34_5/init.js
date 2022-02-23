const loadComments = () => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayComments(data));
};

const displayComments = (comments) => {
  console.log(comments);
  const commentContainer = document.getElementById("display-comments");
  comments.forEach((comment) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h2>Name: ${comment.name}</h2>
      <h3>Email: ${comment.email}</h3>
      <h3>Id: ${comment.id}</h3>
      <p>Comment : ${comment.body}</p>
      `;
    commentContainer.appendChild(div);
    // displaying one by one
    commentContainer.removeChild();
  });
};

const clearComment = (comments) => {
  const commentContainer = document.getElementById("display-comments");
  commentContainer.innerHTML = " ";
};

// displaying random users
const loadBuddies = () => {
  const url = "https://randomuser.me/api/?results=50";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayBuddies(data));
};

const displayBuddies = (users) => {
  console.log(users);
  const RandomUsers = users.results;
  const userContainer = document.getElementById("display-Users");
  for (const user of RandomUsers) {
    const div = document.createElement("div");
    div.innerHTML = `
      <p>Name: ${user.name.title} ${user.name.first} ${user.name.last} </p>
      <p>Age: ${user.dob.age}</p>
      <p>Email:${user.email}</p>
      <p>Gender: ${user.gender}</p>
      <img src="${user.picture.thumbnail}" alt="">
      `;
    userContainer.appendChild(div);
  }
};

const clearUser = (users) => {
  const userConatainers = document.getElementById("display-Users");
  userConatainers.innerHTML = " ";
};

const loadCountires = () => {
  const url = "https://www.thesportsdb.com/api/v1/json/2/all_sports.php";
};
