import { HomePageBannerProps } from '@/models/IDictionary/HomePage'
import Image from 'next/image'
import React from 'react'

const MidLayer = ({ secondLayerData: { image, luxuary } }: Pick<HomePageBannerProps, 'secondLayerData'>) => {
  return (
    <div className='midLayer absolute top-0 left-0 h-screen w-auto '>
      <h2
        dangerouslySetInnerHTML={{ __html: luxuary }}
        className='luxuryBox w-fit desktop:max-w-[47.736vw] z-[2] text-[11.65vw] tablet:text-[10vw] desktop:text-[7.28vw] opacity-0 font-bold textShadow text-white absolute bottom-[11.65vw] tablet:bottom-[6.25vw] desktop:bottom-[4.56vw] right-[6.99vw] tablet:right-[5vw] desktop:right-[2.6vw] rtl:left-[6.99vw] rtl:tablet:left-[5vw] rtl:desktop:left-[2.6vw] rtl:right-auto rtl:tablet:right-auto rtl:desktop:right-auto translate-x-[11.65vw] rtl:-translate-x-[11.65vw] leading-tight tablet:leading-none tablet:translate-x-[6.25vw] desktop:translate-x-[2.6vw] rtl:tablet:-translate-x-[6.25vw] rtl:desktop:-translate-x-[2.6vw]'
      />
      <Image {...image} alt={image.alt} priority className='w-full object-cover h-auto min-h-screen  desktop:scale-[0.7] desktop:-bottom-[2.8vw]' />
      <div className='h-full w-full absolute top-0 left-0 bg-dark/50 overlay' />
    </div>
  )
}

export default MidLayer