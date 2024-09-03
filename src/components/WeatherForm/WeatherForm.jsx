import './WeatherForm.scss';

export default function WeatherForm({city, setCity, fetchWeather}) {
    
    const handleInputChange = (e) => {
        setCity(e.target.value);
    }

    const handleFormSubmit = e => {
        e.preventDefault();

        fetchWeather(city);
    }

    return <form onSubmit={handleFormSubmit} className="weather-form">
        <input type="search" name="weather-search" id="weather-search" required onChange={handleInputChange} className="weather-form__input" />
        <button className="weather-form__btn">Search</button>
    </form>;
}