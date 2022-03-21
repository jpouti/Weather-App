// store the weather data
const weatherData = {
    temp: 0,
    feels_like: 0,
    name: "",
    country: "",
    weather: "",
};

// get weather data from api
const apiData = (() => {
    const metricData = async function(q) {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + q + '&appid=43b125624357836ed7034f19487d8f60&units=metric', {mode: 'cors'})
        const apiData = await response.json();
        weatherData.temp = apiData.main.temp;
        weatherData.feels_like = apiData.main.feels_like;
        weatherData.name = apiData.name;
        weatherData.country = apiData.sys.country;
        weatherData.weather = apiData.weather[0].main;
        return weatherData;
    }
    const imperialData = async function(q) {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + q + '&appid=43b125624357836ed7034f19487d8f60&units=imperial', {mode: 'cors'})
        const apiData = await response.json();
        weatherData.temp = apiData.main.temp;
        weatherData.feels_like = apiData.main.feels_like;
        weatherData.name = apiData.name;
        weatherData.country = apiData.sys.country;
        weatherData.weather = apiData.weather[0].main;
        return weatherData;
    }
    return {metricData, imperialData};
})();

export {apiData, weatherData};
