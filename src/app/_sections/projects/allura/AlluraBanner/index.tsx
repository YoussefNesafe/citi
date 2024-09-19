"use client"
import { ReactNode, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { cn } from '@/lib/utils'; // If you have a utility for classnames
import { useGSAP } from '@gsap/react';
import { AlluraBannerType } from '@/models/IDictionary/ProjectsPages/AlluraPage';
import Button from '@/app/_components/Button';
import { scrollToElement } from '@/app/utils/ScrollToSection';

const CustomSpan = ({ children }: { children: ReactNode }) => <span style={{
  backgroundImage: 'url("/images/allura/allura-popup-bg.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}}>{children}</span>



const AlluraBanner = ({ backgroundImage, slugan, locationAndCompletion, appartments, logo, button, className }: AlluraBannerType) => {
  const firstLayerRef = useRef(null);
  const secondLayerRef = useRef(null);
  const thirdLayerRef = useRef(null);
  const fourthLayerRef = useRef(null);
  const wrapperRef = useRef(null);

  useGSAP(() => {

    // Animation for .allura spans
    gsap.fromTo('.allura span', {
      opacity: 0,
      y: -100, // Start position from the top
      duration: 1
    }, {
      opacity: 1,
      y: 0,
      stagger: 0.1, // Stagger effect to delay each span's appearance
      duration: 1,
      delay: 0.5 // Delay before the animation starts
    });

    // Animation for .slugan
    gsap.fromTo('.slugan', {
      opacity: 0,
      y: -100
    }, { opacity: 1, y: 0, duration: 0.7 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current!,
        start: "top top",
        end: "+=200%", // Increase the end value for longer visibility
        pin: true,
        scrub: 1,
      },
    });

    // First Layer animation (fade out and scale)
    tl.fromTo('.firstLayer .allura', { opacity: 1, scale: 1 }, { opacity: 0, scale: 10, duration: 4 });

    tl.to('.overlay', { background: '#000', opacity: 0.6, duration: 0.1 }, 0);
    tl.to('.firstLayer .slugan', { color: '#fff', duration: 0.1 }, 0);


    // Second Layer animation (fade in)
    tl.fromTo(secondLayerRef.current, { opacity: 0, y: 200 }, { opacity: 1, y: 0, duration: 2 });

    // Second Layer disappearance as the third layer appears
    tl.to(secondLayerRef.current, { opacity: 0, y: -200, duration: 1 }, "+=2");

    // Third Layer animation (fade in)
    tl.fromTo(thirdLayerRef.current, { opacity: 0, y: 200 }, { opacity: 1, y: 0, duration: 4 });

    // Third Layer disappearance as the fourth layer appears
    tl.to(thirdLayerRef.current, { opacity: 0, y: -200, duration: 1 }, "+=2");

    // First Layer disappearance as the fourth layer appears
    tl.to(firstLayerRef.current, { opacity: 0, y: -200, duration: 1 });

    // Overlay animation
    tl.to('.overlay', { background: '#FFFFFF', opacity: 0.8, duration: 1 });

    // Fourth Layer animation (fade in)
    tl.fromTo(fourthLayerRef.current, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 4 });

  }, {
    scope: wrapperRef
  });


  return (
    <div className='w-full h-screen overflow-hidden relative' ref={wrapperRef}>
      {/* Background Image */}
      <Image
        {...backgroundImage}
        alt={backgroundImage.alt}
        priority
        className='w-full h-full absolute top-0 left-0 object-cover object-bottom'
      />
      <div className='absolute top-0 left-0 bg-white/60 w-full h-screen overlay' />
      {/* 4th Layer */}
      <div ref={fourthLayerRef} className='w-full z-[2] h-screen absolute top-0 left-0  flex flex-col items-center justify-center '>
        <Image {...logo} alt={logo.alt} className=' w-[93.2vw] tablet:w-[57vw] desktop:w-[23.712vw] h-auto object-cover
        ' />
        <Button
          {...button}
          size="lg"
          onClick={() => scrollToElement({ elemSelector: button?.elemSelector || '' })}
        />

      </div>

      {/* Third Layer */}
      <div ref={thirdLayerRef} className='w-full h-screen absolute top-0 left-0  flex flex-col items-center justify-center thirdLayer mt-[9.32vw] tablet:mt-[5vw] desktop:mt-[2.08vw]'>
        <div className='flex'>
          {appartments.map((card, index) => (
            <div
              key={index + '-card'}
              className={cn('flex flex-col gap-[1.398vw] tablet:gap-[1.25vw] desktop:gap-[0.52vw] text-white px-[6.99vw] tablet:px-[6.25vw] desktop:px-[4.16vw] items-center justify-center border-r rtl:border-r-0 rtl:border-l border-white last-of-type:border-none')}
            >
              <div className='text-[4vw] tablet:text-[3vw] desktop:text-[2.04vw]'>{card.title}</div>
              {/* <div className='text-[4.66vw] tablet:text-[3vw] desktop:text-[2.08vw]'>{card.description}</div> */}
            </div>
          ))}
        </div>
      </div>

      {/* Second Layer */}
      <div ref={secondLayerRef} className='w-full h-screen absolute top-0 left-0  flex flex-col items-center justify-center secondLayer'>
        <div className='flex mt-[9.32vw] tablet:mt-[5vw] desktop:mt-[2.08vw]'>
          {locationAndCompletion.map((card: any, index: number) => (
            <div key={index + '-card'} className={cn('flex flex-col gap-[1.398vw] tablet:gap-[1.25vw] desktop:gap-[0.52vw] text-white px-[6.99vw] tablet:px-[6.25vw] desktop:px-[4.16vw]', index === 0 && 'border-r rtl:border-r-0 rtl:border-l border-white')}>
              <div className='text-[4.66vw] tablet:text-[3vw] desktop:text-[2.08vw]'>{card.description}</div>
              <div className='text-[3.728vw] tablet:text-[2.25vw] desktop:text-[1.04vw] text-gray-300'>{card.title}</div>
            </div>
          ))}
        </div>
      </div>
      {/* First Layer */}
      <div ref={firstLayerRef} className='w-full h-screen absolute top-0 left-0  flex flex-col items-center justify-center firstLayer text-dark'>
        <h2 className='text-[6.99vw] tablet:text-[5vw] desktop:text-[2.912vw] text-center font-extrabold capitalize slugan'>{slugan}</h2>
        <h1
          className='text-[18.64vw] tablet:text-[15vw] desktop:text-[13vw] font-extrabold allura'
        >
          <CustomSpan>A</CustomSpan>
          <CustomSpan>L</CustomSpan>
          <CustomSpan>L</CustomSpan>
          <CustomSpan>U</CustomSpan>
          <CustomSpan>R</CustomSpan>
          <CustomSpan>A</CustomSpan>
        </h1>
      </div>
    </div>
  );
};

export default AlluraBanner;