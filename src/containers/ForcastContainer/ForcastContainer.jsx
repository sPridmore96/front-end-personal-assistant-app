import React from 'react'
import "./ForcastContainer.scss"
import IndividualForcast from '../../components/IndividualForcast/IndividualForcast'

const ForcastContainer = ({currentWeatherInfo}) => {
  return (
    <div>
       <IndividualForcast currentWeatherInfo={currentWeatherInfo} />
    </div>
  )
}

export default ForcastContainer