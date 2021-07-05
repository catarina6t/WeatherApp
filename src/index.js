// Time & Date
function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return ` ${hours}:${minutes}, ${day}`;
}

let dateElement = document.querySelector("h3"); //ok
let currentTime = new Date();

dateElement.innerHTML = formatDate(currentTime);

//Search Engine
function showTemperature(response) {
  let temperatureElement = document.querySelector("#currentTemp"); //ok
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let h5 = document.querySelector("#place");
  h5.innerHTML = `${response.data.name}`;
}

function searching(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text"); //ok
  let apiKey = "10a4c9df0a4335af83e171aa8f6662cd";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
  let place = document.querySelector("#place"); //ok
  place.innerHTML = `${searchInput.value}`;
  axios.get(apiUrl).then(showTemperature);
}

let button = document.querySelector("#search-button"); //ok
button.addEventListener("click", searching);
//ok

// Temperature F / C
function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#currentTemp"); //ok
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#currentTemp"); //ok
  temperatureElement.innerHTML = 19;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link"); //ok
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#theCelsius-link"); //ok
celsiusLink.addEventListener("click", convertToCelsius);

// Geolocation
function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "10a4c9df0a4335af83e171aa8f6662cd"; //ok
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let locButton = document.querySelector("#locationButton"); //ok
locButton.addEventListener("click", getCurrentLocation);
