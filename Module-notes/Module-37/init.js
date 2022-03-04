// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// api key
// ea46c76591779da4a84592555c0f90f9

const searchTemperature = () => {
  const city = document.getElementById("cityname");
  const cityName = city.value.toLowerCase();

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ea46c76591779da4a84592555c0f90f9&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => displayTemperature(data));
};

const setInnerText = (id, text) => {
  const result = document.getElementById(id);
  result.innerText = text;
};
const displayTemperature = (temperature) => {
  setInnerText("city-name", temperature.name);
  setInnerText("temperature", temperature.main.temp);
  setInnerText("condition", temperature.weather[0].main);

  // setting weather icon
  const iconUrl = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;

  const imgIcone = document.getElementById("weather-icon");
  imgIcone.setAttribute("src", iconUrl);
};
