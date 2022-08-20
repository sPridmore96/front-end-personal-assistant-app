import React from 'react';
import './MapsPage.scss';
import Map from '../../components/Map/Map';
import NavBar from '../../components/NavBar/NavBar';
import { BiMap } from 'react-icons/bi';

const MapsPage = ({ currentWeatherInfo, latitude, longitude }) => {
  return (
    <div className='maps'>
   <BiMap className='maps__icon'/>
    <h2 className='maps__title'>Google maps</h2>
    <p className='maps__subtitle'>Search for a Destination</p>
    <div className='maps__map'>
      <Map
        currentWeatherInfo={currentWeatherInfo}
        latitude={latitude}
        longitude={longitude}
      />
      </div>
      <NavBar/>
    </div>
  );
};

export default MapsPage;
