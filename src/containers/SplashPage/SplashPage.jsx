import React from 'react';
import './SplashPage.scss';
import { Link } from 'react-router-dom';
import { SiHomeassistant } from 'react-icons/si';

const SplashPage = () => {
  return (
    <div className="splash">
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
          />
        </div>
        <div className="splash__work">
          <label className="splash__label" htmlFor="">
            Enter a town or city near your place of work
          </label>
          <input
            placeholder="Nottingham"
            className="splash__input"
            type="text"
          />
        </div>
      </div>
      <Link className="splash__button" to="/home">
        Continue
      </Link>
    </div>
  );
};

export default SplashPage;
