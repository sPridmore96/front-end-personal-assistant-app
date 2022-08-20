import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './IndividualMoreInfo.scss';
import preSetCurrentWeather from '../../assets/Data/PreSetCurrentWeather';

const IndividualMoreInfo = ({ weatherInfo, getIcon }) => {
  const [individualInfo, setIndividualInfo] = useState(preSetCurrentWeather);
  const [sunRise, setSunRise] = useState('');
  const [sunSet, setSunset] = useState('');
  const [iconImg, setIconImg] = useState('');
  const [pageLoaded, setPageLoaded] = useState(false);
  const [morningTimeZoneNum, setMorningTimeZoneNum] = useState();
  const [eveningTimeZoneNum, setEveningTimeZoneNum] = useState();

  const getWeatherId = () => {
    const weatherId = window.location.pathname.split('').splice(9).join('');
    const foundWeatherInfo = weatherInfo.filter((location) => {
      return location.id.toString().includes(weatherId);
    });
    const foundWeatherObj = foundWeatherInfo.shift()
    setIndividualInfo(foundWeatherObj);
  };

  const convertTime = (
    unixCode,
    timeOfDayStateToSet,
    timeOfDay,
    timeZone,
    setTimeZoneNum,
    timeZoneNum
  ) => {
    const newTime = new Date(unixCode * 1000);
    const stringTime = timeZone.toString().includes('-');

    if (stringTime) {
      const newZone = parseInt(
        timeZone.toString().split('').splice(1).join('')
      );
      const newTimeZone = newZone / 60 / 60;
      if (newTime.getHours() - newTimeZone < 0) {
        let newHrs = 24 - newTimeZone - 1;

        setTimeZoneNum(newHrs);
      } else if (newTime.getHours() + newTimeZone > 24) {
        let newHrs = 0 + newTimeZone - 1;
        setTimeZoneNum(newHrs);
      } else {
        let newHrs = newTime.getHours() - newTimeZone - 1;
        setTimeZoneNum(newHrs);
      }
      timeOfDayStateToSet(
        `${timeZoneNum}:${newTime.getMinutes()} ${timeOfDay} `
      );
    } else {
      const newTimeZone = timeZone / 60 / 60 - 1;
      setTimeZoneNum(newTime.getHours() - newTimeZone);
      timeOfDayStateToSet(
        `${timeZoneNum}:${newTime.getMinutes()} ${timeOfDay} `
      );
    }
  };

  useEffect(() => {
    getWeatherId();
    getIcon(icon, setIconImg);
    convertTime(
      sunrise,
      setSunRise,
      'AM',
      timezone,
      setMorningTimeZoneNum,
      morningTimeZoneNum
    );
    convertTime(
      sunset,
      setSunset,
      'PM',
      timezone,
      setEveningTimeZoneNum,
      eveningTimeZoneNum
    );
    setPageLoaded(true);
  }, [pageLoaded]);

  const { coord, weather, main, visibility, sys, name, timezone } =
    individualInfo;
  const { lon, lat } = coord;
  const { description, icon } = weather[0];
  const { temp, feels_like, temp_min, temp_max, humidity } = main;
  const { country, sunrise, sunset } = sys;

  return (
    <div className="more-info">
      <div className='more-info__welcome'>
        <h2 className="more-info__title">{name}</h2>
        <Link to={"/weather"} className="more-info__back-button">Back</Link>
        <p className="more-info__sub-header">
          {country} <br /> Latitude : {lat} <br /> Longitude : {lon}
        </p>
      </div>
      <div className="more-info__img">
        <img src={iconImg} alt="" />
      </div>
      <div className="more-info__overview">
        <p>Todays Current Weather Looks Like : {description}</p>
        <p>Sun Rise : {sunRise}</p>
        <p>Sun Set : {sunSet} </p>
        <p>Visibility : {Math.floor(visibility / 1000)}Km </p>
      </div>
      <div className="more-info__temps">
        <p>Todays temperature : {Math.floor(temp)}°C</p>
        <p>Feels Like : {Math.floor(feels_like)}°C</p>
        <p>Todays top temperature : {Math.floor(temp_max)}°C</p>
        <p>Todays lowest temperature : {Math.floor(temp_min)}°C</p>
        <p>Humidity level : {humidity} / 100</p>
      </div>
    </div>
  );
};

export default IndividualMoreInfo;
