"use client"
import Button from '@/app/_components/Button';
import { getHighlightedText } from '@/hooks/getHighlightedText';
import { cn } from '@/lib/utils'
import { OurTeamSectionType } from '@/models/IDictionary/HomePage'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { sanitize } from 'isomorphic-dompurify';
import Image from 'next/image';
import React, { useRef } from 'react';


const OurTeamSection = ({ buttons, image, header, className, ...props }: OurTeamSectionType) => {
  const containerRef = useRef(null)


  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "20% 20%",
        scrub: 1,
      },
    })
      .fromTo('.img', { x: "-40%", opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 }, 0)
      .fromTo('.content', { x: "40%", opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 }, 0)

  }, { scope: containerRef });

  const title = getHighlightedText(header?.title || "", {
    replaceWith: { start: '<span class="font-bold italic">', end: '</span>' },
  })

  return (
    <section className={cn('flex flex-col tablet:flex-row items-center justify-between gap-[6.99vw] tablet:gap-[5vw] desktop:gap-[3.38vw] overflow-hidden', className)} {...props} ref={containerRef}>
      <Image {...image} className='z-[2] img tablet:max-w-[37.5vw] desktop:max-w-[31.2vw] rounded-[1.864vw] tablet:rounded-[1vw] desktop:rounded-[0.416vw] shadow-custom shrink-0 h-auto object-cover' />
      <div className='content flex flex-col gap-[4.66vw] tablet:gap-[3.75vw] desktop:gap-[4.16vw] desktop:max-w-[41.6vw]  text-wrap'>
        <div className='flex flex-col gap-[1.864vw] tablet:gap-[1.875vw] desktop:gap-[1.04vw]'>
          <h2 className='font-normal text-[4.66vw] tablet:text-[3.25vw] desktop:text-[2.808vw] capitalize' dangerouslySetInnerHTML={{ __html: sanitize(title) }} />
          <p className='text-[3.262vw] tablet:text-[2vw] desktop:text-[1.248vw] font-medium text-wrap'>
            {header.description}
          </p>
        </div>
        <div className='flex gap-[4.66vw] tablet:gap-[2.5vw] desktop:gap-[1.56vw]'>
          {
            buttons.map((button, index) => <Button {...button} size='md' className='w-full tablet:w-fit' key={index + "-button"} />)
          }
        </div>
      </div>

    </section>
  )
}

export default OurTeamSection