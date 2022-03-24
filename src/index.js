import './styles.css';
import { apiData, weatherData } from './weather-data';
import { displayWeather } from './weather-display';

const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');

celsius.addEventListener('click', () => {
    console.log('celsius');
    celsius.className = 'celsius';
    if (fahrenheit.className != "") {
        fahrenheit.className = "";
        console.log(fahrenheit.className);
    }
});

fahrenheit.addEventListener('click', () => {
    console.log('fahrenheit');
    fahrenheit.className = 'fahrenheit';
    if (celsius.className != "") {
        celsius.className = "";
        console.log(celsius.className);
    }
});

// search weather data by inputting location
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', () => {
    displayCurrentWeather();
});

const forecastBtn = document.getElementById('forecast-btn');
forecastBtn.addEventListener('click', () => {
    displayForecast();
});

const currentBtn = document.getElementById('current-btn');
currentBtn.addEventListener('click', () => {
    displayCurrentWeather();
});

function displayCurrentWeather() {
    if (celsius.className === 'celsius') {
        displayWeather.clearElements();
        displayWeather.createCurrentWeather();
        let value = document.getElementById('search').value;
        apiData.metricData(value);
    } else {
        displayWeather.clearElements();
        displayWeather.createCurrentWeather();
        let value = document.getElementById('search').value;
        apiData.imperialData(value);
    }
};

function displayForecast() {
    if (celsius.className === 'celsius') {
        apiData.forecastMetric(weatherData.lat, weatherData.lon);
        displayWeather.clearElements();
        displayWeather.createForecastElements();
    } else {
        apiData.forecastImperial(weatherData.lat, weatherData.lon);
        displayWeather.clearElements();
        displayWeather.createForecastElements();
    }
};