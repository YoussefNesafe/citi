"use client"
import SectionTitle from '@/app/_components/SectionHeader/SectionTitle'
import { cn } from '@/lib/utils'
import { OurTeamPageType, TeamMemberCardType } from '@/models/IDictionary/AboutPages/OurTeamPage'
import { AdditionalProps } from '@/models/IDictionary/SharedProps'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap-trial/all'
import Image from 'next/image'
import React, { useRef } from 'react'

type Props = AdditionalProps & Pick<OurTeamPageType, 'teamMembers'>


const Card = ({ image, name }: TeamMemberCardType) => {
  return (
    <div className='w-[40.076vw] tablet:w-[25vw] desktop:w-[15.028vw] bg-white shadow-custom rounded-[0.932vw] tablet:rounded-[0.5vw] desktop:rounded-[0.208vw] overflow-hidden teamCard'>
      <div className='w-full h-[41.94vw] tablet:h-[26.25vw] desktop:h-[15.756vw] overflow-hidden'>
        <Image {...image} alt={image.alt} className='w-full h-auto object-cover object-top hover:scale-105 transition-all' />
      </div>
      <div className=' text-center p-[4.2vw] tablet:p-[2.5vw] desktop:py-[1.04vw] desktop:px-[0.52vw]'>
        <div className='font-semibold text-[4.194vw] tablet:text-[2.5vw] desktop:text-[1.248vw]'>{name}</div>
      </div>
    </div>
  )
}

const TeamMembers = ({ teamMembers, className, ...props }: Props) => {
  const wrapperRef = useRef(null);
  useGSAP(() => {
    const cards = gsap.utils.toArray('.teamCard');
    cards.forEach((card: any) => {
      gsap.fromTo(card,
        { autoAlpha: 0, y: "-20%" },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
        });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [wrapperRef]);
  return (
    <section className={cn('', className)} {...props} ref={wrapperRef}>
      <SectionTitle text={teamMembers.title} className='text-center mb-[9.32vw] tablet:mb-[5vw] desktop:mb-[2.08vw]' />
      <div className='flex gap-[5.78vw] tablet:gap-[3.75vw] desktop:gap-x-[7vw] desktop:gap-y-[4.16vw] flex-wrap justify-center'>
        {
          teamMembers.cards.map((member, index) => <Card key={index + "-card"} {...member} />)
        }
      </div>
    </section>
  )
}

export default TeamMembers