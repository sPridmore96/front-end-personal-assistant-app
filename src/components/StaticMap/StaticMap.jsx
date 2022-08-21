import React, { useState, useRef, useEffect } from 'react';
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from '@react-google-maps/api';
import './StaticMap.scss';
import { FaLocationArrow, FaTimes } from 'react-icons/fa';

const StaticMap = ({ latitude, longitude, currentWeatherInfo, userWorkPlace }) => {
  const center = { lat: latitude, lng: longitude };
  const mapsKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const [map, setMap] = useState(/**@type google.maps.Map*/ (null));
  // eslint-disable-next-line no-undef
  const [currentTravelMode, setCurrentTravelMode] = useState();
  const [directions, setDirections] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [origin, setOrigin] = useState();

  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: mapsKey,
    libraries: ['places'],
  });
  if (!isLoaded) {
    return <div>Loading</div>;
  }

  const calculateRoute = async () => {

    // eslint-disable-next-line no-undef
    const directionService = new google.maps.DirectionsService();
    const results = await directionService.route({
      origin: `${latitude}, ${longitude}`,
      destination: `${userWorkPlace}`,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });

    setDirections(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  };

  calculateRoute()


  return (
    <div className="static-map">
      <div className="static-map__controls">

        <div className="static-map__controls-bottom-section">
          <span>Distance: {distance}</span>
          <span>Duration: {duration}</span>
          <button
            onClick={() => map.panTo(center)}
            className="static-map__location-button"
          >
            <FaLocationArrow />
          </button>
        </div>
      </div>
      <GoogleMap
        zoom={15}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        options={{
            streetViewControl: false,
            fullscreenControl: false,
            gestureHandling: "greedy"
            
        }}
        on
        onLoad={(map) => setMap(map)}
      >
        <Marker position={center} />
        <DirectionsRenderer directions={directions} />
      </GoogleMap>
    </div>
  );
};

export default StaticMap