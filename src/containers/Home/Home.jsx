import React from 'react'
import "./Home.scss"
import ForcastContainer from '../ForcastContainer/ForcastContainer'

const Home = ({currentWeatherInfo}) => {
  return (
    <div className='forcast-container'>
        <ForcastContainer currentWeatherInfo={currentWeatherInfo}/>
    </div>
  )
}

export default Home