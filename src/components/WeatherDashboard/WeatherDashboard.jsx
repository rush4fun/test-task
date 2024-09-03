import { useState } from "react";
import WeatherForm from '../WeatherForm/WeatherForm';
import WeatherInfoList from '../WeatherInfoList/WeatherInfoList';
import FavoritesCities from '../FavoritesCities/FavoritesCities';
import service from "../../service/weather";

export default function WeatherDashboard() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [city, setCity] = useState('');
    const [weatherInfo, setWeatherInfo] = useState({});
    const [forecastInfo, setForecastInfo] = useState([]);

    const fetchWeather = async (city) => {
        setLoading(true);
        setError(null);

        try {
            const weatherInfo = await service.getCityWeather(city),
                  forecastInfo = await service.getForecast(city);

            setWeatherInfo(weatherInfo);
            setForecastInfo(forecastInfo.list.slice(0, 5));
        } catch (error) {
            setWeatherInfo({});
            setForecastInfo([]);
            setError('City not found');
        } finally {
            setLoading(false);
        }
    }
  
    return <div className="weather-dashboard">
        <h1 className="weather-dashboard__heading">Weather dashboard</h1>
        <WeatherForm city={city} setCity={setCity} fetchWeather={fetchWeather} />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <WeatherInfoList weatherInfo={weatherInfo} forecastInfo={forecastInfo}/>
        <FavoritesCities fetchWeather={fetchWeather}/>
    </div>;
  }