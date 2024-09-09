"use client";

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { HomePageBannerProps } from '@/models/IDictionary/HomePage';
import LastLayer from './components/LastLayer';
import MidLayer from './components/MidLayer';
import FirstLayer from './components/FirstLayer';
import { animateHomePageBanner } from './animations';


const BannerSectionHomePage = ({ firstLayerData, secondLayerData, sloganBox, thirdLayerData }: HomePageBannerProps) => {
  const wrapperRef = useRef(null);
  useGSAP(
    () => animateHomePageBanner(wrapperRef),
    {
      scope: wrapperRef,
    }
  );


  return (
    <section className='px-0 tablet:px-0 desktop:px-0 h-screen w-full overflow-hidden z-20 ' ref={wrapperRef}>
      <LastLayer thirdLayerData={thirdLayerData} />
      <MidLayer secondLayerData={secondLayerData} />
      <FirstLayer firstLayerData={firstLayerData} sloganBox={sloganBox} />
    </section>
  );
}

export default BannerSectionHomePage;
