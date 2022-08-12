import React, { useState } from "react";
import { useEffect } from "react";
import "./IndividualForcast.scss";

const IndividualForcast = ({ weatherInfo }) => {
  const { weather, main, name, sys } = weatherInfo;
  const { description, icon } = weather[0];
  const { temp } = main;
  const { country } = sys;

  const [iconImg, setIconImg] = useState();


  useEffect(() => {
    getIcon();
  }, []);

  const getIcon = async () => {
    let response = await fetch(
      `http://openweathermap.org/img/wn/${icon}@2x.png`
    );

    let data = await response.blob();
    const urlCreator = window.URL || window.webkitURL;
    const iconURL = urlCreator.createObjectURL(data);
    setIconImg(iconURL);
  };

  return (
    <div className="weather-card">
      <div className="weather-card__icon-container">
      <img className="weather-card__icon" src={iconImg} alt={description} />
      </div>
      <h3 className="weather-card__area">{name}</h3>
      <p className="weather-card__country">{country}</p>
      <p className="weather-card__description">{description}</p>
      <p className="weather-card__temp">{temp} degrees celsius</p>
    </div>
  );
};

export default IndividualForcast;
