import React, { useState } from 'react';
import './Home.scss';
import Map from '../../components/Map/Map';
import WeatherSnippet from '../WeatherSnippet/WeatherSnippet';
import NavBar from '../../components/NavBar/NavBar';

const Home = ({
  longitude,
  latitude,
  currentWeatherInfo,
  getIcon,
  localForecast,
}) => {
  return (
    <div className="home">
      <h1 className="home__title">Hey Name</h1>
      <p>Here is some off todays info!</p>
      <h2 className="home__subheader">You're Commute</h2>
      <Map
        currentWeatherInfo={currentWeatherInfo}
        latitude={latitude}
        longitude={longitude}
      />
      <h2 className="home__subheader">Your local Forecast</h2>

      <div className="home__weather">
        <WeatherSnippet
          localForecast={localForecast}
          getIcon={getIcon}
          id={localForecast.list.forEach((item) => {})}
        />
      </div>
      <NavBar />
    </div>
  );
};

export default Home;
