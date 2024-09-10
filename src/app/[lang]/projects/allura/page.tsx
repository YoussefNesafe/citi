import AlluraPopUpSection from '@/app/_sections/shared/AlluraPopUpSection';
import MapWrapper from '@/app/_sections/shared/MapWrapper';
import { AlluraPopUpType } from '@/models/IDictionary/SharedProps';
import getLocalizedData from '@/services/getLocalizedData';
import React from 'react'
import { Locale } from '../../../../../i18n-config';

const mapProps = {
  latitude: 25.06244118496213,
  longitude: 55.21884912822761,
  locationName: 'Allura'
}

const AlluraPage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const alluraPopUpData = await getLocalizedData<AlluraPopUpType>(lang, 'shared.alluraPopUp');


  return (
    <>
      <div className='h-[400px]' />
      <MapWrapper {...mapProps} />
      <AlluraPopUpSection {...alluraPopUpData} />
    </>
  )
}

export default AlluraPage