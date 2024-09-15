import dynamic from 'next/dynamic';
import React from 'react'
import { MapComponentProps } from './MapLocation';
import SectionHeader from '@/app/_components/SectionHeader';
import { SectionHeaderProps } from '@/models/IDictionary/SharedProps';

const MapWrapper = ({ header, ...props }: MapComponentProps & { header: SectionHeaderProps; }) => {

  const MapComponent = dynamic(() => import('./MapLocation'), {
    ssr: false,
  });
  return (
    <>
      <div className='text-center section-pt'>
        <SectionHeader {...header} />
      </div>
      <MapComponent {...props} />
    </>
  )
}

export default MapWrapper