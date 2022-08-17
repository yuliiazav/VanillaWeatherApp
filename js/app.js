//setting current time and day 
let now = new Date();
console.log(now);

let currentTime = document.querySelector(".current-time");
let currentDay = document.querySelector(".current-day");

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thuesday", "Friday", "Saturday"];
let day = days[now.getDay()];
console.log(day);
let hours = now.getHours();
let minutes = now.getMinutes();

currentTime.innerHTML = ` ${hours} : ${minutes} `;
currentDay.innerHTML = `${day},`;
////
//////Search engine

function showWeather(response) {
    let cityTemperature = document.querySelector("#temperature");
    let temperature = Math.round(response.data.main.temp);
    cityTemperature.innerHTML = `${temperature}°`;
    let cityName = document.querySelector("#city");
    cityName.innerHTML = ` ${response.data.name}`;
    let weatherCondition = document.querySelector("#description");
    weatherCondition.innerHTML = `${response.data.weather[0].main}`;
}

function showLocation(position) {
    let apiKey = "3bef8ed4a084d48e251eb598a85f1b9d";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showWeather);
}

function searchCity() {
    let city = document.querySelector("#city-input").value;
    let apiKey = "3bef8ed4a084d48e251eb598a85f1b9d";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
}

function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showLocation);
}

function handleSubmit(event) {
    event.preventDefault();
    searchCity();
}
let currentBtn = document.querySelector(".current-btn");
currentBtn.addEventListener("click", getCurrentLocation);

let submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", handleSubmit);
///