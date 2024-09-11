"use client"

import Card from '@/app/_components/Card'
import { CardType } from '@/app/_components/Card/types'
import ImageWrapper from '@/app/_components/ImageWrapper'
import SectionTitle from '@/app/_components/SectionHeader/SectionTitle'
import { cn } from '@/lib/utils'
import { AdditionalProps, PointCardProps } from '@/models/IDictionary/SharedProps'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ImageProps } from 'next/image'
import { useRef } from 'react'

type SectionWithImageAndPointCardsType = AdditionalProps & {
  cards: PointCardProps[];
  title: string;
  image: ImageProps;
  reverse?: boolean;
}

const SectionWithImageAndPointCards = ({ cards, title, image, reverse = false, className, ...props }: SectionWithImageAndPointCardsType) => {

  const wrapperRef = useRef(null);

  useGSAP(() => {

    gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top 90%",
        end: "20% 20%",
        scrub: 1,
      },
    })
      .fromTo(wrapperRef.current, { y: "-30%", opacity: 0, duration: 0.5 }, { y: 0, opacity: 1, duration: 0.5 })
  }, {
    scope: wrapperRef
  })


  return (
    <section {...props} className={cn('flex flex-col desktop:flex-row items-center desktop:items-end gap-[6.99vw] tablet:gap-[7.5vw] desktop:gap-[8.06vw]', className, reverse && 'desktop:flex-row-reverse')} ref={wrapperRef}>
      <div className='shrink-0 w-full tablet:w-[80%] desktop:w-[39.936vw] h-auto overflow-hidden imageWrapepr'>
        <ImageWrapper {...image} alt={image.alt} className='w-full h-auto object-cover hover:scale-105 duration-300 transition-all' skeletonClassName='desktop:w-[39.936vw] tablet:w-[70vw] w-[86.21vw] h-[53.357vw] tablet:h-[45.625vw] desktop:h-[26.052vw]' />
      </div>
      <div className='w-full flex flex-col gap-[4.66vw] items-center desktop:items-stretch tablet:gap-[2.5vw] desktop:gap-[1.82vw] desktop:justify-center contentWrapepr'>
        <SectionTitle text={title} />
        <div className='flex w-fit flex-col gap-[2.33vw] tablet:gap-[1.875vw] desktop:gap-[1.04vw]'>
          {cards?.map((card, index) => (
            <Card key={index + "-card"} type={CardType.POINT_CARD} {...card} className='m-auto tablet:w-[80%] desktop:w-auto' />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionWithImageAndPointCards;
