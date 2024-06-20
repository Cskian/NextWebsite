'use client'

import React from 'react';
import { GoogleMap, LoadScript, Marker,useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '65%',
  height: '400px'
};

const center = {
  lat: 20.762609490984016, 
  lng: 73.02065781700311
};


const MapComponent = () => {
    const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBFKhzmxYSvax0EUU3G-b-icE6luJ82T-E"
  })
  return (
    <div className='main-container'>

   
    <LoadScript googleMapsApiKey="AIzaSyBFKhzmxYSvax0EUU3G-b-icE6luJ82T-E">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
    </div>
  );
};

export default MapComponent;
