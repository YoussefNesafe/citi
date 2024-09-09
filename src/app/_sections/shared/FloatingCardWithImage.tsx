import React from 'react'
import { AdditionalProps, FloatingCardWithImageType } from '@/models/IDictionary/SharedProps'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type Props = AdditionalProps & FloatingCardWithImageType




const FloatingCardWithImage = ({ image, cardComponent, className, ...props }: Props) => {
  const Card = () => (
    <div className='desktop:absolute flex bg-dark-linear desktop:bg-linear-reverse-feature-card  desktop:max-w-[40.144vw] shrink-0 w-full desktop:right-0 rounded-[2.796vw] tablet:rounded-[1.5vw] desktop:rounded-[0.624vw] '>
      {cardComponent}
    </div>
  )
  return (
    <section className={cn('px-0 tablet:px-0 desktop:px-0 mx-[6.99vw] tablet:mx-[6.25vw] desktop:mx-[8.736vw] flex flex-col gap-[4.66vw] tablet:gap-[2.5vw] desktop:gap-0 desktop:flex-row items-center overflow-hidden', className)} {...props}>
      <Image {...image} alt={image.alt} className={cn('object-cover w-full desktop:w-[53.196vw] h-auto shrink-0 rounded-[0.932vw] tablet:rounded-[0.5vw] desktop:rounded-[0.208vw]', image.className)} />
      <Card />
    </section>

  )
}

export default FloatingCardWithImage