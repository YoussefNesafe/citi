"use client"
import { cn } from '@/lib/utils'
import { SwiperSectionType } from '@/models/IDictionary/SharedProps'
import React, { useEffect, useRef } from 'react'
import EmblaCarouselSection from './EmblaCarouselSection'
import { IMAGES_MAP } from '@/constants/aveline_images_maps'
import SectionTitle from '@/app/_components/SectionHeader/SectionTitle'
import Button from '@/app/_components/Button'
import gsap from 'gsap'


const SwiperSection = ({ animateFrom = 'left', title, slideClassName, imagesArray, imageClassName, button, className, ...props }: SwiperSectionType) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animateFromObject = {
      [animateFrom === 'left' || animateFrom === 'right' ? 'x' : 'y']: animateFrom === 'left' ? '-100%' : animateFrom === 'right' ? '100%' : '-40%',
      duration: 1
    }
    let animateToObject = {
      [animateFrom === 'left' || animateFrom === 'right' ? 'x' : 'y']: 0,
      duration: 1
    }
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 80%", // Animation starts when the element is 80% from the top of the viewport
          end: "top 20%", // End of animation
          scrub: 1, // Smooth scrubbing effect based on scroll
        },
      });

      tl.fromTo(
        '.wrapper',
        animateFromObject,
        animateToObject
      );
    }, wrapperRef);

    return () => ctx.revert(); // Clean up GSAP context when component unmounts
  }, [animateFrom]);
  return (
    <div ref={wrapperRef} className='overflow-hidden w-full'>
      <div className={cn('wrapper overflow-hidden flex flex-col gap-[9.32vw] tablet:gap-[5vw] desktop:gap-[1.04vw] justify-center items-center', className)} {...props} >
        <SectionTitle text={title} />
        <EmblaCarouselSection slides={IMAGES_MAP[imagesArray]} imageClassName={imageClassName} slideClassName={slideClassName} />
        {
          button && <Button {...button} size='md' />
        }
      </div>
    </div>
  )
}

export default SwiperSection