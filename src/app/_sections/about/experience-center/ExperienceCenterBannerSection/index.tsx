import Button from '@/app/_components/Button';
import { cn } from '@/lib/utils';
import { ExperienceCenterBannerType } from '@/models/IDictionary/AboutPages/ExperienceCenter';
import ImageWrapper from '@/app/_components/ImageWrapper'
import React from 'react'



const ExperienceCenterBannerSection = ({ backgroundImage, buttons, header, className, ...props }: ExperienceCenterBannerType) => {

  return (
    <section className={cn('h-screen w-full px-0 tablet:px-0 desktop:px-0 flex items-center justify-center', className)} {...props}>
      <ImageWrapper
        {...backgroundImage}
        alt={backgroundImage.alt}
        priority
        className='top-0 left-0 w-full h-full object-cover object-left-top desktop:object-top absolute'
      />
      <div className='flex flex-col gap-[4.66vw] tablet:gap-[2.5vw] desktop:gap-[1.56vw] tablet:rounded-tr-[12.5vw] desktop:rounded-tr-[6.76vw] bg-linear-dark-banner absolute bottom-0 left-0 tablet:max-w-[81.25vw] desktop:max-w-[47.528vw] py-[6.99vw] px-[3.495vw] tablet:px-[7.5vw] tablet:py-[5vw] desktop:px-[7.8vw] desktop:py-[4.16vw] backdrop-blur-sm'>
        <div className='text-primary-600 text-[4.66vw] tablet:text-[3vw] desktop:text-[1.872vw] font-semibold'>{header.title}</div>
        <p className='text-[3.728vw] tablet:text-[2.5vw] desktop:text-[1.56vw] text-white font-medium'>{header.description}</p>
        <div className='flex gap-[4.66vw] tablet:gap-[5vw] desktop:gap-[2.08vw] w-full tablet:w-fit'>
          {
            buttons.map((button, index) => <Button size='md' theme='primary' {...button} key={index + '-button'} />)
          }
        </div>
      </div>
    </section>
  )
}

export default ExperienceCenterBannerSection