import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './IndividualForecast.scss';

const IndividualForecast = ({ weatherInfo, getIcon }) => {
  const { weather, main, name, sys, id } = weatherInfo;
  const { description, icon } = weather[0];
  const { temp } = main;
  const { country } = sys;

  const [iconImg, setIconImg] = useState();

  useEffect(() => {
    getIcon(icon, setIconImg);
  }, []);

  return (
    <Link to={`${id}`} className="weather-card">
      <div className="weather-card__icon-container">
        <img className="weather-card__icon" src={iconImg} alt={description} />
      </div>
      <h3 className="weather-card__area">{name}</h3>
      <p className="weather-card__country">{country}</p>
      <p className="weather-card__description">{description}</p>
      <p className="weather-card__temp">{Math.floor(temp)} degrees celsius</p>
    </Link>
  );
};

export default IndividualForecast;
