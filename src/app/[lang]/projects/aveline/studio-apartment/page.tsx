import getLocalizedData from '@/services/getLocalizedData';
import { Locale } from '../../../../../../i18n-config';
import { SharedSectionsProps } from '@/models/IDictionary';
import { AvelineInnerPagesType } from '@/models/IDictionary/ProjectsPages/AvelinePage';
import BannerSection from '@/app/_sections/shared/BannerSection';
import AvelineInnerPageHeader from '@/app/_sections/projects/aveline/AvelineInnerPageHeader';
import SwiperSection from '@/app/_sections/shared/SwiperSection';
import { Metadata } from 'next';
import { MetaDataType } from "@/models/IDictionary/SharedProps";

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
  // fetch data
  const metadata = await getLocalizedData<MetaDataType>(lang, 'projects.studioApartmentAv.metadata');
  return {
    ...metadata,
  };
}

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { banner, header } = await getLocalizedData<AvelineInnerPagesType>(lang, 'projects.studioApartmentAv');
  return (
    <>
      <BannerSection {...banner} className='section-py' overlay />
      <AvelineInnerPageHeader {...header} className='section-py' />
      <SwiperSection imagesArray='AV_STUDIO' title='' />

    </>
  )
}

export default page



