import React, {useState} from "react";
import "./Home.scss";
import ForcastContainer from "../ForcastContainer/ForcastContainer";

const Home = ({ currentWeatherInfo, date,bigCityData }) => {

  return (
    <div className="home">
        <h1 className="home__title">Current Weather</h1>
        <p className="home__date">{date}</p>
      <div className="home__forcast-container">
        <ForcastContainer bigCityData={bigCityData} currentWeatherInfo={currentWeatherInfo} />
      </div>
    </div>
  );
};

export default Home;
