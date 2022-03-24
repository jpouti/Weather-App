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
    // clears elements
    const clearElements = () => {
        const element = document.querySelector('.weather-container');
        if (element != null) {
            while (element.firstChild) {
                element.firstChild.remove();
                element.remove();
            }
        }
        const element2 = document.querySelector('.forecast-container');
        if (element2 != null) {
            while (element2.firstChild) {
                element2.firstChild.remove();
                element2.remove();
            }
        }
    }
    // create elements for 7 day forecast
    const createForecastElements = () => {
        const forecastContainer = document.createElement('div');
        forecastContainer.className = 'forecast-container';

        for (let index = 0; index < 8; index++) {
            let dayCard = document.createElement('div');
            dayCard.id = 'day-card' + index;

            let day = document.createElement('p');
            day.textContent = 'Day: ' + (index + 1);
            day.id = 'day'
            let daySymbol = document.createElement('img');
            daySymbol.id = 'daySymbol';
    
            let tempDay = document.createElement('p');
            tempDay.textContent = 'Day Temperature: ';
            let tempValueDay = document.createElement('p');
            tempValueDay.id = 'tempValueDay' + index;

            let tempMin = document.createElement('p');
            tempMin.textContent = 'Min Temperature: ';
            let tempValueMin = document.createElement('p');
            tempValueMin.id = 'tempValueMin' + index;

            let tempMax = document.createElement('p');
            tempMax.textContent = 'Max Temperature: ';
            let tempValueMax = document.createElement('p');
            tempValueMax.id = 'tempValueMax' + index;
    
            let feelsLike = document.createElement('p');
            feelsLike.textContent = 'Day Feels Like: ';
            let feelsLikeValue = document.createElement('p');
            feelsLikeValue.id = 'feels-like-value'+ index;

            let sunrise = document.createElement('p');
            sunrise.textContent = 'Sunrise: ';
            let sunriseValue = document.createElement('p');
            sunriseValue.id = 'sunrise-value'+ index;

            let sunset = document.createElement('p');
            sunset.textContent = 'Sunset: ';
            let sunsetValue = document.createElement('p');
            sunsetValue.id = 'sunset-value'+ index;

            let weather = document.createElement('p');
            weather.textContent = "Weather: ";
            let weatherValue = document.createElement('p');
            weatherValue.id = 'weather'+ index;

            dayCard.appendChild(day);
            dayCard.appendChild(daySymbol);
            dayCard.appendChild(tempDay);
            dayCard.appendChild(tempValueDay);
            dayCard.appendChild(tempMin);
            dayCard.appendChild(tempValueMin);
            dayCard.appendChild(tempMax);
            dayCard.appendChild(tempValueMax);
            dayCard.appendChild(feelsLike);
            dayCard.appendChild(feelsLikeValue);
            dayCard.appendChild(sunrise);
            dayCard.appendChild(sunriseValue);
            dayCard.appendChild(sunset);
            dayCard.appendChild(sunsetValue);
            dayCard.appendChild(weather);
            dayCard.appendChild(weatherValue);

            forecastContainer.appendChild(dayCard);
            console.log('day created');
        }
        content.appendChild(forecastContainer);
    }

    return {displayCurrentWeather, createCurrentWeather, clearElements, createForecastElements};
})();

export {displayWeather};