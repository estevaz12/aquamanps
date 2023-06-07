'use client';

import { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

const options = {
  zoom: 8,
  center: { lat: 18.221636650653963, lng: -66.44780217351749 },
  disableDefaultUI: true,
  gestureHandling: 'none',
  zoomControl: false,
  clickableIcons: false,
  mapTypeId: 'satellite',
  keyboardShortcuts: false,
};

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div aria-busy='true' className='map-container'></div>;
  return <CustomMap />;
}

// TODO: make so that it displays the markers once in viewport
// TODO: change marker styling
function CustomMap() {
  return (
    <GoogleMap mapContainerClassName='map-container' options={options}>
      {locations.map((marker, i) => (
        <Delayed key={i} delay={i * 150}>
          <MarkerF
            position={marker.position}
            animation={google.maps.Animation.DROP}
            clickable={false}
          />
        </Delayed>
      ))}
    </GoogleMap>
  );
}

function Delayed({ children, delay }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(true);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, [delay]);

  return visible ? children : null;
}

const locations = [
  {
    title: 'Humacao',
    position: { lat: 18.1171769, lng: -65.7847269 },
  },
  {
    title: 'Río Grande',
    position: { lat: 18.3450502, lng: -65.8322841 },
  },
  {
    title: 'Loíza',
    position: { lat: 18.4401209, lng: -65.87984639999999 },
  },
  {
    title: 'Carolina',
    position: { lat: 18.3958165, lng: -65.9630925 },
  },
  {
    title: 'Trujillo Alto',
    position: { lat: 18.3355953, lng: -66.0106684 },
  },
  {
    title: 'Caguas',
    position: { lat: 18.2387995, lng: -66.03524899999999 },
  },
  {
    title: 'Guaynabo',
    position: { lat: 18.3260175, lng: -66.1058343 },
  },
  {
    title: 'San Juan',
    position: { lat: 18.4670588, lng: -66.1184593 },
  },
  {
    title: 'Dorado',
    position: { lat: 18.4588347, lng: -66.2676683 },
  },
  {
    title: 'San Sebastián',
    position: { lat: 18.3161884, lng: -66.9749731 },
  },
  {
    title: 'Isabela',
    position: { lat: 18.5007797, lng: -67.0226297 },
  },
  {
    title: 'Moca',
    position: { lat: 18.3946688, lng: -67.1132356 },
  },
  {
    title: 'Aguadilla',
    position: { lat: 18.4274454, lng: -67.1540698 },
  },
];
