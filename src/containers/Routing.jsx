import React, { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import IndividualMoreInfo from "./IndividualMoreInfo/IndividualMoreInfo";
import weatherBigCities from "../assets/Data/Data";

const Routing = () => {
  const citysForCurrentWeather = ["London", "Dubai", "Singapore", "New+York"];

  const [latitude, setLatitude] = useState("40.792");
  const [longitude, setLongitude] = useState("74.004");
  const [bigCityData, setBigCityData] = useState([]);
  const [currentWeatherInfo, setCurrentWeatherInfo] = useState({
    "coord": {
      "lon": -0.1257,
      "lat": 51.5085
    },
    "weather": [
      {
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 28.37,
      "feels_like": 27.65,
      "temp_min": 25.83,
      "temp_max": 29.06,
      "pressure": 1002,
      "humidity": 35
    },
    "visibility": 10000,
    "wind": {
      "speed": 5.14,
      "deg": 250
    },
    "clouds": {
      "all": 100
    },
    "dt": 1660575810,
    "sys": {
      "type": 1,
      "id": 1414,
      "country": "GB",
      "sunrise": 1660538751,
      "sunset": 1660591466
    },
    "timezone": 3600,
    "id": 2643743,
    "name": "London",
    "cod": 200
  });

  const APIKey = "dff4e5058776c1edf08ef53658f7b232";

  const [date, setDate] = useState();
  const getCurrentDate = () => {
    const newDate = new Date();
    const newDay = newDate.toLocaleDateString();
    setDate(newDay);
  };

  const findUser = () => {
    if (!"geolocation" in navigator) {
      alert("geolocation IS NOT available");
    }
    navigator.geolocation.getCurrentPosition((position) => {
      setLongitude(position.coords.longitude);
      setLatitude(position.coords.latitude);
    });
  };
  findUser();
  useEffect(() => {
    // getBigCityWeather()
    getUserWeatherInfo();
    getCurrentDate();
  }, [longitude]);

  const getUserWeatherInfo = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKey}&units=metric`
    );
    const data = await res.json();
    weatherBigCities.unshift(data)
    setCurrentWeatherInfo(data);
  };
  // const getBigCityWeather = async () => {
  //   citysForCurrentWeather.forEach(async (city) => {
  //     const res = await fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`
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

  return (
    <Router>
      <Routes>
        {currentWeatherInfo && (
          <Route
            path="/"
            element={
              <Home
                // bigCityData={bigCityData}
                weatherBigCities={weatherBigCities}
                date={date}
                getIcon={getIcon}
                currentWeatherInfo={currentWeatherInfo}
              />
            }
          />
        )}
        <Route path="/:moreWeatherInfoId" element={<IndividualMoreInfo getIcon={getIcon} weatherInfo={weatherBigCities}/>}></Route>
      </Routes>
    </Router>
  );
};


export default Routing;
