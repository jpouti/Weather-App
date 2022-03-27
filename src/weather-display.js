import { weatherData } from "./weather-data";

const content = document.querySelector('.content-container');

const displayWeather = (() => {
    //display current weather
    const displayCurrentWeather = (unit) => {
        const country = document.querySelector('#country');
        const city = document.querySelector('#city');
        const temp = document.querySelector('#temp');
        const feelsLike = document.querySelector('#feels-like');
        const weather = document.querySelector('#weather');
        const weatherSymbol = document.querySelector('#weatherSymbol');
        const wind = document.querySelector('#wind');
        const title = document.querySelector('.day');

        title.textContent = weatherData.time;
        country.textContent = weatherData.country;
        city.textContent = weatherData.name;
        temp.textContent = weatherData.temp + unit;
        feelsLike.textContent = weatherData.feels_like + unit;
        weather.textContent = weatherData.weather;
        wind.textContent = weatherData.wind + " m/s";
        weatherSymbol.src = "http://openweathermap.org/img/w/" + weatherData.icon + ".png"
    };
    // create default elements for current weather view
    const createCurrentWeather = () => {
        displayWeather.clearElements();
        const weatherContainer = document.createElement('div');
        weatherContainer.className = 'weather-container';

        const titleCard = document.createElement('div');
        const title = document.createElement('h4');
        title.className = 'day';
        titleCard.appendChild(title);

        const weatherSymbol = document.createElement('img');
        weatherSymbol.id = 'weatherSymbol';
        titleCard.appendChild(weatherSymbol);

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

        const windCard = document.createElement('div');
        windCard.id = "wind-card";
        const wind = document.createElement('p');
        wind.textContent = "Wind:";
        const windValue = document.createElement('p');
        windValue.id = 'wind'
        windCard.appendChild(wind);
        windCard.appendChild(windValue);

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

        weatherContainer.appendChild(titleCard);
        weatherContainer.appendChild(tempCard);
        weatherContainer.appendChild(feelsLikeCard);
        weatherContainer.appendChild(windCard);
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
            day.id = 'day' + index;
            day.className = 'day';
            let daySymbol = document.createElement('img');
            daySymbol.id = 'daySymbol' + index;
    
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
        }
        content.appendChild(forecastContainer);
    }

    return {displayCurrentWeather, createCurrentWeather, clearElements, createForecastElements};
})();

export {displayWeather};