"use client";

import Button from "@/app/_components/Button";
import FloatingCardWithImage from "@/app/_sections/shared/FloatingCardWithImage";
import { cn } from "@/lib/utils";
import { DiscoverCommunityType } from "@/models/IDictionary/ProjectsPages/AvelinePage";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CardComponent = ({ title, button, description }: Pick<DiscoverCommunityType, 'title' | 'button' | 'description'>) => (
  <div className='animationWrapper py-[4.66vw] tablet:py-[4.75vw] desktop:py-[4.316vw] px-[4.66vw] tablet:px-[3.75vw] desktop:px-[3.64vw]'>
    <div className='flex flex-col gap-[2.33vw] tablet:gap-[5vw] desktop:gap-[4.992vw]'>
      <div className='flex flex-col gap-[2.33vw] tablet:gap-[5vw] desktop:gap-[2.392vw]'>
        <h2 className='text-[5.592vw] tablet:text-[4vw] desktop:text-[1.56vw] leading-[1.25] font-medium text-primary-600'>{title}</h2>
        <p className='text-[3.262vw] tablet:text-[2vw] desktop:text-[1.04vw] leading-[1.25] text-white'>{description}</p>
      </div>
      <Button {...button} size="md" theme='secondary' />
    </div>
  </div>
);

const DiscoverCommunity = ({ button, description, image, title, className, ...props }: DiscoverCommunityType) => {
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: animationRef.current,
          start: "top 60%", // Animation starts when the element is 60% from the top of the viewport
          end: "top 20%", // End of animation
          scrub: 1, // Smooth scrubbing effect based on scroll
        },
      });

      tl.fromTo(
        '.floatingCardWithImage',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 }
      );
    }, animationRef);

    return () => ctx.revert(); // Clean up GSAP context when component unmounts
  }, []);

  return (
    <div ref={animationRef}>
      <FloatingCardWithImage
        image={{ ...image, className: 'tablet:h-[50vw] desktop:w-[66.768vw] desktop:h-[41.132vw]' }}
        className={cn('floatingCardWithImage', className)}
        {...props}
        cardComponent={<CardComponent title={title} description={description} button={button} />}
      />
    </div>
  );
};

export default DiscoverCommunity;
