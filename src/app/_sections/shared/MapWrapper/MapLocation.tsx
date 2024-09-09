"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

// Fixing Leaflet's default icon issue in Next.js
//@ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

export interface MapComponentProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  locationName?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ latitude, longitude, zoom = 50, locationName = 'Location' }) => {
  useEffect(() => {//@ts-ignore
    import('leaflet/dist/leaflet.css');
  }, []);



  return (
    <MapContainer center={[latitude, longitude]} zoom={zoom} scrollWheelZoom={false} className='h-[93.2vw] tablet:h-[62.5vw] desktop:h-[28.6vw] z-[2] w-full desktop:my-[3.12vw]'
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
        attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
      />
      <Marker position={[latitude, longitude]}>
        <Popup>{locationName}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
