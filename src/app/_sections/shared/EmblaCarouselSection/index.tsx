"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { ImageProps } from 'next/image'
import { cn } from '@/lib/utils'
import ImageWrapper from '@/app/_components/ImageWrapper'

const TWEEN_FACTOR_BASE = 0.2

type PropType = {
  slides: ImageProps[];
  options?: EmblaOptionsType;
  imageClassName?: string;
  slideClassName?: string;
}

const EmblaCarouselSection: React.FC<PropType> = ({ slides, slideClassName, imageClassName, options = { dragFree: true, loop: true } }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])




  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__parallax__layer') as HTMLElement
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenParallax = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const translate = diffToTarget * (-1 * tweenFactor.current) * 100
          const tweenNode = tweenNodes.current[slideIndex]
          tweenNode.style.transform = `translateX(${translate}%)`
        })
      })
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return
    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenParallax(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('slideFocus', tweenParallax)
  }, [emblaApi, tweenParallax, setTweenFactor, setTweenNodes])

  if (slides.length === 0) return <></>

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((image, index) => (
            <div className={cn("embla__slide", slideClassName)} key={index + "-slide"}>
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
                  <ImageWrapper
                    {...image}
                    alt={image.alt}
                    className={cn("embla__slide__img embla__parallax__img shadow-custom", imageClassName)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default EmblaCarouselSection
