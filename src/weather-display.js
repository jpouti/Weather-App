import { weatherData } from "./weather-data";

const content = document.querySelector('.content-container');

const displayWeather = (() => {
    //display current weather
    const displayCurrentWeather = () => {
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
    };
    // create default elements for current weather view
    const createCurrentWeather = () => {
        displayWeather.clearElements();
        const weatherContainer = document.createElement('div');
        weatherContainer.className = 'weather-container';

        const tempCard = document.createElement('div');
        tempCard.id = 'temp-card';
        const temp = document.createElement('p');
        temp.textContent = "Temperature:";
        const tempValue = document.createElement('p');
        tempValue.id = 'temp'
        tempCard.appendChild(temp);
        tempCard.appendChild(tempValue);

        const feelsLikeCard = document.createElement('div');
        feelsLikeCard.id = "feels-like-card";
        const feelsLike = document.createElement('p');
        feelsLike.textContent = "Feels like:";
        const feelsLikeValue = document.createElement('p');
        feelsLikeValue.id = 'feels-like'
        feelsLikeCard.appendChild(feelsLike);
        feelsLikeCard.appendChild(feelsLikeValue);

        const weatherCard = document.createElement('div');
        weatherCard.id = 'weather-card'
        const weather = document.createElement('p');
        weather.textContent = "Weather:";
        const weatherValue = document.createElement('p');
        weatherValue.id = 'weather';
        weatherCard.appendChild(weather);
        weatherCard.appendChild(weatherValue);
        
        const gifCard = document.createElement('div');
        gifCard.id = 'gif-container'
        const gif = document.createElement('img');
        gif.id = 'gif';
        gifCard.appendChild(gif);

        weatherContainer.appendChild(tempCard);
        weatherContainer.appendChild(feelsLikeCard);
        weatherContainer.appendChild(weatherCard);
        weatherContainer.appendChild(gifCard);

        content.appendChild(weatherContainer);
    };
    const clearElements = () => {
        const element = document.querySelector('.weather-container');
        if (element != null) {
            while (element.firstChild) {
                element.firstChild.remove();
                element.remove();
            }
        }
    }

    return {displayCurrentWeather, createCurrentWeather, clearElements};
})();

export {displayWeather};