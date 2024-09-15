/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import SectionDescription from '@/app/_components/SectionHeader/SectionDescription';
import SectionSubtitle from '@/app/_components/SectionHeader/SectionSubtitle';
import SectionTitle from '@/app/_components/SectionHeader/SectionTitle';
import Button from '@/app/_components/Button';
import { Sheet, SheetContent, SheetTrigger } from '@/app/_components/ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/app/_components/ui/tooltip';
import { isRtlLang } from '@/app/utils/isRtlLang';
import { cn } from '@/lib/utils';
import { Locale } from '../../../../../../i18n-config';
import { OverViewType } from '@/models/IDictionary/ProjectsPages/AlluraPage';

// Define point positions for tooltips on images
const pointPosition = {
  firstImage: 'top-[50%] left-[60%]',
  secondImage: 'top-[50%] left-[40%]',
  thirdImage: 'top-[40%] left-[60%]',
  fourthImage: 'top-[15%] left-[70%]',
};

gsap.registerPlugin(ScrollTrigger);

const AlluraOverview: React.FC<OverViewType> = ({ buildingDetailsCards, header, className, ...props }) => {
  const sectionsRef = useRef<Array<HTMLDivElement | null>>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // IntersectionObserver to handle overlay visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const overlay = entry.target.querySelector('.overlay') as HTMLDivElement | null;
          if (overlay) {
            overlay.style.display = entry.isIntersecting ? 'none' : 'block';  // Show/hide overlay based on visibility
          }
        });
      },
      { threshold: 0.5 }  // Adjust threshold for overlay behavior
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // GSAP animation setup with ScrollTrigger
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current!,
        start: "top top",
        end: "20% 20%",
        pin: true,
        scrub: 1,
      },
    });
    tl.fromTo('.imageWrapper', { scale: 0.9 }, { scale: 1 });
  }, {
    scope: containerRef,
  });

  return (
    <div className={cn('w-full overflow-hidden', className)} ref={containerRef} {...props}>
      {/* Section Header */}
      <section className="section-py flex flex-col items-center justify-center">
        <div className="text-center desktop:max-w-[46.8vw] flex flex-col desktop:gap-[0.52vw]">
          {header?.subtitle && <SectionSubtitle text={header.subtitle} />}
          {header?.title && <SectionTitle text={header.title} className="desktop:text-[2.912vw]" />}
          {header?.description && <SectionDescription text={header.description} className="desktop:text-[1.248vw]" />}
        </div>
      </section>

      {/* Image Wrapper with Tooltips */}
      <div className="w-full bg-dark/50 imageWrapper">
        {buildingDetailsCards.map(({ image, content }, index) => (
          <div
            key={index}
            className="w-full h-full mb-0 pb-0 relative"
            //@ts-ignore
            ref={(el) => (sectionsRef.current[index] = el)}
          >
            <Image {...image} alt={image.alt} className="w-full h-auto object-cover" />

            {/* Tooltip and Sheet */}
            <Sheet>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className={cn(
                    'absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all hover:cursor-pointer hover:rotate-45 duration-300',
                    pointPosition[image.className as keyof typeof pointPosition]
                  )}>
                    <SheetTrigger className={cn(
                      'bg-white w-[5.825vw] tablet:w-[4.375vw] desktop:w-[2.6vw] h-[5.825vw] tablet:h-[4.375vw] desktop:h-[2.6vw] flex items-center justify-center transition-all font-sans hover:cursor-pointer hover:rotate-45 duration-300 rounded-full'
                    )}>
                      <span className="bg-dark w-[4.427vw] tablet:w-[2.75vw] desktop:w-[1.664vw] h-[0.466vw] tablet:h-[0.25vw] desktop:h-[0.104vw] absolute" />
                      <span className="bg-dark w-[0.466vw] tablet:w-[0.25vw] desktop:w-[0.104vw] h-[4.427vw] tablet:h-[2.75vw] desktop:h-[1.664vw] absolute" />
                    </SheetTrigger>
                  </TooltipTrigger>
                  <TooltipContent side="left">
                    <p>{content.title}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Sheet Content */}
              <SheetContent side={isRtlLang(Locale.en) ? 'left' : 'right'} className="overflow-y-auto w-3/4 desktop:w-1/2 flex flex-col gap-[3.262vw] tablet:gap-[2.5vw] desktop:gap-[1.04vw]">
                <h3 className="pt-[9.32vw] tablet:pt-[5vw] desktop:pt-[2.08vw] text-[4.194vw] tablet:text-[3vw] desktop:text-[1.664vw] capitalize font-semibold">
                  {content.title}
                </h3>
                <p className="text-[3.728vw] tablet:text-[2.25vw] desktop:text-[1.04vw] text-gray-450">{content.description}</p>
                <Button {...content.button} size="md" />
              </SheetContent>
            </Sheet>

            {/* Overlay */}
            <div className="w-screen h-full absolute top-0 left-0 bg-dark/60 overlay" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlluraOverview;
