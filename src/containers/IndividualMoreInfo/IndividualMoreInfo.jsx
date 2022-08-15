import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './IndividualMoreInfo.scss';

const IndividualMoreInfo = ({ weatherInfo, getIcon }) => {
  const [individualInfo, setIndividualInfo] = useState([
    {
      coord: {
        lon: -0.1257,
        lat: 51.5085,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      base: 'stations',
      main: {
        temp: 27.1,
        feels_like: 27.51,
        temp_min: 24.95,
        temp_max: 30.08,
        pressure: 1002,
        humidity: 50,
      },
      visibility: 10000,
      wind: {
        speed: 3.6,
        deg: 220,
        gust: 9.26,
      },
      clouds: {
        all: 92,
      },
      dt: 1660559762,
      sys: {
        type: 2,
        id: 268730,
        country: 'GB',
        sunrise: 1660538751,
        sunset: 1660591466,
      },
      timezone: 3600,
      id: 2643743,
      name: 'London',
      cod: 200,
    },
  ]);
  const [sunRise, setSunRise] = useState('');
  const [sunSet, setSunset] = useState('');
  const [iconImg, setIconImg] = useState('');
  const [pageLoaded, setPageLoaded] = useState(false);
  const [morningTimeZoneNum, setMorningTimeZoneNum] = useState();
  const [eveningTimeZoneNum, setEveningTimeZoneNum] = useState();

  const getWeatherId = () => {
    const weatherId = window.location.pathname.split('').splice(1).join('');
    const foundWeatherInfo = weatherInfo.filter((location) => {
      return location.id.toString().includes(weatherId);
    });
    setIndividualInfo(foundWeatherInfo);
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
    individualInfo[0];
  const { lon, lat } = coord;
  const { description, icon } = weather[0];
  const { temp, feels_like, temp_min, temp_max, humidity } = main;
  const { country, sunrise, sunset } = sys;

  return (
    <div className="more-info">
      <div className='more-info__welcome'>
        <h2 className="more-info__title">{name}</h2>
        <Link to={"/"} className="more-info__back-button">Back</Link>
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
