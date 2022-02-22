// printing strings

const loadQuote = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayQuote(data));
};

const displayQuote = (quote) => {
  const blockquote = document.getElementById("quote");
  blockquote.innerText = quote.quote;
};

// random user id

const loadBuddies = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((res) => res.json())
    .then((data) => displayBuddies(data));
};

const displayBuddies = (buddies) => {
  console.log(buddies);
  const buddy = buddies.results;
  const buddiesContainer = document.getElementById("buddies");
  for (const person of buddy) {
    const p = document.createElement("p");
    p.innerText = `
    Name: ${person.name.title} ${person.name.first} ${person.name.last} 
    Age: ${person.dob.age}
    Email:${person.email}
    Gender: ${person.gender}
    `;
    buddiesContainer.appendChild(p);

    const img = document.createElement("img");
    img.src = ` ${person.picture.thumbnail}
    `;
    buddiesContainer.appendChild(img);
  }
};

// random countires

const loadCounties = () => {
  fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => displayCountires(data));
};
// loadCounties();
const displayCountires = (countires) => {
  console.log(countires);
  const countiresDiv = document.getElementById("countires");
  countires.forEach((country) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <h3>Country-Name: ${country.name}</h3>
    <p>Capital: ${country.capital}</p>
    <img src="${country.flag}" alt="flags">
    <br/>
    <button onclick = "loadCountiesDetails('${country.name}')">Details</button>
    <section>
      <div id = "country-detail">
      </div>
    </section>
    `;
    countiresDiv.appendChild(div);
  });
};

const loadCountiesDetails = (name) => {
  const url = `https://restcountries.com/v2/name/${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountiesDetails(data[0]));
};

const displayCountiesDetails = (country) => {
  const countryDiv = document.getElementById("country-detail");
  countryDiv.innerHTML = `
  <h1> NativeName:${country.nativeName}</h1>
  <h1> Population:${country.population}</h1>
  <h1> Region: ${country.population}</h1>
  <h1> Area: ${country.area}</h1>
  `;
};

// const RandomNumber = () => Math.floor(Math.random() * 250);
