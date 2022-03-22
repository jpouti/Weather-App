import './styles.css';
import { apiData } from './weather-data';

// search weather data by inputting location
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', () => {
    let value = document.getElementById('search').value;
    apiData.metricData(value);
});