import React, { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";

const Routing = () => {
  const citysForCurrentWeather = ["London", "Dubai", "Singapore", "New+York"];

  const [latitude, setLatitude] = useState("40.792");
  const [longitude, setLongitude] = useState("74.004");
  const [currentWeatherInfo, setCurrentWeatherInfo] = useState();
  const [bigCityData, setBigCityData] = useState([]);

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
console.log();
  useEffect(() => {
    getBigCityWeather()
    getUserWeatherInfo();
    getCurrentDate();
  }, [longitude]);

  const getUserWeatherInfo = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKey}&units=metric`
    );
    const data = await res.json();
    setCurrentWeatherInfo(data);
  };
  const getBigCityWeather = async () => {
    citysForCurrentWeather.forEach(async (city) => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`
      );
      const data = await res.json();
      const copyBigCityData = bigCityData;
      console.log(copyBigCityData);
      copyBigCityData.push(data);
      console.log(copyBigCityData);
      setBigCityData(copyBigCityData);
    });
    console.log(bigCityData);
  };

  return (
    <Router>
      <Routes>
        {currentWeatherInfo && (
          <Route
            path="/"
            element={
              <Home
                bigCityData={bigCityData}
                date={date}
                currentWeatherInfo={currentWeatherInfo}
              />
            }
          />
        )}
      </Routes>
    </Router>
  );
};

export default Routing;
