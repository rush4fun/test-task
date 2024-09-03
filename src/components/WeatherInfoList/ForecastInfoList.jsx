import './ForecastInfoList.scss';
import {formatCelsius} from '../../utils/utils';

export default function ForecastInfoList({forecastInfo}) {

    return forecastInfo.length ? (<div className="forecast-info">
        <h3 className="forecast-info__heading">5-Day Forecast</h3>
        <ul className="forecast-info__list">
        {forecastInfo.map((day, index) => (
            <li key={index} className="forecast-info__day">
                <ul className="forecast-info-day__list">
                    {day.dt_txt ? (<li className="forecast-info-day__item"><strong>Date: </strong>{day.dt_txt}</li>) : null}
                    {day.main.temp ? (<li className="forecast-info-day__item"><strong>Temperature: </strong>{formatCelsius(day.main.temp)}°C</li>) : null}
                    {day.main.humidity ? (<li className="forecast-info-day__item"><strong>Humidity: </strong>{day.main.humidity}%</li>) : null}
                    {day.wind.speed ? (<li className="forecast-info-day__item"><strong>Wind speed: </strong>{day.wind.speed} metre/sec</li>) : null}
                </ul>
            </li>
        ))}
        </ul>
    </div>) : null;
}