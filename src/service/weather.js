import axios from 'axios';

const WeatherRequest = 'https://api.openweathermap.org/data/2.5/weather?q=',
      ForecastRequest = 'https://api.openweathermap.org/data/2.5/forecast?q=',
      API = `&appid=23271dccf1d7bbdd2be2257e4fc7c822`;

const weather = {
    getCityWeather: (city) => axios(WeatherRequest + city + API).then(({data}) => data),
    getForecast: (city) => axios(ForecastRequest + city + API).then(({data}) => data),
}

export default weather;