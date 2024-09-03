import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../../stores/favoritesCities/slice';
import './FavoritiesCities.scss';

export default function FavoritesCities({fetchWeather}) {
    const dispatch = useDispatch();
    let favorites = useSelector((state) => state.favorites);
    
    const handleRemoveFavorite = (city) => {
        dispatch(removeFavorite(city));
    };

    const handleFavoriteCityClick = (e) => {
        e.preventDefault();

        const favoriteCity = e.target.dataset.city;

        fetchWeather(favoriteCity);
    };

    useEffect(() => {
        if (!favorites.length) {
            favorites = localStorage.getItem('favoriteCities');
        }
    }, [favorites]);

    return favorites.length ? (<div className="favorite-cities">
        <h2 className="favorite-cities__heading">Favorite Cities</h2>
        <ul className="favorite-cities__list">
            {favorites.map((city) => (
            <li key={city} className="favorite-cities__item">
                <a href="#" data-city={city} onClick={handleFavoriteCityClick} className="favorite-cities__link">{city}</a>
                <button onClick={() => handleRemoveFavorite(city)}>Remove</button>
            </li>
            ))}
        </ul>
    </div>) : null;
}