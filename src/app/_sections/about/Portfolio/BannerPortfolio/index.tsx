import Button from '@/app/_components/Button';
import { cn } from '@/lib/utils';
import { BannerPortfolioType } from '@/models/IDictionary/AboutPages/Portfolio'
import Image, { ImageProps } from 'next/image'
import React from 'react'


const ImagesRow = ({ images, className, reverse }: { images: ImageProps[]; className?: string; reverse?: boolean }) => {
  return <div className={cn('flex flex-col shrink-0 flex-nowrap gap-[2.33vw] tablet:gap-[1.25vw] desktop:gap-[0.52vw]', className)}>
    <div className={cn('flex flex-col flex-nowrap gap-[2.33vw] tablet:gap-[1.25vw] desktop:gap-[0.52vw]', reverse ? 'animate-imageSlideShowReverse' : 'animate-imageSlideShow')}>
      {
        images.map((image, index) => <Image {...image} alt={image.alt} key={index + "-img"} className='shrink-0 w-[46.6vw] tablet:w-[37.5vw] desktop:w-[20.8vw] h-auto object-cover' />)
      }
    </div>
    <div className={cn('flex  flex-col flex-nowrap gap-[2.33vw] tablet:gap-[1.25vw] desktop:gap-[0.52vw]', reverse ? 'animate-imageSlideShowReverse' : 'animate-imageSlideShow')}>
      {
        images.map((image, index) => <Image {...image} alt={image.alt} key={index + "-img"} className='shrink-0 w-[46.6vw] tablet:w-[37.5vw] desktop:w-[20.8vw] h-auto object-cover' />)
      }

    </div>
  </div>
}



const BannerPortfolio = ({ backgroundImages, buttons, description, subtitle, title }: BannerPortfolioType) => {
  return (
    <section className='h-screen bg-dark  overflow-hidden flex items-center'>
      <div className='flex flex-nowrap gap-[2.33vw] tablet:gap-[1.25vw] desktop:gap-[0.52vw]  absolute desktop:right-0 rotate-12 tablet:rotate-6 desktop:-top-[3.64vw]'>
        <ImagesRow images={backgroundImages.firstRow} />
        <ImagesRow images={backgroundImages.secondRow} reverse />
        <ImagesRow images={backgroundImages.thirdRow} />
      </div>
      <div className='absolute top-0 left-0 w-full h-full bg-linear-dark-banner' />
      <div>
        <div className='text-primary-600 font-semibold text-[3.728vw] tablet:text-[3.25vw] desktop:text-[1.56vw]'>{subtitle}</div>
        <div className='text-white font-extrabold text-[8.388vw] tablet:text-[7vw] desktop:text-[7.28vw] leading-[0.85] mb-[4.66vw] tablet:mb-[2.5vw] desktop:mb-[3.016vw]'>{title}</div>
        <div className='text-white font-medium text-[3.262vw] tablet:text-[2.25vw] desktop:text-[1.248vw] w-full tablet:max-w-[75vw] desktop:max-w-[63.44vw] leading-[1.4] mb-[6.99vw] tablet:mb-[5vw] desktop:mb-[4.524vw]'>{description}</div>
        <div>
          <div className='flex flex-col tablet:flex-row gap-[4.66vw] tablet:gap-[2.5vw] desktop:gap-[1.04vw]'>
            {
              buttons.map((button, index) => <Button {...button} key={index + '-button'} size='md' className='w-full tablet:w-fit' />)
            }
          </div>
        </div>

      </div>
    </section>
  )
}

export default BannerPortfolio