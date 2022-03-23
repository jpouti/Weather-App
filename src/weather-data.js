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
            console.log(apiData);
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
            displayWeather.displayCurrentWeather();
        } catch (error) {
            console.log(error);
            alert("Location cannot find, please try to search again!");
        }
        return weatherData;
    }
    
    return {metricData, imperialData};
})();

export {apiData, weatherData};
