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
  const { banner, header } = await getLocalizedData<AvelineInnerPagesType>(lang, 'projects.studioApartmentAv');
  const { apartmentsCards } = await getLocalizedData<SharedSectionsProps>(lang, 'shared');
  return (
    <>
      <BannerSection {...banner} className='section-py' overlay />
      <AvelineInnerPageHeader {...header} className='section-py' />
      <SwiperSection imagesArray='AV_STUDIO' title='' />
      <ApartmentsCards {...apartmentsCards} className='section-py' />
    </>
  )
}

export default page



