import React from 'react'
import "./ForcastContainer.scss"
import IndividualForcast from '../../components/IndividualForcast/IndividualForcast'

const ForcastContainer = ({currentWeatherInfo, bigCityData, weatherBigCities, getIcon}) => {

  return (
    <div>
       {/* {bigCityData.map((city,index) => <IndividualForcast key={index} weatherInfo={city}/>)} */}
       {weatherBigCities.map((city,index) => <IndividualForcast getIcon={getIcon} key={index} weatherInfo={city}/>)}
    </div>
  )
}

export default ForcastContainer