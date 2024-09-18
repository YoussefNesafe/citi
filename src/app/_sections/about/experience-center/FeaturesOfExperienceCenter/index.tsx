"use client";
import { cn } from '@/lib/utils';
import { FeatureCardType, FeaturesOfExperienceCenterType } from '@/models/IDictionary/AboutPages/ExperienceCenter';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap-trial/all';
import ImageWrapper from '@/app/_components/ImageWrapper';
import React, { useRef, useEffect } from 'react';

type CardProps = { reverse?: boolean } & FeatureCardType;

const Card = ({ description, image, title, reverse }: CardProps) => (
  <div
    className={cn(
      'flex h-screen items-center justify-center p-[9.32vw] tablet:p-[7.5vw] desktop:px-[5.72vw] desktop:pt-[5.2vw] desktop:pb-[6.864vw]  bg-dark card'
    )}
  >
    <div
      className={cn(
        'flex flex-col desktop:flex-row  justify-between gap-[6.99vw] tablet:gap-[6.25vw] desktop:gap-[2.08vw] items-center w-full  desktop:max-w-[75vw]',
        reverse && 'desktop:flex-row-reverse'
      )}
    >
      <div className="desktop:max-w-[40.352vw] flex flex-col items-center desktop:items-stretch gap-[4.66vw] tablet:gap-[2.5vw] desktop:gap-[1.56vw]">
        <div className="text-primary-600 text-[4.194vw] tablet:text-[2.75vw] desktop:text-[2.08vw] font-semibold">
          {title}
        </div>
        <div className="text-center desktop:text-left text-white text-[3.262vw] tablet:text-[1.75vw] desktop:text-[1.56vw] font-medium">
          {description}
        </div>
      </div>
      <div className="w-[58.25vw] h-[58.25vw] tablet:w-[43.75vw] tablet:h-[43.75vw] desktop:w-[26vw] desktop:h-[26vw] rounded-[50%] shrink-0 relative">
        <ImageWrapper
          {...image}
          alt={image.alt}
          className="w-full h-full object-cover object-center rounded-[50%]"
          skeletonClassName="rounded-[50%] tablet:rounded-[50%] desktop:rounded-[50%]"
        />
        <div className="w-full h-full rounded-[50%] shadow-innerShadow absolute top-0 left-0" />
        <div className="w-full h-full rounded-[50%] linear-border-circular absolute top-0 left-0" />
      </div>
    </div>
  </div>
);

const FeaturesOfExperienceCenter = ({ cards, className, ...props }: FeaturesOfExperienceCenterType) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cardElements = gsap.utils.toArray('.card') as HTMLElement[]; // Select all card elements

    cardElements.forEach((card, index) => {
      const nextCard = cardElements[index + 1];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top top',
          end: nextCard ? 'bottom top' : 'bottom bottom',
          scrub: 1,
          pin: true, // Pin the card
        },
      });

      if (nextCard) {
        tl.to(card, { background: 'black', duration: 1 });
      }

      // No fading out, we just pin the card and let the next one stack on top
    });

    // Clean up ScrollTrigger instances when the component is unmounted
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [wrapperRef]);

  return (
    <section
      className={cn('px-0 tablet:px-0 desktop:px-0 flex flex-col', className)}
      {...props}
      ref={wrapperRef}
    >
      {cards.map((card, index) => (
        <Card {...card} key={index + '-card'} reverse={index % 2 !== 0} />
      ))}
    </section>
  );
};

export default FeaturesOfExperienceCenter;
