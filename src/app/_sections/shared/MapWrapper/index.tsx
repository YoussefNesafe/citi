import dynamic from 'next/dynamic';
import React from 'react'
import { MapComponentProps } from './MapLocation';

const MapWrapper = ({ ...props }: MapComponentProps) => {

  const MapComponent = dynamic(() => import('./MapLocation'), {
    ssr: false,
  });
  return (
    <MapComponent {...props} />
  )
}

export default MapWrapper