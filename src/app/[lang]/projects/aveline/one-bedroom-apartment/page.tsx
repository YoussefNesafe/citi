import getLocalizedData from '@/services/getLocalizedData';
import { Locale } from '../../../../../../i18n-config';
import { AvelineInnerPagesType } from '@/models/IDictionary/ProjectsPages/AvelinePage';
import BannerSection from '@/app/_sections/shared/BannerSection';
import AvelineInnerPageHeader from '@/app/_sections/projects/aveline/AvelineInnerPageHeader';
import SwiperSection from '@/app/_sections/shared/SwiperSection';
import { Suspense } from 'react';

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { banner, header, swipers } = await getLocalizedData<AvelineInnerPagesType>(lang, 'projects.oneBedroomApartmentAv');
  return (
    <>
      <BannerSection {...banner} className='section-py' overlay />
      <AvelineInnerPageHeader {...header} className='section-py' />
      <Suspense>
        {
          swipers?.map((swiper, index) => <SwiperSection key={index + "-swiper"} animateFrom={index % 2 === 0 ? 'left' : 'right'} imagesArray={swiper.arrayMapName} title={swiper.title} className='section-py' />)
        }
      </Suspense>

    </>
  )
}

export default page