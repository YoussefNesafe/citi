import Button from '@/app/_components/Button'
import { cn } from '@/lib/utils'
import { BannerSectionType } from '@/models/IDictionary/SharedProps'
import Image from 'next/image'
import React from 'react'

const BannerSection = ({ backgroundImage, buttons, overlay, image, className, ...props }: BannerSectionType) => {
  return (
    <section className={cn('h-screen w-full px-0 tablet:px-0 desktop:px-0 flex items-center justify-center', className)} {...props}>

      <Image
        {...backgroundImage}
        alt={backgroundImage.alt}
        priority
        className='top-0 left-0 w-full h-full object-cover absolute'
      />
      {overlay && <div className='w-full h-full bg-[#00000080] absolute top-0 left-0' />}
      <div className='flex flex-col items-center justify-center gap-[10.252vw] tablet:gap-[5.5vw] desktop:gap-[2.288vw]'>
        <Image {...image} alt={image.alt} className='w-[81.55vw] tablet:w-[87.5vw] desktop:w-[48.412vw] h-auto' />
        <div className='flex flex-col tablet:flex-row gap-[4.66vw] tablet:gap-[5vw] desktop:gap-[2.08vw] w-full tablet:w-fit'>
          {
            buttons.map((button, index) => <Button size='lg' theme='primary' className='w-full tablet:w-fit' {...button} key={index + '-button'} />)
          }
        </div>
      </div>
    </section>
  )
}

export default BannerSection