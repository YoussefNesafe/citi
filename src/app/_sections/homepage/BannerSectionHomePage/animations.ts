import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { RefObject } from 'react';
import { Locale } from '../../../../../i18n-config';
import { isRtlLang } from '@/app/utils/isRtlLang';

gsap.registerPlugin(ScrollTrigger);

// Utility function to detect RTL

export const animateHomePageBanner = ({wrapperRef, lang}: {wrapperRef: RefObject<HTMLElement>, lang: Locale}) => {
  const isRTL = isRtlLang(lang); 
  const animateInitialElements = () => {
    const tl = gsap.timeline();

    tl.to('.sloganBox', {
        opacity: 1,
        x:  10, // Adjust for RTL
        right: isRTL ? 10 : 'auto', // Adjust for RTL
        duration: 1.5,
        delay: 0.2,
      }, 0) // start at the same time

      .to(".firstLayer img", {
        scale: 1.05,
        duration: 1.5,
      }, 0); // start at the same time
  };

  const createScrollTimeline = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current!,
        start: "top top",
        end: "+=100%", // Adjusted end value to accommodate three sections
        pin: true,
        scrub: 1,
      },
    });

    tl.to(".firstLayer img", {
      scale: 8,
      transformOrigin: "center center",
      duration: 1,
      opacity: 0,
    }, 0) // Start at the same time

      .to(".firstLayer .sloganBox", {
        y: "-150%",
        duration: 1,
      }, 0) // Start at the same time

      .to(".luxuryBox", {
        opacity: 1,
        x:  0, // Adjust for RTL
        duration: 0.6,
      }, 0)

      .to(".midLayer .overlay", {
        opacity: 0,
      }, 0) // Start at the same time

      .to(".midLayer img", {
        scale: 1,
        bottom: 0,
        duration: 0.1
      }, 0) // Start at the same time

      .to(".lastLayer img", {
        scale: 0.9,
        duration: 0.5,
      }, 0); // Start at the same time

    // Animations for the second scroll
    tl.to(".midLayer img", {
      scale: 8,
      transformOrigin: "center center",
      duration: 1,
    }, "+=0.5") // Start at the second scroll

      .to(".lastLayer img", {
        scale: 1,
        duration: 0.5,
      }, "-=1") // Start at the same time as the previous animation

      .to(".midLayer img", {
        opacity: 0,
        duration: 0.1,
      }, "-=0.5") // Start at the same time as the previous animation

      .to(".luxuryBox", {
        opacity: 0,
        x: isRTL ? "-100%" : "100%", // Adjust for RTL
        duration: 0.2,
      }, "-=0.5")

      .to(".firstLayer .sloganBox", {
        x: isRTL ? "+=200%" : "-=200%", // Adjust for RTL
        duration: 1,
      }, "-=0.5")

      .to(".lastLayer .contactus", {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }, "-=0.5");
  };

  animateInitialElements();
  createScrollTimeline();
};
