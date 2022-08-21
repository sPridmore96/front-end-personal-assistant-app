import React, { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import IndividualMoreInfo from './IndividualMoreInfo/IndividualMoreInfo';
import weatherBigCities from '../assets/Data/Data';
import Weather from './Weather/Weather';
import preSetForecast from '../assets/Data/PreSetForecast';
import preSetCurrentWeather from '../assets/Data/PreSetCurrentWeather';
import MapsPage from './MapsPage/MapsPage';
import SplashPage from './SplashPage/SplashPage';

const Routing = () => {
  const citysForCurrentWeather = ['London', 'Dubai', 'Singapore', 'New+York'];

  const [userName, setUserName] = useState('')
  const [userWorkPlace, setUserWorkPlace] = useState()
  const [bigCityData, setBigCityData] = useState([]);
  const [latitude, setLatitude] = useState('40.792');
  const [longitude, setLongitude] = useState('74.004');
  const [localForecast, setLocalForecast] = useState(preSetForecast);
  const [currentWeatherInfo, setCurrentWeatherInfo] =
    useState(preSetCurrentWeather);

  const weatherAPIKey = process.env.REACT_APP_WEATHER_API_KEY;

  const [date, setDate] = useState();
  const getCurrentDate = () => {
    const newDate = new Date();
    const newDay = newDate.toLocaleDateString();
    setDate(newDay);
  };

  const findUser = () => {
    if (!'geolocation' in navigator) {
      alert('geolocation IS NOT available');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      setLongitude(position.coords.longitude);
      setLatitude(position.coords.latitude);
    });
  };
  useEffect(() => {
    // getBigCityWeather()
    findUser();
    getUserWeatherInfo();
    getCurrentDate();
    getUserWeatherForecast();
  }, [longitude]);

  const getUserWeatherInfo = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherAPIKey}&units=metric`
    );
    const data = await res.json();
    weatherBigCities.unshift(data);
    setCurrentWeatherInfo(data);
  };
  const getUserWeatherForecast = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${weatherAPIKey}&units=metric`
    );
    const data = await res.json();
    setLocalForecast(data);
  };

  // const getBigCityWeather = async () => {
  //   citysForCurrentWeather.forEach(async (city) => {
  //     const res = await fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAPIKey}&units=metric`
  //     );
  //     const data = await res.json();
  //     const copyBigCityData = bigCityData;
  //     console.log(copyBigCityData);
  //     copyBigCityData.push(data);
  //     console.log(copyBigCityData);
  //     setBigCityData(copyBigCityData);
  //   });
  //   console.log(bigCityData);
  // };

  const getIcon = async (iconToFind, stateToSet) => {
    let response = await fetch(
      `http://openweathermap.org/img/wn/${iconToFind}@2x.png`
    );
    let data = await response.blob();
    const urlCreator = window.URL || window.webkitURL;
    const iconURL = urlCreator.createObjectURL(data);
    stateToSet(iconURL);
  };
  console.log(userWorkPlace);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage setUserName={setUserName} setUserWorkPlace={setUserWorkPlace} />} />
        {currentWeatherInfo && (
          <Route
            path="/home"
            element={
              <Home
                // bigCityData={bigCityData}
                weatherBigCities={weatherBigCities}
                date={date}
                getIcon={getIcon}
                currentWeatherInfo={currentWeatherInfo}
                longitude={longitude}
                latitude={latitude}
                localForecast={localForecast}
                userName={userName}
                userWorkPlace={userWorkPlace}
              />
            }
          />
        )}
        <Route
          path="/weather/:moreWeatherInfoId"
          element={
            <IndividualMoreInfo
              getIcon={getIcon}
              weatherInfo={weatherBigCities}
            />
          }
        />
        <Route
          path="/weather"
          element={
            <Weather
              weatherBigCities={weatherBigCities}
              date={date}
              getIcon={getIcon}
              currentWeatherInfo={currentWeatherInfo}
            />
          }
        />
        <Route
          path="/maps"
          element={
            <MapsPage
              currentWeatherInfo={currentWeatherInfo}
              latitude={latitude}
              longitude={longitude}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default Routing;
