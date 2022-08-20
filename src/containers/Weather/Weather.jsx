import React, { useState } from 'react';
import ForecastContainer from '../ForecastContainer/ForecastContainer';
import './Weather.scss';

const Weather = ({
  weatherBigCities,
  currentWeatherInfo,
  date,
  bigCityData,
  getIcon,
}) => {
  return (
    <div className="weather">
      <h1 className="weather__title">Current Weather</h1>
      <p className="weather__date">{date}</p>
      <div className="weather__forecast-container">
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
