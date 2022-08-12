import React from 'react'
import "./ForcastContainer.scss"
import IndividualForcast from '../../components/IndividualForcast/IndividualForcast'

const ForcastContainer = ({currentWeatherInfo, bigCityData}) => {

  return (
    <div>
       <IndividualForcast weatherInfo={currentWeatherInfo} />
       {bigCityData.map((city,index) => <IndividualForcast key={index} weatherInfo={city}/>)}
    </div>
  )
}

export default ForcastContainer