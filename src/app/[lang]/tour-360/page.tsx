import React from 'react'
import { Locale } from '../../../../i18n-config';
import getLocalizedData from '@/services/getLocalizedData';
import { Tour360PageType } from '@/models/IDictionary/Tour360Page';
import BannerSection from '@/app/_sections/shared/BannerSection';
import TabsTour360Section from '@/app/_sections/tour360/TabsTour360Section';

const Tour360 = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { banner, tabs } = await getLocalizedData<Tour360PageType>(lang, 'tour360');
  return (
    <>
      <BannerSection {...banner} />
      <TabsTour360Section tabs={tabs} className='section-py' />
    </>
  )
}

export default Tour360