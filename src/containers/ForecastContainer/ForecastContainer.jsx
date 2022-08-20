import React from 'react';
import './ForecastContainer.scss';
import IndividualForecast from '../../components/IndividualForecast/IndividualForecast';
import NavBar from '../../components/NavBar/NavBar';

const ForecastContainer = ({
  currentWeatherInfo,
  bigCityData,
  weatherBigCities,
  getIcon,
}) => {
  return (
    <>
    <div>
      {/* {bigCityData.map((city,index) => <IndividualForecast key={index} weatherInfo={city}/>)} */}
      {weatherBigCities.map((city, index) => (
        <IndividualForecast getIcon={getIcon} key={index} weatherInfo={city} />
      ))}
    </div>
      <NavBar/>
      </>
  );
};

export default ForecastContainer;
