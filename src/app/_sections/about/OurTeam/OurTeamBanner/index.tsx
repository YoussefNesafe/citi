"use client"
import SectionHeader from '@/app/_components/SectionHeader'
import { OurTeamPageType } from '@/models/IDictionary/AboutPages/OurTeamPage'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { AdditionalProps } from '@/models/IDictionary/SharedProps'
import { cn } from '@/lib/utils'
import FloatingCardWithImage from '@/app/_sections/shared/FloatingCardWithImage'
import { sanitize } from 'isomorphic-dompurify'
import ImageWrapper from '@/app/_components/ImageWrapper'

type Props = AdditionalProps & Pick<OurTeamPageType, 'CEOMessage' | 'header'>

const OurTeamBanner = ({ header, CEOMessage, className, ...props }: Props) => {
  const wrapperRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo('.headerWrapper', { x: "40%", opacity: 0 }, { x: 0, opacity: 1, duration: 1 })
    gsap.fromTo('.messageWrapper', { x: "-40%", opacity: 0 }, { x: 0, opacity: 1, duration: 1 })
  }, { scope: wrapperRef })

  const CardComponent = () => (
    <div className='py-[4.66vw] tablet:py-[4.75vw] desktop:py-[1.976vw] px-[4.66vw] tablet:px-[3.75vw] desktop:px-[1.56vw]'>
      <div className='flex flex-col gap-[2.33vw] tablet:gap-[5vw] desktop:gap-[2.08vw]'>
        <h2 className='text-[5.592vw] tablet:text-[4vw] desktop:text-[2.6vw] leading-[1.25] font-medium text-primary-600'>{CEOMessage.title}</h2>
        <p className='text-[3.262vw] tablet:text-[2vw] desktop:text-[0.936vw] leading-[1.25]  text-white' dangerouslySetInnerHTML={{ __html: sanitize(CEOMessage.description) }} />
        <div className='flex justify-between items-center text-white'>
          <div className='text-[4.194vw] tablet:text-[2.5vw] desktop:text-[1.248vw] font-semibold'>{CEOMessage.ceoDetails.title}</div>
          <ImageWrapper {...CEOMessage.ceoDetails.name} alt={CEOMessage.ceoDetails.name.alt} className='w-[27.96vw] tablet:w-[17.625vw] desktop:w-[7.332vw] h-auto object-cover' />
        </div>
      </div>
    </div>
  )

  return (
    <div ref={wrapperRef} className={cn('overflow-hidden', className)} {...props}>
      <SectionHeader {...header} className='section-py text-center m-auto desktop:max-w-[65.988vw] headerWrapper' />
      <FloatingCardWithImage image={CEOMessage.image} className='section-pb messageWrapper' cardComponent={<CardComponent />} />
    </div>

  )
}

export default OurTeamBanner