import { HomePageProps } from "@/models/IDictionary/HomePage";
import { Locale } from "../../../i18n-config";
import getLocalizedData from "@/services/getLocalizedData";
import BannerSectionHomePage from "../_sections/homepage/BannerSectionHomePage";
import CountUpSection from "../_sections/homepage/CountUpSection";
import WhatMakesUsDifferent from "../_sections/homepage/WhatMakesUsDifferent";
import VisitExperienceCenterSection from "../_sections/homepage/VisitExperienceCenterSection";
import OurJourney from "../_sections/homepage/OurJourney";
import LatestNews from "../_sections/shared/LatestNews";
import { SharedSectionsProps } from "@/models/IDictionary";
import OurTeamSection from "../_sections/homepage/OurTeamSection";
import { Suspense } from "react";
import AlluraPopUpSection from "../_sections/shared/AlluraPopUpSection";
import { Metadata } from 'next';
import { MetaDataType } from "@/models/IDictionary/SharedProps";
import AboutOurProjects from "../_sections/homepage/AboutOurProjects";

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
  // fetch data
  const metadata = await getLocalizedData<MetaDataType>(lang, 'homePage.metadata');
  return {
    ...metadata,
  };
}
export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
  const { banner, counterCards, whatMakesUsDifferent, aboutOurProjects, visitExperienceCenter, ourJourney, ourTeam } = await getLocalizedData<HomePageProps>(lang, 'homePage');
  const { latestNews, alluraPopUp } = await getLocalizedData<SharedSectionsProps>(lang, 'shared');

  return (
    <>
      <BannerSectionHomePage {...banner} lang={lang} />
      <CountUpSection cards={counterCards} className="section-py" />
      <WhatMakesUsDifferent {...whatMakesUsDifferent} className="section-py" />
      <AboutOurProjects {...aboutOurProjects} lang={lang} className="section-py" />
      <VisitExperienceCenterSection {...visitExperienceCenter} className="section-py" />
      <OurJourney {...ourJourney} className="section-py" />
      <Suspense>
        <OurTeamSection {...ourTeam} className="section-py" />
      </Suspense>
      <LatestNews {...latestNews} className="section-py" />
      {/* <AlluraPopUpSection {...alluraPopUp} /> */}
    </>
  );
}
