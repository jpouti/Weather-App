import { weatherData } from "./weather-data";

const displayWeather = (() => {
    const displayElements = () => {
        const country = document.querySelector('#country');
        const city = document.querySelector('#city');
        const temp = document.querySelector('#temp');
        const feelsLike = document.querySelector('#feels-like');
        const weather = document.querySelector('#weather');

        country.textContent = weatherData.country;
        city.textContent = weatherData.name;
        temp.textContent = weatherData.temp;
        feelsLike.textContent = weatherData.feels_like;
        weather.textContent = weatherData.weather;
    }
    return {displayElements};
})();

export {displayWeather};