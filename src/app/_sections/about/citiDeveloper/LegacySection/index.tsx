"use client"
import Button from '@/app/_components/Button'
import SectionHeader from '@/app/_components/SectionHeader'
import { cn } from '@/lib/utils'
import { LegacySectionType } from '@/models/IDictionary/AboutPages/CitiDeveloper'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import ImageWrapper from '@/app/_components/ImageWrapper'


const Card = ({ card }: Pick<LegacySectionType, 'card'>) => {
  return <div className='hidden tablet:block tablet:animate-smoothTranslateX text-white bg-dark-linear tablet:absolute w-full tablet:w-[40vw] desktop:w-[31.148vw] tablet:z-[2] tablet:top-1/2 tablet:-translate-y-1/2  left-0 rtl:left-auto rtl:right-0 py-[3.728vw] tablet:py-[2.5vw] desktop:py-[4.94vw] px-[3.728vw] tablet:px-[2.5vw] desktop:px-[3.64vw] rounded-[2.796vw] tablet:rounded-[1.5vw] desktop:rounded-[0.624vw] translate-x-[10%] rtl:-translate-x-[10%]'>
    <h2 className='mb-[3.495vw] tablet:mb-[2.5vw] desktop:mb-[6.24vw] text-[4.66vw] tablet:text-[3.25vw] desktop:text-[2.288vw] text-primary-600 font-semibold'>{card.title}</h2>
    <h4 className='mb-[2.33vw] tablet:mb-[1.25vw] desktop:mb-[1.56vw] text-[3.728vw] tablet:text-[2vw] desktop:text-[1.56vw] font-semibold'>{card.subtitle}</h4>
    <p className='mb-[4.66vw] tablet:mb-[2.5vw] desktop:mb-[3.12vw] text-[3.262vw] tablet:text-[1.75vw] desktop:text-[0.936vw]'>{card.description}</p>
    <Button {...card.button} theme='secondary' />
  </div>
}

const LegacySection = ({ card, description, image, className, ...props }: LegacySectionType) => {

  const wrapperRef = useRef(null)

  useGSAP(() => {

    gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top 60%",
        end: "20% 20%",
        scrub: 1,
      },
    })
      .fromTo(".animationWrapepr", { scale: 0, duration: 0.5 }, { scale: 1, duration: 0.5 })
  }, {
    scope: wrapperRef
  })


  return (
    <section ref={wrapperRef} className={cn('', className)} {...props}>
      <div className='w-full flex flex-col gap-[4.66vw] tablet:gap-0 tablet:flex-row tablet:justify-end animationWrapepr overflow-hidden'>
        <Card card={card} />
        <SectionHeader className='tablet:hidden' title={card.title} subtitle={card.subtitle} description={card.description} />
        <div className='h-auto w-full tablet:w-[66.875vw] desktop:w-[66.768vw] rounded-[2.796vw] tablet:rounded-[1.5vw] desktop:rounded-[0.624vw] overflow-hidden'>
          <ImageWrapper {...image} alt={image.alt} sizes='100vw' className='w-full h-auto object-cover hover:scale-105 transition-all duration-500' skeletonClassName='w-[86.21vw] tablet:w-[66.875vw] desktop:w-[66.664vw] h-[53.357vw] tablet:h-[41.25vw] desktop:h-[41.132vw]' />
          <p className='absolute max-w-[93%] tablet:max-w-[43.75vw] desktop:max-w-[45.084vw] font-semibold text-[3.262vw] tablet:text-[2vw] desktop:text-[1.248vw] text-white right-[2.33vw] tablet:right-[1.25vw] desktop:right-[2.964vw] rtl:right-auto rtl:tablet:right-auto rtl:desktop:right-auto rtl:left-[2.33vw] rtl:tablet:left-[1.25vw] rtl:desktop:left-[2.964vw] bottom-[2.33vw] tablet:bottom-[1.25vw] desktop:bottom-[4.16vw] z-[2]'>
            {description}
          </p>
        </div>
      </div>

    </section>
  )
}

export default LegacySection