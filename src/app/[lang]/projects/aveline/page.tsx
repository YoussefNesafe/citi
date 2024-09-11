import BannerSection from '@/app/_sections/shared/BannerSection'
import getLocalizedData from '@/services/getLocalizedData';
import { Locale } from '../../../../../i18n-config';
import { AvelinePageType } from '@/models/IDictionary/ProjectsPages/AvelinePage';
import AvelineJvcSection from '@/app/_sections/projects/aveline/AvelineJvcSection';
import ProjectInfo from '@/app/_sections/projects/aveline/ProjectInfo';
import DiscoverCommunity from '@/app/_sections/projects/aveline/DiscoverCommunity';
import SwiperSection from '@/app/_sections/shared/SwiperSection';
import ApartmentsCards from '@/app/_sections/projects/aveline/ApartmentsCards';
import { SharedSectionsProps } from '@/models/IDictionary';
import MapWrapper from '@/app/_sections/shared/MapWrapper';

const mapProps = {
  latitude: 25.06931369197056,
  longitude: 55.208100306851115,
  locationName: 'Aveline'
}

const AvelinePage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { banner, avelineJvc, projectInfo, discoverCommunity, amenities, exterior, lobby } = await getLocalizedData<AvelinePageType>(lang, 'projects.aveline');
  const { apartmentsCards } = await getLocalizedData<SharedSectionsProps>(lang, 'shared');

  return (
    <>
      <BannerSection {...banner} className='section-py' overlay />
      <AvelineJvcSection {...avelineJvc} className='section-py ' />
      <ProjectInfo {...projectInfo} className='section-py' />
      <DiscoverCommunity {...discoverCommunity} className='section-py' />
      <MapWrapper {...mapProps} />
      <SwiperSection className="section-py" {...amenities} imagesArray={'AV_AMENITIES'} />
      <SwiperSection className="section-py" {...exterior} imagesArray={'AV_EXTERIOR'} imageClassName='desktop:h-[30vw]' slideClassName='desktop:flex-[0_0_25vw]' />
      <SwiperSection className="section-py" {...lobby} imagesArray={'AV_LOBBY'} />
      <ApartmentsCards {...apartmentsCards} className='section-py' />
    </>
  )
}

export default AvelinePage