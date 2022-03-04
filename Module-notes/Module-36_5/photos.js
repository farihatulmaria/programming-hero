const loadPhotos = () => {
  const url = "https://jsonplaceholder.typicode.com/photos";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhotos(data));
};
const toggleSpinner = (displayStyles) => {
  document.getElementById("spinner").style.display = displayStyles;
};
const displayPhotos = (photos) => {
  const rowContainer = document.querySelector(".row");
  photos.forEach((photo) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div class="card h-100">
      <img src="${photo.url}" class="card-img-top" alt="photo" />
      <div class="card-body">
          <h5 class="card-title fw-bold">${photo.title}</h5>
          <p class="card-text">
          reiciendis accusantium. Temporibus, deserunt. Doloribus sit rem reiciendis
          aliquam ducimus labore in tenetur hic totam fuga corporis nobis provident
          natus, ea quo architecto adipisci temporibus vel facere tempore, error
          </p>
      </div>
  </div>`;
    rowContainer.appendChild(div);
    toggleSpinner("block");
  });
};
