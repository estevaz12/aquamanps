'use client';

import { useMemmo } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  KmlLayer,
} from '@react-google-maps/api';

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <KmlLayerMap />;
}

function KmlLayerMap() {
  return (
    <GoogleMap
      zoom={8}
      center={{ lat: 18.46633, lng: -66.10572 }}
      mapContainerClassName='map-container'
    >
      <KmlLayer url='http://drive.google.com/file/d/1GfHtw954wQJQwzCavYqqOs6GOtlKDTtE/view?usp=sharing' />
    </GoogleMap>
  );
}
