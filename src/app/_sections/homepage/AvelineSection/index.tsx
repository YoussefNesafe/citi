"use client"
import { cn } from '@/lib/utils'
import { AvelineSectionProps } from '@/models/IDictionary/HomePage'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ImageWrapper from '@/app/_components/ImageWrapper'
import React, { useRef } from 'react'

const AvelineSection = ({ header, images, className }: AvelineSectionProps) => {
  const wrapperRef = useRef(null);
  useGSAP(() => {
    let slides = gsap.utils.toArray(".slide") as HTMLElement[];
    gsap.to(slides, {
      xPercent: -100 * (slides.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-sliders",
        pin: wrapperRef.current,
        pinSpacing: true,
        scrub: 1,
        end: "+=300%",
      }
    });
  }, {
    scope: wrapperRef
  });

  return (
    <section ref={wrapperRef} className={cn('px-0 tablet:px-0 desktop:px-0', className)}>
      <div className='w-full h-screen flex flex-nowrap overflow-hidden horizontal-sliders'>
        {images.map((image, index) => (
          <div key={index + "image"} className='slide w-full h-screen shrink-0'>
            <ImageWrapper  {...image} alt={image.alt} className="w-auto h-screen desktop:w-full desktop:h-auto object-cover object-center" skeletonClassName='h-[100vh] w-[100vw]' />
            <div className='absolute top-0 left-0 w-full h-full bg-dark/80 desktop:bg-transparent desktop:bg-linear-overlay' />

            <div className='flex flex-col absolute left-[50%] -translate-x-[50%] bottom-[23.3vw] tablet:bottom-[18.75vw] desktop:bottom-[2.34vw] gap-[14vw] tablet:gap-[13vw] desktop:gap-[2.34vw] text-center text-white w-[90%] tablet:w-[80%] desktop:w-full desktop:max-w-[54.912vw]'>
              <ImageWrapper  {...image} alt={image.alt} className="desktop:hidden w-full h-auto rounded-[1.398vw] tablet:rounded-[0.75vw] desktop:rounded-[0.312vw] object-cover object-center border border-white" />
              <div className='flex flex-col gap-[5.825vw] tablet:gap-[3.125vw] desktop:gap-[2.34vw]'>
                <div className='text-[9.32vw] tablet:text-[8.75vw] desktop:text-[3.64vw] font-semibold uppercase'>{header?.title}</div>
                <div className='text-[4.66vw] tablet:text-[3vw] desktop:text-[1.248vw] font-medium'>{header?.description}</div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AvelineSection;
