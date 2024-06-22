const app = document.querySelector('.weather-app');
const temp = document.querySelector('.temp');
const dateOutput = document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const conditionOutput = document.querySelector('.condition');
const nameOutput = document.querySelector('.name');
const icon = document.querySelector('.icon');
const cloudOutput = document.querySelector('.cloud');
const humidityOutput = document.querySelector('.humidity');
const windOutput = document.querySelector('.wind');
const form = document.getElementById('locationInput');
const search = document.querySelector('.search');
const btn = document.querySelector('.submit');
const cities = document.querySelectorAll('.city');

// Default city when the page loads
let cityInput = "cairo";

// Add click event to each city in the panel
cities.forEach((city) => {
    city.addEventListener('click', (e) => {
        // Change from default city to the clicked one
        cityInput = e.target.innerHTML;
        fetchWeatherData();
        app.style.opacity = "0";
    });
});

// Add submit event to the form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (search.value.length === 0) {
        alert("Please type in a city name");
    } else {
        cityInput = search.value;
        fetchWeatherData();
        search.value = "";
        app.style.opacity = "0";
    }
});

function dayOfTheWeek() {
    const weekday = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    return weekday[new Date().getDay()];
}

async function fetchWeatherData() {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=813489435ba940f8b7a184954241906&q=${cityInput}`);
        const data = await response.json();
        if (response.status !== 200) {
            throw new Error(data.error || 'City not found');
        }
        updateWeatherUI(data);
    } catch (error) {
        alert(error.message);
        app.style.opacity = "1";
    }
}

function updateWeatherUI(data) {
    temp.innerHTML = data.current.temp_c + "&#176;";
    conditionOutput.innerHTML = data.current.condition.text;

    const date = data.location.localtime;
    const y = parseInt(date.substr(0, 4));
    const m = parseInt(date.substr(5, 2));
    const d = parseInt(date.substr(8, 2));
    const time = date.substr(11);

    dateOutput.innerHTML = `${dayOfTheWeek()} ${d} / ${m} / ${y}`;
    timeOutput.innerHTML = time;
    nameOutput.innerHTML = data.location.name;

    icon.src = data.current.condition.icon;

    cloudOutput.innerHTML = data.current.cloud + "%";
    humidityOutput.innerHTML = data.current.humidity + "%";
    windOutput.innerHTML = data.current.wind_kph + "km/h";

    const code = data.current.condition.code;
    let timeOfDay = data.current.is_day ? "day" : "night";
    updateBackgroundAndButton(code, timeOfDay);

    app.style.opacity = "1";
}

function updateBackgroundAndButton(code, timeOfDay) {
    let background = "";
    let buttonColor = "";

    if (code === 1000) {
        background = `../static/images/${timeOfDay}/clear.jpg`;
        buttonColor = timeOfDay === "day" ? "#e5ba92" : "#181e27";
    } else if ([1003, 1006, 1009, 1030, 1069, 1087, 1135, 1273, 1276, 1279, 1282].includes(code)) {
        background = `../static/images/${timeOfDay}/cloudy.jpg`;
        buttonColor = timeOfDay === "day" ? "#fa6d1b" : "#181e27";
    } else if ([1063, 1069, 1072, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1204, 1207, 1240, 1243, 1246, 1249, 1252].includes(code)) {
        background = `../static/images/${timeOfDay}/rainy.jpg`;
        buttonColor = timeOfDay === "day" ? "#647d75" : "#325c80";
    } else {
        background = `../static/images/${timeOfDay}/snowy.jpg`;
        buttonColor = timeOfDay === "day" ? "#4d72aa" : "#1b1b1b";
    }

    app.style.cssText = `background-image: url(${background});`;
    btn.style.background = buttonColor;
}

// Fetch weather data on page load
window.onload = fetchWeatherData;
