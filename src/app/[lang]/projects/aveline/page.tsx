import BannerSection from '@/app/_sections/shared/BannerSection'
import getLocalizedData from '@/services/getLocalizedData';
import { Locale } from '../../../../../i18n-config';
import { AvelinePageType } from '@/models/IDictionary/ProjectsPages/AvelinePage';
import ProjectInfo from '@/app/_sections/projects/aveline/ProjectInfo';
import DiscoverCommunity from '@/app/_sections/projects/aveline/DiscoverCommunity';
import SwiperSection from '@/app/_sections/shared/SwiperSection';
import { SharedSectionsProps } from '@/models/IDictionary';
import MapWrapper from '@/app/_sections/shared/MapWrapper';
import { Suspense } from 'react';
import { Metadata } from 'next';
import { MetaDataType } from "@/models/IDictionary/SharedProps";
import ProjectBriefSection from '@/app/_sections/shared/ProjectBriefSection';
import ProjectsPagesForm from '@/app/_sections/shared/ProjectsPagesForm';

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
  // fetch data
  const metadata = await getLocalizedData<MetaDataType>(lang, 'projects.aveline.metadata');
  return {
    ...metadata,
  };
}

const mapProps = {
  latitude: 25.06931369197056,
  longitude: 55.208100306851115,
  locationName: 'Aveline'
}

const AvelinePage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { banner, projectBrief, projectInfo, discoverCommunity, amenities, exterior, lobby } = await getLocalizedData<AvelinePageType>(lang, 'projects.aveline');

  const { mapHeader, projectsPagesContactUsForm, errorMessages, countrieslist } = await getLocalizedData<SharedSectionsProps>(lang, 'shared');

  return (
    <>
      <BannerSection {...banner} className='section-py' overlay />
      <Suspense>
        <ProjectBriefSection {...projectBrief} className='section-py ' />
      </Suspense>
      <Suspense>
        <ProjectInfo {...projectInfo} className='section-py' />
      </Suspense>
      <Suspense>
        <DiscoverCommunity {...discoverCommunity} className='section-py' />
      </Suspense>
      <MapWrapper {...mapProps} header={mapHeader} />
      <Suspense>
        <ProjectsPagesForm
          className='section-py'
          {...projectsPagesContactUsForm}
          leadSource='AVELINE - CONTACT US'
          countrieslist={countrieslist}
          errorMessages={errorMessages}
        />
      </Suspense>
      <Suspense>
        <SwiperSection className="section-py" {...amenities} imagesArray={'AV_AMENITIES'} animateFrom='left' />
      </Suspense>
      <Suspense>
        <SwiperSection className="section-py" {...exterior} imagesArray={'AV_EXTERIOR'} imageClassName='desktop:h-[30vw]' slideClassName='desktop:flex-[0_0_25vw]' animateFrom='right' />
      </Suspense>
      <Suspense>
        <SwiperSection className="section-py" {...lobby} imagesArray={'AV_LOBBY'} animateFrom='left' />
      </Suspense>
    </>
  )
}

export default AvelinePage