const API_URL = 'https://api.openweathermap.org/data/2.5';

const API_KEY = '2b908f8fecb474e6ff76ad3d17f82a8e';

const IMG_URL = 'http://openweathermap.org/img/wn/';

function getCurrentWeatherApi(city){
    return `${API_URL}/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}

function getForecastWeatherApi(city) {
    return `${API_URL}/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}
