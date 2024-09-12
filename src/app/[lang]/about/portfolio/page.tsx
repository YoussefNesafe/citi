import React, { Suspense } from 'react'
import { Locale } from '../../../../../i18n-config';
import getLocalizedData from '@/services/getLocalizedData';
import { PortfolioPageType } from '@/models/IDictionary/AboutPages/Portfolio';
import BannerPortfolio from '@/app/_sections/about/Portfolio/BannerPortfolio';
import HighlightedImages from '@/app/_sections/about/Portfolio/HighlightedImages';
import { PORTFOLIO_IMAGES } from '@/constants/portfolio_images';
import { Metadata } from 'next';
import { MetaDataType } from "@/models/IDictionary/SharedProps";

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
  // fetch data
  const metadata = await getLocalizedData<MetaDataType>(lang, 'about.portfolio.metadata');
  return {
    ...metadata,
  };
}

const PortfolioPage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { banner } = await getLocalizedData<PortfolioPageType>(lang, 'about.portfolio');
  return (
    <>
      <BannerPortfolio {...banner} />
      <Suspense>
        <HighlightedImages {...PORTFOLIO_IMAGES} className='section-py' />
      </Suspense>
    </>
  )
}

export default PortfolioPage