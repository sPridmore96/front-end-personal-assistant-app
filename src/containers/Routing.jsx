import React, { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";

const Routing = () => {
  const [latitude, setLatitude] = useState("40.792");
  const [longitude, setLongitude] = useState("74.004");
  const [currentWeatherInfo, setCurrentWeatherInfo] = useState({
  "request": {
    "type": "LatLon",
    "query": "Lat 40.78 and Lon -73.97",
    "language": "en",
    "unit": "m"
  },
  "location": {
    "name": "Guttenberg",
    "country": "United States of America",
    "region": "New Jersey",
    "lat": "40.792",
    "lon": "-74.004",
    "timezone_id": "America/New_York",
    "localtime": "2022-08-11 07:51",
    "localtime_epoch": 1660204260,
    "utc_offset": "-4.0"
  },
  "current": {
    "observation_time": "11:51 AM",
    "temperature": 23,
    "weather_code": 296,
    "weather_icons": [
      "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0017_cloudy_with_light_rain.png"
    ],
    "weather_descriptions": [
      "Light Rain, Mist"
    ],
    "wind_speed": 6,
    "wind_degree": 30,
    "wind_dir": "NNE",
    "pressure": 1014,
    "precip": 0,
    "humidity": 94,
    "cloudcover": 100,
    "feelslike": 25,
    "uv_index": 1,
    "visibility": 4,
    "is_day": "yes"
  }
});

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
    getUserWeatherInfo();
  }, []);

  const getUserWeatherInfo = async () => {  
    const res = await fetch(
      `http://api.weatherstack.com/current?access_key=26fb6c52ec0729cf30f8836e63ee402c&query=${latitude},${longitude}`
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
