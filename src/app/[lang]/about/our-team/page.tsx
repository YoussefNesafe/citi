import React, { Suspense } from 'react'
import { Locale } from '../../../../../i18n-config';
import getLocalizedData from '@/services/getLocalizedData';
import { OurTeamPageType } from '@/models/IDictionary/AboutPages/OurTeamPage';
import ManagersTeam from '@/app/_sections/about/OurTeam/ManagersTeam';
import TeamMembers from '@/app/_sections/about/OurTeam/TeamMembers';
import OurTeamBanner from '@/app/_sections/about/OurTeam/OurTeamBanner';
import { Metadata } from 'next';
import { MetaDataType } from "@/models/IDictionary/SharedProps";

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
  // fetch data
  const metadata = await getLocalizedData<MetaDataType>(lang, 'about.ourTeam.metadata');
  return {
    ...metadata,
  };
}

const OurTeamPage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { header, CEOMessage, managers, teamMembers } = await getLocalizedData<OurTeamPageType>(lang, 'about.ourTeam');
  return (
    <>
      <Suspense>
        <OurTeamBanner CEOMessage={CEOMessage} header={header} className='section-pt2 section-pb desktop:section-py' />
      </Suspense>
      <Suspense>
        <ManagersTeam managers={managers} className='section-py' />
      </Suspense>
      <Suspense>
        <TeamMembers teamMembers={teamMembers} className='section-py' />
      </Suspense>
    </>
  )
}

export default OurTeamPage