import React, {useEffect, useState} from 'react'
import "./WeatherSnipItem.scss"
import { Link } from 'react-router-dom';

const WeatherSnipItem = ({forecastInfo, getIcon, index}) => {

const [iconSrc, setIconSrc] = useState()

    const {weather, main, dt_txt} = forecastInfo;
    const {icon, description} = weather[0];

    const ukDt_txt = dt_txt.slice(5,10).split("-").reverse().join("-");

useEffect(() => {
    getIcon(icon, setIconSrc)
}, []); 

return (
    <div key={index} className='forecast-item'>
        <img src={iconSrc} alt="" />
        <p>{ukDt_txt}</p>
        <p className='forecast-item__temp'>{Math.floor(main.temp)}℃</p>
        <p>{description}</p>
    </div>
  )
}

export default WeatherSnipItem