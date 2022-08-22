import React, { useState, useRef, useEffect } from 'react';
import ForecastContainer from '../ForecastContainer/ForecastContainer';
import './Weather.scss';
import { Autocomplete, useJsApiLoader } from '@react-google-maps/api';
const mapsKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const weatherAPIKey = process.env.REACT_APP_WEATHER_API_KEY;

const Weather = ({
  weatherBigCities,
  currentWeatherInfo,
  date,
  bigCityData,
  getIcon,
}) => {

  const [newWeatherInfo, setNewWeatherInfo] = useState()

  const weatherSearchRef = useRef();
  const handleWeatherSearch = async () => {
    const userInput = weatherSearchRef.current.value;
    console.log(userInput);
    if (userInput !== '') {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${weatherAPIKey}&units=metric`
      );
      console.log(res.status);
      if (res.status !== 200) {
        alert('Enter a valid location');
      } else {
        const data = await res.json();
        setNewWeatherInfo(data)
        weatherBigCities.unshift(data);
      }
      weatherSearchRef.current.value = ""
    }
  };

  const clearSearch = () => {
    weatherSearchRef.current.value = ""
  }
  useEffect(() => {
    handleWeatherSearch()
  }, [newWeatherInfo]);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: mapsKey,
    libraries: ['places'],
  });
  if (!isLoaded) {
    return <div>Loading</div>;
  }

  return (
    <div className="weather">
      <h1 className="weather__title">Current Weather</h1>
      <p className="weather__date">{date}</p>
      <div className="weather__forecast-container">
        <label htmlFor="">Search for a location</label>
        <div className='weather__input-button-container'>
        <Autocomplete className="weather__input-container">
          <input
            ref={weatherSearchRef}
            className="weather__input"
            type="text"
          />
        </Autocomplete>
        <button onClick={clearSearch} className='weather__clear-Location'>X</button>
        </div>
        <p className="weather__input-header">
          Find Weather for the above location
        </p>
        <button onClick={handleWeatherSearch} className="weather__button">
          Add to The list
        </button>
        <ForecastContainer
          getIcon={getIcon}
          weatherBigCities={weatherBigCities}
          bigCityData={bigCityData}
          currentWeatherInfo={currentWeatherInfo}
        />
      </div>
    </div>
  );
};

export default Weather;
