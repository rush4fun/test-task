import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../../stores/favoritesCities/slice';
import ForecastInfoList from './ForecastInfoList';
import {formatCelsius} from '../../utils/utils';

export default function WeatherInfoList({weatherInfo, forecastInfo}) {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);

    const handleAddFavorite = () => {
        if (weatherInfo && !favorites.includes(weatherInfo.name)) {
          dispatch(addFavorite(weatherInfo.name));
        }
    };

    return Object.keys(weatherInfo).length ? (<>
      <ul className="weather-info-list">
          {weatherInfo.name ? (<li className="weather-info-list__item"><strong>City: </strong>{ weatherInfo.name }</li>) : null}
          {weatherInfo.main.temp ? (<li className="weather-info-list__item"><strong>Temperature: </strong>{ formatCelsius(weatherInfo.main.temp) }°C</li>) : null}
          {weatherInfo.main.humidity ? (<li className="weather-info-list__item"><strong>Humidity: </strong>{ weatherInfo.main.humidity }%</li>) : null}
          {weatherInfo.wind.speed ? (<li className="weather-info-list__item"><strong>Wind speed: </strong>{ weatherInfo.wind.speed } metre/sec</li>) : null}
      </ul>
      <button onClick={handleAddFavorite} className="weather-info-list__btn">Add to Favorites</button>
      <ForecastInfoList forecastInfo={forecastInfo} />
    </>) : null;
}