import getLocalizedData from '@/services/getLocalizedData';
import React, { Suspense } from 'react'
import { Locale } from '../../../../../../i18n-config';
import { AvelineInnerPagesType } from '@/models/IDictionary/ProjectsPages/AvelinePage';
import BannerSection from '@/app/_sections/shared/BannerSection';
import SwiperSection from '@/app/_sections/shared/SwiperSection';
import AvelineInnerPageHeader from '@/app/_sections/projects/aveline/AvelineInnerPageHeader';

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { banner, swipers, header } = await getLocalizedData<AvelineInnerPagesType>(lang, 'projects.twoBedroomApartmentAv');
  return (
    <>
      <BannerSection {...banner} className='section-py' overlay />
      <AvelineInnerPageHeader {...header} className='section-py' />
      <Suspense>
        {
          swipers?.map((swiper, index) => <SwiperSection key={index + "-swiper2"} animateFrom={index % 2 === 0 ? 'left' : 'right'} imagesArray={swiper.arrayMapName} title={swiper.title} className='section-py' />)
        }
      </Suspense>
    </>
  )
}

export default page