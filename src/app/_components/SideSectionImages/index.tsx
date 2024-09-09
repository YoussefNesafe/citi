"use client"
import { cn } from '@/lib/utils';
import Image, { ImageProps } from 'next/image'
import React, { HTMLAttributes, useRef } from 'react'
import { AnimatedText } from '../AnimatedText';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export type SideSectionImagesProps = HTMLAttributes<HTMLElement> & {
  images: ImageProps[];
  animatedText: string;
}

const SideSectionImages = ({ animatedText, images, className }: SideSectionImagesProps) => {
  const imageWrapperRef = useRef(null);

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: imageWrapperRef.current,
        start: "top 70%",
        end: "20% 20%",
        scrub: 1,
      },
    })
      .to(".image-1", { x: 0, opacity: 1, duration: 0.5 }, 0)
      .to('.animatedTextWrapper', { scale: 1, opacity: 1, duration: 0.5 }, 0)
      .to(".image-2", { y: 0, opacity: 1, duration: 0.5 }, 0.5)
      .to(".image-3", { y: 0, opacity: 1, duration: 0.5 }, 0.5)
      .to('.ball', { scale: 1.3, x: "-50%", duration: 0.5 }, 0.5);
  }, { scope: imageWrapperRef });

  return (
    <div className='w-full h-auto' ref={imageWrapperRef}>
      {
        images?.length ? <div className={cn('w-full h-full desktop:h-full flex gap-[2.796vw] tablet:gap-[3.125vw] desktop:gap-[1.3vw]', className)}>
          <div className='image-1 opacity-0 -translate-x-[20%] self-end w-[41.474vw] tablet:w-[45.25vw] desktop:w-[18.824vw] h-[73.861vw] tablet:h-[80.875vw] desktop:h-[33.644vw] rounded-[4.66vw] tablet:rounded-[2.5vw] desktop:rounded-[1.976vw] z-[2] shadow-lg overflow-hidden'>
            <Image
              {...images[0]}
              alt={images[0]?.alt}
              className='w-full h-full hover:scale-110 transition-all duration-700 object-cover'
            />
          </div>
          <div className='flex flex-col gap-[2.796vw] tablet:gap-[3.125vw] desktop:gap-[1.3vw]'>
            <div className='image-2 opacity-0 -translate-y-[20%] shadow-lg rounded-[4.66vw] tablet:rounded-[2.5vw] desktop:rounded-[1.976vw] w-[41.008vw] tablet:w-[44.75vw] desktop:w-[18.616vw] h-[41.241vw] tablet:h-[45.25vw] desktop:h-[18.824vw] overflow-hidden'>
              <Image
                {...images[1]}
                alt={images[1]?.alt}
                className={cn('object-cover w-full h-full hover:scale-110 transition-all duration-700', images[1]?.className)}
              />
            </div>
            <div className='image-3 opacity-0 translate-y-[20%] overflow-hidden shadow-lg rounded-[4.66vw] tablet:rounded-[2.5vw] desktop:rounded-[1.976vw] w-[41.008vw] tablet:w-[44.75vw] desktop:w-[18.616vw] h-[26.562vw] tablet:h-[29.125vw] desktop:h-[12.116vw]'>
              <Image {...images[2]} alt={images[2]?.alt}
                className='object-cover w-full h-full transition-all duration-700 hover:scale-110'
              />
            </div>
            <div className='w-[11.65vw] tablet:w-[10vw] desktop:w-[4.16vw] h-[11.65vw] tablet:h-[10vw] desktop:h-[4.16vw] scale-0 ball absolute -bottom-[2.33vw] tablet:-bottom-[2.5vw] desktop:bottom-[0.52vw] shadow-custom left-[50%] translate-x-[100%]  bg-linear-border-vertical rounded-full' />
          </div>
        </div> : <></>}
      {
        animatedText ? <div className='animatedTextWrapper absolute -top-[10%] left-[50%] -translate-x-[50%] scale-0 opacity-0'>
          <AnimatedText text={animatedText} />
        </div> : <></>
      }
    </div>
  )
}

export default SideSectionImages;