import { cn } from '@/lib/utils'
import { SwiperSectionType } from '@/models/IDictionary/SharedProps'
import React, { Suspense } from 'react'
import EmblaCarouselSection from './EmblaCarouselSection'
import { IMAGES_MAP } from '@/constants/aveline_images_maps'
import SectionTitle from '@/app/_components/SectionHeader/SectionTitle'
import Button from '@/app/_components/Button'


const SwiperSection = ({ title, slideClassName, imagesArray, imageClassName, button, className, ...props }: SwiperSectionType) => {

  return (
    <div className={cn('overflow-hidden flex flex-col gap-[9.32vw] tablet:gap-[5vw] desktop:gap-[1.04vw] justify-center items-center', className)} {...props}>
      <SectionTitle text={title} />
      <Suspense>
        <EmblaCarouselSection slides={IMAGES_MAP[imagesArray]} imageClassName={imageClassName} slideClassName={slideClassName} />
      </Suspense>
      {
        button && <Button {...button} size='md' />
      }
    </div>
  )
}

export default SwiperSection