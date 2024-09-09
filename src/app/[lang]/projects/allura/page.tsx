import MapWrapper from '@/app/_sections/shared/MapWrapper';
import React from 'react'

const mapProps = {
  latitude: 25.06244118496213,
  longitude: 55.21884912822761,
  locationName: 'Allura'
}

const AlluraPage = () => {
  return (
    <>
      <div className='h-[400px]' />
      <MapWrapper {...mapProps} />
    </>
  )
}

export default AlluraPage