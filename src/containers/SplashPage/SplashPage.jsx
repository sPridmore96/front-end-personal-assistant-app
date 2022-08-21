import React, { useState } from "react";
import "./SplashPage.scss";
import { Link } from "react-router-dom";
import { SiHomeassistant } from "react-icons/si";
import {
  Autocomplete,
  useJsApiLoader,
  GoogleMap,
} from "@react-google-maps/api";

const SplashPage = ({ setUserName, setUserWorkPlace }) => {
  const mapsKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: mapsKey,
    libraries: ['places'],
  });
  if (!isLoaded) {
    return <div>Loading</div>;
  }

  return (
    <form className="splash">
      <h1 className="splash__title">Welcome To You're new PA</h1>
      <SiHomeassistant className="splash__icon" />
      <div className="splash__input-container">
        <div className="splash__name">
          <label className="splash__label" htmlFor="">
            Enter you're name
          </label>
          <input
            placeholder="Joe blog's"
            className="splash__input"
            type="text"
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        <div className="splash__work">
          <label className="splash__label" htmlFor="">
            Enter your works postcode
          </label>
          <Autocomplete>
            <input
              placeholder="Nottingham"
              className="splash__input"
              type="text"
              onChange={(event) => setUserWorkPlace(event.target.value)}
            />
          </Autocomplete>
        </div>
      </div>
      <Link className="splash__button" to="/home">
        Continue
      </Link>
    </form>
  );
};

export default SplashPage;
