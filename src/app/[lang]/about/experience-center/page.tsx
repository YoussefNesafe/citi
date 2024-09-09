import { ExperienceCenterPageType } from '@/models/IDictionary/AboutPages/ExperienceCenter';
import getLocalizedData from '@/services/getLocalizedData';
import React, { Suspense } from 'react'
import { Locale } from '../../../../../i18n-config';
import ExperienceCenterBannerSection from '@/app/_sections/about/experience-center/ExperienceCenterBannerSection';
import VisitExperienceCenterSection from '@/app/_sections/homepage/VisitExperienceCenterSection';
import FeaturesOfExperienceCenter from '@/app/_sections/about/experience-center/FeaturesOfExperienceCenter';

const ExperienceCenterPage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { banner, visitExperienceCenter, features } = await getLocalizedData<ExperienceCenterPageType>(lang, 'about.experienceCenter');
  return (
    <>
      <ExperienceCenterBannerSection {...banner} />
      <VisitExperienceCenterSection {...visitExperienceCenter} className="section-py" />
      <Suspense>
        <FeaturesOfExperienceCenter {...features} className='section-py' />
      </Suspense>
    </>
  )
}

export default ExperienceCenterPage