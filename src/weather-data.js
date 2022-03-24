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
            let descWeather = apiData.weather[0].description;
            displayWeather.displayCurrentWeather();
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
            let descWeather = apiData.weather[0].description;
            displayWeather.displayCurrentWeather();
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
            console.log(forecast);
            for (let index = 0; index < forecast.daily.length; index++) {
                document.getElementById('tempValueDay' + index).textContent = forecast.daily[index].temp.day;
                document.getElementById('tempValueMin' + index).textContent = forecast.daily[index].temp.min;
                document.getElementById('tempValueMax' + index).textContent = forecast.daily[index].temp.max;
                document.getElementById('feels-like-value' + index).textContent = forecast.daily[index].feels_like.day;
                document.getElementById('sunrise-value' + index).textContent = forecast.daily[index].sunrise;
                document.getElementById('sunset-value' + index).textContent = forecast.daily[index].sunset;
                document.getElementById('weather' + index).textContent = forecast.daily[index].weather[0].main;
            }
        } catch (error) {
            console.log(error);
        }
    }
    const forecastImperial = async function(lat, lon) {
        try {
            const response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=current,minutely,hourly&appid=43b125624357836ed7034f19487d8f60&units=imperial', {mode: 'cors'})
            const forecast = await response.json();
            console.log(forecast);
            for (let index = 0; index < forecast.daily.length; index++) {
                document.getElementById('tempValueDay' + index).textContent = forecast.daily[index].temp.day;
                document.getElementById('tempValueMin' + index).textContent = forecast.daily[index].temp.min;
                document.getElementById('tempValueMax' + index).textContent = forecast.daily[index].temp.max;
                document.getElementById('feels-like-value' + index).textContent = forecast.daily[index].feels_like.day;
                document.getElementById('sunrise-value' + index).textContent = forecast.daily[index].sunrise;
                document.getElementById('sunset-value' + index).textContent = forecast.daily[index].sunset;
                document.getElementById('weather' + index).textContent = forecast.daily[index].weather[0].main;
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    return {metricData, imperialData, forecastMetric, forecastImperial};
})();

export {apiData, weatherData};
