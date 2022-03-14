const addLocalStorage = () => {
  const idInput = document.getElementById("storage-id");
  const id = idInput.value.toLowerCase();

  const valInput = document.getElementById("storage-value");
  const val = valInput.value.toLowerCase();
  localStorage.setItem(id, val);

  idInput.value = "";
  valInput.value = "";
};
const addSessionStorage = () => {
  const idInput = document.getElementById("storage-id");
  const id = idInput.value.toLowerCase();

  const valInput = document.getElementById("storage-value");
  const val = valInput.value.toLowerCase();
  sessionStorage.setItem(id, val);
  idInput.value = "";
  valInput.value = "";
};
