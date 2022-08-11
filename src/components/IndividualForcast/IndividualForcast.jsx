import React from 'react'
import "./IndividualForcast.scss"

const IndividualForcast = ({currentWeatherInfo}) => {
    const {location, current} = currentWeatherInfo;
    const {name, country, region,localtime} = location
    const {observation_time, temperature, weather_description, weather_icons} = current;
  return (
    <div className='weather-card'>
        <img className='weather-card__icon' src={weather_icons[0]} alt={weather_description}/>
        <h3 className='weather-card__area'>{name}</h3>
        <p className='weather-card__time'>{localtime}</p>
        <p className='weather-card__region' >{region}</p>
        <p className='weather-card__temp' >{temperature} degrees celsius</p>
    </div>
  )
}

export default IndividualForcast