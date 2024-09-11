"use client"
import { getHighlightedText } from '@/hooks/getHighlightedText'
import { cn } from '@/lib/utils'
import { OurTeamPageType } from '@/models/IDictionary/AboutPages/OurTeamPage'
import { AdditionalProps, ManagerCardType } from '@/models/IDictionary/SharedProps'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap-trial/all'
import { sanitize } from 'isomorphic-dompurify'
import ImageWrapper from '@/app/_components/ImageWrapper'
import React, { useRef } from 'react'

type Props = AdditionalProps & Pick<OurTeamPageType, 'managers'>


const Card = ({ image, name, position }: ManagerCardType) => {
  const positionText = getHighlightedText(position, {
    replaceWith: { start: '<div class="font-bold">', end: '</div>' },
  })
  return (
    <div className='w-[40.076vw] tablet:w-[25vw] desktop:w-[15.028vw] bg-white shadow-custom rounded-[0.932vw] tablet:rounded-[0.5vw] desktop:rounded-[0.208vw] overflow-hidden managerCard'>
      <div className='w-full h-[41.94vw] tablet:h-[26.25vw] desktop:h-[15.756vw] overflow-hidden'>
        <ImageWrapper {...image} alt={image.alt} className='w-full h-auto object-cover object-top hover:scale-105 transition-all' />
      </div>
      <div className=' text-center p-[4.2vw] tablet:p-[2.5vw] desktop:py-[1.04vw] desktop:px-[0.52vw]'>
        <div className='font-semibold text-[4.194vw] tablet:text-[2.5vw] desktop:text-[1.248vw]'>{name}</div>
        <div className='text-wrap text-[3.262vw] tablet:text-[2.25vw] desktop:text-[1.04vw] text-gray-450 ' dangerouslySetInnerHTML={{ __html: sanitize(positionText) }} />
      </div>
    </div>
  )
}

const ManagersTeam = ({ managers, className, ...props }: Props) => {
  const wrapperRef = useRef(null);
  useGSAP(() => {
    const cards = gsap.utils.toArray('.managerCard');
    cards.forEach((card: any) => {
      gsap.fromTo(card,
        { autoAlpha: 0, x: "-30%", y: "30%" },
        {
          autoAlpha: 1,
          x: 0,
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
    <section className={cn('flex gap-[5.78vw] tablet:gap-[3.75vw] desktop:gap-x-[7vw] desktop:gap-y-[4.16vw] flex-wrap justify-center', className)} {...props} ref={wrapperRef}>
      {
        managers.map((member, index) => <Card key={index + "-card"} {...member} />)
      }
    </section>
  )
}

export default ManagersTeam