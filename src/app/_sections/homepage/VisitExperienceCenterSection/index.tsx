"use client"
import Button from '@/app/_components/Button'
import SectionHeader from '@/app/_components/SectionHeader'
import { cn } from '@/lib/utils'
import React, { HTMLAttributes, useRef } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/app/_components/ui/dialog"
import Image from 'next/image'
import ArrowPlay from '@/app/_components/icons/ArrowPlay'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { VisitExperienceCenterSectionProps } from '@/models/IDictionary/SharedProps'

const PlayButtonIcon = () => <div className='w-[10.485vw] tablet:w-[12.5vw] desktop:w-[7.28vw] h-[10.485vw] tablet:h-[12.5vw] desktop:h-[7.28vw] bg-white/40 rounded-[50%] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm flex justify-center items-center pl-[1.631vw] tablet:pl-[2.5vw] desktop:pl-[1.3vw]'>
  <ArrowPlay className=' w-[4.427vw] h-[5.359vw] tablet:w-[5.625vw] tablet:h-[7.75vw] desktop:w-[3.172vw] desktop:h-[3.744vw]' fill='white' />
</div>

const VisitExperienceCenterSection = ({ header, videoSrc, button, className, ...props }: VisitExperienceCenterSectionProps) => {
  const wrapperRef = useRef(null)
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top 70%",
        end: "20% 20%",
        scrub: 1
      },
    });
    tl.to('.header', {
      x: 0,
      opacity: 1,
      duration: 1
    }).to(".dialog-trigger", {
      x: 0,
      opacity: 1,
      duration: 1,
    }, 0).to('.button', {
      y: 0,
      opacity: 1,
      duration: 0.3
    });
  }, { scope: wrapperRef })



  return (
    <section {...props} ref={wrapperRef} className={cn('flex flex-col items-center gap-[3.262vw] tablet:gap-[2.5vw] desktop:gap-[2.34vw] overflow-hidden', className)}>
      <SectionHeader className='opacity-0 translate-x-[70%] header text-center desktop:max-w-[59.8vw]' {...header} />
      <Dialog>
        <DialogTrigger className='border-white shadow-custom border-[1.864vw] tablet:border-[1vw] desktop:border-[0.416vw] relative rounded-[0.932vw] tablet:rounded-[0.5vw] desktop:rounded-[0.208vw] -translate-x-[70%] opacity-0 dialog-trigger'>
          <Image src='/images/shared/vr-w.jpeg' width={1280} height={853} alt='citi_developer_buildding' className='w-full h-auto object-cover desktop:min-w-[61.204vw] desktop:h-[30.68vw] rounded-[0.932vw] tablet:rounded-[0.5vw] desktop:rounded-[0.208vw]' />
          <PlayButtonIcon />
        </DialogTrigger>
        <DialogContent className='w-[93.2vw] tablet:w-[95vw] desktop:w-[55.484vw] h-[52.425vw] tablet:h-[53.125vw] desktop:h-[31.2vw]'>
          <iframe
            src={videoSrc}
            className='w-full h-full'
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </DialogContent>
      </Dialog>
      {
        button && <div className=' button opacity-0 translate-y-[4.66vw] tablet:translate-y-[2.5vw] desktop:translate-y-[1.04vw]'>
          <Button {...button} className='uppercase' size='md' />
        </div>
      }
    </section>
  )
}

export default VisitExperienceCenterSection