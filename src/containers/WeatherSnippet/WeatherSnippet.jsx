import React, {useState, useEffect} from 'react';
import './WeatherSnippet.scss';
import { Link } from 'react-router-dom';
import WeatherSnipItem from '../../components/WeatherSnipItem/WeatherSnipItem';


const WeatherSnippet = ({ id, getIcon, localForecast }) => {

  const { list } = localForecast;
  const dailyLocalForecastArray = [
    ...new Map(list.map((item) => [item.dt_txt.slice(0, 10), item])).values(),
  ];

  return (
    <div className='weather-snip'>
      {dailyLocalForecastArray.map((forecast, index) => (
          <WeatherSnipItem key={index} getIcon={getIcon} index={index} forecastInfo={forecast} />
      ))}
    </div>
  );
};

export default WeatherSnippet;
