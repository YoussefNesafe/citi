"use client"
import Button from '@/app/_components/Button'
import { cn } from '@/lib/utils'
import { HighlightedImagesType, HighlightedImageType } from '@/models/IDictionary/AboutPages/Portfolio'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { X } from 'lucide-react'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

const ImageCard = ({ displayNumber, image, onHover }: { displayNumber: string | number; image: HighlightedImageType, onHover: (image: HighlightedImageType | null) => void }) => {

  const handleMouseClick = () => {
    document.body.style.overflow = 'hidden'
    onHover(image);
  }

  return (
    <div className='card' >
      <div className='flex justify-between items-end'>
        <div className='mb-[1.864vw] tablet:mb-[1.25vw] desktop:mb-[0.988vw] flex justify-between tablet:block w-full tablet:w-auto'>
          <div className='text-[4.194vw] tablet:text-[2.5vw] desktop:text-[1.248vw] font-semibold leading-none'>
            {image.projectName}
          </div>
          <div className='text-[3.262vw] tablet:text-[1.75vw] desktop:text-[0.832vw] text-gray-450'>
            {image.country}
          </div>
        </div>
        <div className='text-[4.66vw] tablet:text-[5vw] desktop:text-[4.16vw] font-extrabold hidden tablet:block'>{displayNumber}</div>
      </div>
      <div className='w-full tablet:h-[25vw] desktop:h-[15.6vw] overflow-hidden'>
        <Image {...image} alt={image.alt} className='hover:cursor-pointer w-full h-auto mb-[11.65vw] tablet:mb-[18.75vw] desktop:mb-[7.8vw]' onClick={handleMouseClick} />
      </div>
    </div>
  )
}

const HighlightedImages = ({ firstColumn, secondColumn, thirdColumn, className, ...props }: HighlightedImagesType) => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const [hoveredImage, setHoveredImage] = useState<HighlightedImageType | null>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.card');
    cards.forEach((card: any) => {
      gsap.fromTo(card,
        { autoAlpha: 0, y: 100, scale: 1.2 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
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


  let num1 = 1
  let num2 = 2
  let num3 = 3

  const restHoveredImage = () => {
    document.body.style.overflow = 'auto';
    setHoveredImage(null)
  }

  return (
    <section className={cn('flex flex-col items-center', className)} ref={wrapperRef} {...props}>
      <div className='flex flex-col tablet:flex-row tablet:gap-[2.5vw] desktop:gap-[2.6vw]' ref={contentRef}>
        <div className='w-full tablet:mt-[18.75vw] desktop:mt-[7.8vw]'>
          {firstColumn?.map((image, index) => {
            const displayNumber = num1 > 9 ? num1 : `0${num1}`;
            num1 += 3;
            return <ImageCard key={index + "-img"} displayNumber={displayNumber} image={image} onHover={setHoveredImage} />
          })}
        </div>
        <div className='w-[0.466vw] hidden tablet:block bg-[#DFDFDF] tablet:mt-[18.75vw] desktop:mt-[7.8vw]' />
        <div className='w-full'>{secondColumn?.map((image, index) => {
          const displayNumber = num2 > 9 ? num2 : `0${num2}`;
          num2 += 3;
          return <ImageCard key={index + "-img"} displayNumber={displayNumber} image={image} onHover={setHoveredImage} />
        })}
        </div>
        <div className='w-[0.466vw] hidden tablet:block  bg-[#DFDFDF] tablet:mt-[18.75vw] desktop:mt-[7.8vw]' />
        <div className='w-full tablet:mt-[9.375vw] desktop:mt-[3.9vw]'>{thirdColumn?.map((image, index) => {
          const displayNumber = num3 > 9 ? num3 : `0${num3}`;
          num3 += 3;
          return <ImageCard key={index + "-img"} displayNumber={displayNumber} image={image} onHover={setHoveredImage} />
        })}
        </div>
      </div>

      {hoveredImage && (
        <div className='fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-80 transition-all duration-500' onClick={restHoveredImage}>
          <div className='w-[88.54vw] tablet:w-[87.5vw] desktop:w-[62.4vw] border-[0.466vw] tablet:border-[0.375vw] desktop:border-[0.156vw]  border-white'>
            <X className='absolute -top-[2.33vw] -right-[2.33vw] tablet:-top-[2.5vw] tablet:-right-[2.5vw] desktop:-top-[1.04vw] desktop:-right-[1.04vw] rounded-full bg-primary-900 text-white border-[0.466vw] tablet:border-[0.375vw] desktop:border-[0.156vw] border-white z-[2] w-[4.66vw] h-[4.66vw] tablet:w-[5vw] tablet:h-[5vw] desktop:w-[2.08vw] desktop:h-[2.08vw] hover:cursor-pointer' onClick={restHoveredImage} />
            <Image
              {...hoveredImage}
              alt={hoveredImage.alt}
              className='h-auto w-full object-cover '
              style={{ transition: 'transform 0.3s ease' }}
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default HighlightedImages;