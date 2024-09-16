import LongArrowUp from '@/app/_components/icons/LongArrowUp'
import { HomePageBannerProps } from '@/models/IDictionary/HomePage'
import Image from 'next/image'
import React from 'react'

const FirstLayer = ({ firstLayerData, sloganBox }: Omit<HomePageBannerProps, 'secondLayerData' | 'thirdLayerData'>) => {
  return (
    <div className='firstLayer h-screen w-auto overflow-hidden'>
      <div className='sloganBox absolute translate-x-0 opacity-0 bottom-[23.3vw] tablet:bottom-[25vw] desktop:bottom-[3.56vw] z-[2] max-w-[52.425vw] tablet:max-w-[37.5vw] desktop:max-w-[28.236vw] bg-black/50 rounded-[2.796vw] tablet:rounded-[1.5vw] desktop:rounded-[0.624vw] p-[2.33vw] tablet:p-[2.5vw] desktop:p-[1.04vw] backdrop-blur-sm'>
        <h2 className='textShadow text-primary-600 mb-[1.864vw] tablet:mb-[1.5vw] desktop:mb-[0.624vw]
 text-[3.262vw] tablet:text-[3.75vw] desktop:text-[1.56vw] font-semibold'>{sloganBox.title}</h2>
        <div className='text-[4.194vw] desktop:leading-[1.2] tablet:text-[3vw] desktop:text-[2.6vw] font-semibold text-white textShadow'>{sloganBox.description}</div>
      </div>
      <Image {...firstLayerData.image} alt={firstLayerData.image.alt} priority className='min-h-screen background w-full object-cover h-auto desktop:h-full ' />
    </div>
  )
}

export default FirstLayer