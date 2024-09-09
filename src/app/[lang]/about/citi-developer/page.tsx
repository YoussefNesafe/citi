import LatestNews from '@/app/_sections/shared/LatestNews'
import { SharedSectionsProps } from '@/models/IDictionary';
import getLocalizedData from '@/services/getLocalizedData';
import React, { Suspense } from 'react'
import { Locale } from '../../../../../i18n-config';
import BannerSection from '@/app/_sections/shared/BannerSection';
import { CitiDeveloperPageType } from '@/models/IDictionary/AboutPages/CitiDeveloper';
import OverDecadeOfTrust from '@/app/_sections/about/citiDeveloper/OverDecadeOfTrust';
import OurPhilosophy from '@/app/_sections/about/citiDeveloper/OurPhilosophy';
import OurValues from '@/app/_sections/about/citiDeveloper/OurValues';
import LegacySection from '@/app/_sections/about/citiDeveloper/LegacySection';

const CitiDeveloperPage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { banner, overDecadeOfTrust, legacy, ourPhilosophy, ourValues } = await getLocalizedData<CitiDeveloperPageType>(lang, 'about.citiDeveloper');
  const { latestNews, } = await getLocalizedData<SharedSectionsProps>(lang, 'shared');
  return (
    <>
      <BannerSection {...banner} className='section-py' />
      <OverDecadeOfTrust {...overDecadeOfTrust} className="section-py desktop:flex-row-reverse" />
      <Suspense>
        <LegacySection {...legacy} className="section-py" />
      </Suspense>
      <OurPhilosophy {...ourPhilosophy} className="section-py" />
      <OurValues {...ourValues} className="section-py" />
      <LatestNews {...latestNews} className="section-py" />
    </>
  )
}

export default CitiDeveloperPage