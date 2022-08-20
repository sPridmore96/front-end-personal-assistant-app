import React, { useState, useRef } from 'react';
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api';
import './Map.scss';
import { FaLocationArrow, FaTimes } from 'react-icons/fa';

const Map = ({ latitude, longitude, currentWeatherInfo }) => {
  const center = { lat: latitude, lng: longitude };
  const mapsKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const [map, setMap] = useState(/**@type google.maps.Map*/ (null));
  // eslint-disable-next-line no-undef
  const [currentTravelMode, setCurrentTravelMode] = useState();
  const [directions, setDirections] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [origin, setOrigin] = useState();

  const { name } = currentWeatherInfo;

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
    if (destinationRef.current.value === '') {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionService = new google.maps.DirectionsService();
    const results = await directionService.route({
      origin: `${latitude}, ${longitude}`,
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });

    setDirections(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  };
  const clearRoute = () => {
    setDirections(null);
    setDistance('');
    setDuration('');
    destinationRef.current.value = '';
  };

  return (
    <div className="map">
      <div className="map__controls">
        <div className="map__controls-top-section">
          <p>{name}</p>

          <div className="map__input-container">
            <Autocomplete>
              <input
                className="map__destination-input"
                type="text"
                placeholder="Destination"
                ref={destinationRef}
              />
            </Autocomplete>
          </div>
          <button className="map__calculate-route" onClick={calculateRoute}>
            Calculate Route
          </button>
          <button onClick={clearRoute} className="map__clear-route">
            X
          </button>
        </div>
        <div className="map__controls-bottom-section">
          <span>Distance: {distance}</span>
          <span>Duration: {duration}</span>
          <button
            onClick={() => map.panTo(center)}
            className="map__location-button"
          >
            <FaLocationArrow />
          </button>
        </div>
      </div>
      <GoogleMap
        center={center}
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
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </div>
  );
};

export default Map;
