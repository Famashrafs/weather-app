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

// Default city when the page load
let cityInput = "cairo";

// Add click event to each city in the panel

cities.forEach((city)=>{
    city.addEventListener('click', (e) =>{
        // change from default city to the clicked one
        cityInput = e.target.innerHTML;
        /* function that feches and displays
        all the data from the weather API
        */
        fetchWeatherData();
        app.style.opacity = "0";
    });
})
// Add submit event to the form
form.addEventListener('submit',(e) => {
    e.preventDefault();
    /*
    if the search bar is empty , throw an alert
    */
    if(search.maxlength == 0){
        alert("please type in a city name");
    }else{
        cityInput = search.value;
        fetchWeatherData();
        search.value = "";
        app.style.opacity = "0";
    }
    console.log(search.value)
});
function dayOfTheWeek(){
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "thursday",
        "Friday",
        "Saturday"
    ];
    return weekday[new Date().getDay()];
}
function fetchWeatherData(){
    fetch(`http://api.weatherapi.com/v1/current.json?key=813489435ba940f8b7a184954241906&q=${cityInput}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        temp.innerHTML = data.current.temp_c + "&#176;";
        conditionOutput.innerHTML = data.current.condition.text;

        const date = data.location.localtime;
        const y = parseInt(date.substr(0, 4));
        const m = parseInt(date.substr(5, 2));
        const d = parseInt(date.substr(8, 2));
        const time = date.substr(11);

        dateOutput.innerHTML = `${dayOfTheWeek()} ${d} / ${m} / ${y}`;
        timeOutput.innerHTML = time ;
        nameOutput.innerHTML = data.location.name;

        icon.src= data.current.condition.icon;

        cloudOutput.innerHTML = data.current.cloud + "%";
        humidityOutput.innerHTML = data.current.humidity + "%";
        windOutput.innerHTML = data.current.wind_kph + "km/h";

        const code = data.current.condition.code;
        let timeOfDay = data.current.is_day ? "day" : "night";
        if(code == 1000){
            app.style.cssText = `background-image: url(./images/${timeOfDay}/clear.jpg);`;
            btn.style.background = "#e5ba92";
            if(timeOfDay == "night"){
                btn.style.background = "#181e27";
            }
        }
        // cloudy
        else if(
            code == 1003 ||
            code == 1006 ||
            code == 1009 ||
            code == 1030 ||
            code == 1069 ||
            code == 1087 ||
            code == 1135 ||
            code == 1273 ||
            code == 1276 ||
            code == 1279 ||
            code == 1282
        ){
            app.style.cssText = `background-image: url(./images/${timeOfDay}/cloudy.jpg);`;
            btn.style.background = "#fa6d1b";
            if(timeOfDay == "night"){
                btn.style.background = "#181e27";
            }
        } else if(
            code == 1063 ||
            code == 1069 ||
            code == 1072 ||
            code == 1150 ||
            code == 1153 ||
            code == 1180 ||
            code == 1183 ||
            code == 1186 ||
            code == 1189 ||
            code == 1192 ||
            code == 1195 ||
            code == 1204 ||
            code == 1207 ||
            code == 1240 ||
            code == 1243 ||
            code == 1246 ||
            code == 1249 ||
            code == 1252
        ){
            app.style.cssText = `background-image: url(./images/${timeOfDay}/rainy.jpg);`;
            btn.style.background = "#647d75";
            if(timeOfDay == "night"){
                btn.style.background = "#325c80";
            }
        }else {
            app.style.cssText = `background-image: url(./images/${timeOfDay}/snowy.jpg);`;
            btn.style.background = "#4d72aa";
            if(timeOfDay == "night"){
                btn.style.background = "#1b1b1b"
            }
        }
        // fade in the page once all is done
        app.style.opacity = "1";
    })
    .catch(() =>{
        alert("city not found, please try again");
        app.style.opacity = "1"
    });
}
fetchWeatherData();

app.style.opacity = "1"
