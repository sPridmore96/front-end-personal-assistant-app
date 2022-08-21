import React, { useState } from "react";
import "./Home.scss";
import Map from "../../components/Map/Map";
import WeatherSnippet from "../WeatherSnippet/WeatherSnippet";
import NavBar from "../../components/NavBar/NavBar";
import StaticMap from "../../components/StaticMap/StaticMap";

const Home = ({
  longitude,
  latitude,
  currentWeatherInfo,
  getIcon,
  localForecast,
  userName,
  userWorkPlace,
}) => {
  return (
    <div className="home">
      <h1 className="home__title">Hey {userName}</h1>
      <p>Here is some off todays info!</p>
      <h2 className="home__subheader">You're Commute</h2>
      <div className="home__map">
        <StaticMap
          currentWeatherInfo={currentWeatherInfo}
          latitude={latitude}
          longitude={longitude}
          userWorkPlace={userWorkPlace}
        />
      </div>
      <h2 className="home__subheader">Your local Forecast</h2>

      <div className="home__weather">
        <WeatherSnippet
          localForecast={localForecast}
          getIcon={getIcon}
          id={localForecast.list.forEach((item) => item.id)}
        />
      </div>
      <NavBar />
    </div>
  );
};

export default Home;
