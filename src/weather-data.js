import { displayWeather } from "./weather-display";
import { gif } from "./giphy";

// store the weather data
const weatherData = {
    temp: 0,
    feels_like: 0,
    name: "",
    country: "",
    weather: "",
    wind: 0,
    lon: 0,
    lat: 0,
    icon: "",
    time: "",
};

// get weather data from api
const apiData = (() => {
    const metricData = async function(q) {
        try {
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + q + '&appid=43b125624357836ed7034f19487d8f60&units=metric', {mode: 'cors'})
            const apiData = await response.json();
            weatherData.temp = apiData.main.temp;
            weatherData.feels_like = apiData.main.feels_like;
            weatherData.name = apiData.name;
            weatherData.country = apiData.sys.country;
            weatherData.weather = apiData.weather[0].main;
            weatherData.wind = apiData.wind.speed;
            weatherData.lon = apiData.coord.lon;
            weatherData.lat = apiData.coord.lat;
            weatherData.icon = apiData.weather[0].icon;
            weatherData.time = convertUnix(apiData.dt);
            let descWeather = apiData.weather[0].description;
            displayWeather.displayCurrentWeather(' °C');
            gif.displayGif(descWeather);
        } catch (error) {
            console.log(error);
            alert("Location cannot find, please try to search again!");
        }
        return weatherData;
    }
    const imperialData = async function(q) {
        try {
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + q + '&appid=43b125624357836ed7034f19487d8f60&units=imperial', {mode: 'cors'})
            const apiData = await response.json();
            weatherData.temp = apiData.main.temp;
            weatherData.feels_like = apiData.main.feels_like;
            weatherData.name = apiData.name;
            weatherData.country = apiData.sys.country;
            weatherData.weather = apiData.weather[0].main;
            weatherData.wind = apiData.wind.speed;
            weatherData.lon = apiData.coord.lon;
            weatherData.lat = apiData.coord.lat;
            weatherData.icon = apiData.weather[0].icon;
            let descWeather = apiData.weather[0].description;
            displayWeather.displayCurrentWeather(' ℉');
            gif.displayGif(descWeather);
        } catch (error) {
            console.log(error);
            alert("Location cannot find, please try to search again!");
        }
        return weatherData;
    }
    // get 7 day forecast for previously searched city, and display the forecast
    const forecastMetric = async function(lat, lon) {
        try {
            const response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=current,minutely,hourly&appid=43b125624357836ed7034f19487d8f60&units=metric', {mode: 'cors'})
            const forecast = await response.json();
            for (let index = 0; index < forecast.daily.length; index++) {
                document.getElementById('day' + index).textContent = getDate(forecast.daily[index].sunrise, forecast.timezone);
                document.getElementById('tempValueDay' + index).textContent = forecast.daily[index].temp.day + ' °C';
                document.getElementById('tempValueMin' + index).textContent = forecast.daily[index].temp.min + ' °C';
                document.getElementById('tempValueMax' + index).textContent = forecast.daily[index].temp.max + ' °C';
                document.getElementById('feels-like-value' + index).textContent = forecast.daily[index].feels_like.day + ' °C';
                document.getElementById('sunrise-value' + index).textContent = getLocalTime(forecast.daily[index].sunrise, forecast.timezone);
                document.getElementById('sunset-value' + index).textContent = getLocalTime(forecast.daily[index].sunset, forecast.timezone);
                document.getElementById('weather' + index).textContent = forecast.daily[index].weather[0].main;
                let icon = "http://openweathermap.org/img/w/" + forecast.daily[index].weather[0].icon + ".png";
                document.getElementById('daySymbol' + index).src = icon;
            }
        } catch (error) {
            alert("Something went wrong, please try again by refressing the page");
            console.log(error);
        }
    }
    const forecastImperial = async function(lat, lon) {
        try {
            const response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=current,minutely,hourly&appid=43b125624357836ed7034f19487d8f60&units=imperial', {mode: 'cors'})
            const forecast = await response.json();
            for (let index = 0; index < forecast.daily.length; index++) {
                document.getElementById('day' + index).textContent = getDate(forecast.daily[index].sunrise, forecast.timezone);
                document.getElementById('tempValueDay' + index).textContent = forecast.daily[index].temp.day + ' ℉';
                document.getElementById('tempValueMin' + index).textContent = forecast.daily[index].temp.min + ' ℉';
                document.getElementById('tempValueMax' + index).textContent = forecast.daily[index].temp.max + ' ℉';
                document.getElementById('feels-like-value' + index).textContent = forecast.daily[index].feels_like.day + ' ℉';
                document.getElementById('sunrise-value' + index).textContent = getLocalTime(forecast.daily[index].sunrise, forecast.timezone);
                document.getElementById('sunset-value' + index).textContent = getLocalTime(forecast.daily[index].sunset, forecast.timezone);
                document.getElementById('weather' + index).textContent = forecast.daily[index].weather[0].main;
                let icon = "http://openweathermap.org/img/w/" + forecast.daily[index].weather[0].icon + ".png";
                document.getElementById('daySymbol' + index).src = icon;
            }
        } catch (error) {
            alert("Something went wrong, please try again by refressing the page");
            console.log(error);
        }
    }
    
    return {metricData, imperialData, forecastMetric, forecastImperial};
})();

export {apiData, weatherData};


// convert unix timestamp to readable date of destination timezone
function convertTime(time, zone) {
    const date = new Date(time * 1000);
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: zone}));
}

function getLocalTime(time, zone) {
    const date = convertTime(time, zone);
    return date.toLocaleTimeString();
}

function getDate(time, zone) {
    const date = convertTime(time, zone);
    return date.toLocaleDateString();
}

function convertUnix(time) {
    const date = new Date(time * 1000);
    return date.toLocaleString();
}