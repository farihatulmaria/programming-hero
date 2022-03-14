const loadAllCountries = () => {
    const url = 'https://restcountries.com/v3.1/all'
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountires(data))
}
const displayCountires = (countires) => {

    const allCountiresHtml = countires.map(country => getCountriesHtml(country)).join(' ');

    const countiresContainer = document.querySelector('.countires');

    countiresContainer.innerHTML = allCountiresHtml
}
// option 1

/* const getCountriesHtml = (country) => {
  // option 1
  const {name,flags,capital,area,population,coatOfArms} = country;
    return `
    <div class = 'country'>
      <div class="country-info">
        <img src="${country.flags.png}" />

        <h2>${country.name.official}</h2>
        <p>
            capital: ${country.capital}
            <br/>
            area: ${country.area}km 
            <br/>
            population: ${country.population}
        </p>
        <h3>Coat Of Arms</h3>
        <img class="coatOfArmsImg" src="${country.coatOfArms.png}" />
      </div>
    </div>
    `
} */

// option 2
/* const getCountriesHtml = (country) => {
  // option 2
  const {name,flags,capital,area,population,coatOfArms} = country;
    return `
    <div class = 'country'>
      <div class="country-info">
        <img src="${flags.png}" />

        <h2>${name.official}</h2>
        <p>
            capital: ${capital}
            <br/>
            area: ${area}km 
            <br/>
            population: ${population}
        </p>
        <h3>Coat Of Arms</h3>
        <img class="coatOfArmsImg" src="${coatOfArms.png}" />
      </div>
    </div>
    `
} */

// option 3
const getCountriesHtml = ({name,flags,capital,area,population,coatOfArms}) => {
  // option 2
    return `
    <div class='country' title='${name.official}'>
      <div class="country-info">
        <img src="${flags.png}" />

        <h2>${name.official}</h2>
        <p>
            capital: ${capital}
            <br/>
            area: ${area}km 
            <br/>
            population: ${population}
        </p>
        <h3>Coat Of Arms</h3>
        <img class="coatOfArmsImg" src="${coatOfArms.png}" />
      </div>
    </div>
    `
}
loadAllCountries();









