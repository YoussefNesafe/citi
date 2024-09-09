import getLocalizedData from '@/services/getLocalizedData';
import React from 'react'
import { Locale } from '../../../../../../i18n-config';
import { SharedSectionsProps } from '@/models/IDictionary';
import ApartmentsCards from '@/app/_sections/projects/aveline/ApartmentsCards';
import { AvelineInnerPagesType } from '@/models/IDictionary/ProjectsPages/AvelinePage';
import BannerSection from '@/app/_sections/shared/BannerSection';
import AvelineInnerPageHeader from '@/app/_sections/projects/aveline/AvelineInnerPageHeader';
import SwiperSection from '@/app/_sections/shared/SwiperSection';

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { banner, header, swipers } = await getLocalizedData<AvelineInnerPagesType>(lang, 'projects.oneBedroomApartmentAv');
  const { apartmentsCards } = await getLocalizedData<SharedSectionsProps>(lang, 'shared');
  return (
    <>
      <BannerSection {...banner} className='section-py' overlay />
      <AvelineInnerPageHeader {...header} className='section-py' />
      {
        swipers?.map((swiper, index) => <SwiperSection key={index + "-swiper"} imagesArray={swiper.arrayMapName} title={swiper.title} className='section-py' />)
      }
      <ApartmentsCards {...apartmentsCards} className='section-py' />
    </>
  )
}

export default page