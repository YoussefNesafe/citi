import Button from '@/app/_components/Button'
import { HomePageBannerProps } from '@/models/IDictionary/HomePage'
import Image from 'next/image'
import React from 'react'

const LastLayer = ({ thirdLayerData: { button, image, sloganText, title } }: Pick<HomePageBannerProps, 'thirdLayerData'>) => {
  return (
    <div className='lastLayer absolute top-0 left-0 h-screen w-full '>
      <div className=' contactus opacity-0 bottom-0 translate-y-[25%] absolute left-0 w-full z-[2] text-center'>
        <h2
          dangerouslySetInnerHTML={{ __html: title }}
          className='max-w-[80%] desktop:max-w-[52.728vw] mb-[14vw] tablet:mb-[12vw] desktop:mb-[5vw] text-white font-lexendExa m-auto font-bold text-[11.65vw] tablet:text-[10vw] desktop:text-[5.72vw] textShadow leading-none'
        />
        <div className='w-full bottom-0 bg-white flex flex-col justify-center items-center pb-[6.99vw] tablet:pb-[3.75vw] desktop:pb-[1.56vw]'>
          <Button theme='secondary' {...button} className='-translate-y-[6.058vw] tablet:-translate-y-[3.375vw] desktop:-translate-y-[1.976vw]' />
          <p className='max-w-[90%] w-full text-[3.728vw] tablet:text-[2.25vw] desktop:text-[1.25vw]'>{sloganText}</p>
        </div>
      </div>
      <Image {...image} alt={image.alt} priority className='w-full min-h-screen object-cover h-auto desktop:scale-[0.8]' />
    </div>
  )
}

export default LastLayer