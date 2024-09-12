"use client";
import { ProjectInfoBoxType } from '@/models/IDictionary/ProjectsPages/AvelinePage';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';


const InfoBox = ({ description, title, index }: ProjectInfoBoxType & { index: number }) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      },
    })
      .fromTo(
        boxRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, delay: index * 0.3 }
      );
  }, {
    scope: boxRef
  })


  return (
    <div
      ref={boxRef}
      className="flex shrink-0 flex-col p-[4.66vw] tablet:px-[6.25vw] tablet:py-[2.5vw] desktop:px-[4.68vw] w-[47%] desktop:w-auto desktop:max-w-[22.88vw] gap-[2.33vw] tablet:gap-[3.75vw] desktop:gap-[2.08vw] text-center border-b desktop:border-b-0 desktop:border-r border-primary-900 desktop:last-of-type:border-none"
    >
      <div className="text-primary-600 font-extrabold text-[4.194vw] tablet:text-[4vw] desktop:text-[2.08vw]">
        {title}
      </div>
      <div className="font-semibold text-[3.262vw] tablet:text-[2.5vw] desktop:text-[1.56vw]">{description}</div>
    </div>
  );
};


export default InfoBox;
