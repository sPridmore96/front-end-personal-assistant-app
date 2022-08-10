import React, { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";

const Routing = () => {
  const [latitude, setLatitude] = useState("40.7831");
  const [longitude, setLongitude] = useState("-73.9712");
  const [currentWeatherInfo, setCurrentWeatherInfo] = useState();

  const findUser = () => {
    if (!"geolocation" in navigator) {
      alert("geolocation IS NOT available");
    }
    navigator.geolocation.watchPosition((position) => {
      setLongitude(position.coords.longitude);
      setLatitude(position.coords.latitude);
    });
  };

  useEffect(() => {
    getUserWeatherInfo();
  }, [longitude, latitude]);

  const getUserWeatherInfo = async () => {
    findUser();
    const res = await fetch(
      `http://api.weatherstack.com/current?access_key=246d97bb6b2e7b0db36bc411697ca258&query=${latitude},${longitude}`
    );
    const data = await res.json();
    setCurrentWeatherInfo(data);
  };

  return (
    <Router>
      <Routes>
        {currentWeatherInfo && (
          <Route
            path="/"
            element={<Home currentWeatherInfo={currentWeatherInfo} />}
          />
        )}
      </Routes>
    </Router>
  );
};

export default Routing;
