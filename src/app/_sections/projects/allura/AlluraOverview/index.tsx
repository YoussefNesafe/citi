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
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/app/_components/ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/app/_components/ui/tooltip';
import { isRtlLang } from '@/app/utils/isRtlLang';
import { cn } from '@/lib/utils';
import { Locale } from '../../../../../../i18n-config';
import { OverViewType } from '@/models/IDictionary/ProjectsPages/AlluraPage';
import { sanitize } from 'isomorphic-dompurify';
import { getHighlightedText } from '@/hooks/getHighlightedText';
import ImagePreview from '@/app/_components/ImagePreview';
import { scrollToElement } from '@/app/utils/ScrollToSection';

const formattedText = (text: string) => getHighlightedText(text, {
  replaceWith: { start: '<div class="font-bold">', end: '</div>' },
})
// Define point positions for tooltips on images
const pointPosition = {
  firstImage: 'bottom-[40%] left-[40%]',
  secondImage: 'top-[30%] left-[75%]',
  thirdImage: 'top-[25%] left-[65%]',
  fourthImage: 'top-[40%] left-[75%]',
  fifthImage: 'top-[40%] left-[50%]',
  sixthImage: 'top-[25%] left-[20%]',
  seventhImage: 'top-[50%] right-[45%]',
};

gsap.registerPlugin(ScrollTrigger);

const AlluraOverview: React.FC<OverViewType> = ({ buildingDetailsCards, header, className, ...props }) => {
  const sectionsRef = useRef<Array<HTMLDivElement | null>>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

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
                      'bg-dark animate-pulse w-[5.825vw] tablet:w-[4.375vw] desktop:w-[2.6vw] h-[5.825vw] tablet:h-[4.375vw] desktop:h-[2.6vw] flex items-center justify-center transition-all font-sans hover:cursor-pointer group  rounded-full'
                    )}>
                      <span className="bg-white group-hover:rotate-45 duration-300 w-[4.427vw] tablet:w-[2.75vw] desktop:w-[1.664vw] h-[0.466vw] tablet:h-[0.25vw] desktop:h-[0.104vw] absolute" />
                      <span className="bg-white group-hover:rotate-45 duration-300 w-[0.466vw] tablet:w-[0.25vw] desktop:w-[0.104vw] h-[4.427vw] tablet:h-[2.75vw] desktop:h-[1.664vw] absolute" />
                    </SheetTrigger>
                  </TooltipTrigger>
                  <TooltipContent side="left">
                    <p>{content.title}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Sheet Content */}
              <SheetContent side={isRtlLang(Locale.en) ? 'left' : 'right'} className="overflow-y-auto overflow-x-hidden w-full tablet:w-3/4 desktop:w-[46.8vw] flex flex-col gap-[3.262vw] tablet:gap-[2.5vw] desktop:gap-[1.04vw]">
                <h3 className="pt-[9.32vw] tablet:pt-[5vw] desktop:pt-[2.08vw] text-[4.194vw] tablet:text-[3vw] desktop:text-[1.664vw] uppercase font-semibold">
                  {content.title}
                </h3>
                <p className="font-medium text-[3.728vw] tablet:text-[2.25vw] desktop:text-[1.04vw] text-gray-450 " dangerouslySetInnerHTML={{ __html: sanitize(formattedText(content.description)) }} />
                {
                  content.images.map((image, index) => <ImagePreview skeletonClassName='h-[53.124vw] tablet:h-[40.5vw] desktop:h-[24.596vw] w-[94.598vw] tablet:w-[72vw] desktop:w-[43.784vw]' {...image} key={index + '-img'} />)
                }
                <SheetTrigger>
                  <Button {...content.button} size="md" className='w-full' onClick={() => scrollToElement({ elemSelector: content.button.elemSelector || '' })} />
                </SheetTrigger>
              </SheetContent>
            </Sheet>

          </div>
        ))}
      </div>
    </div>
  );
};

export default AlluraOverview;