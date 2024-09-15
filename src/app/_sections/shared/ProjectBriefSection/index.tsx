"use client"
import { getHighlightedText } from '@/hooks/getHighlightedText'
import { cn } from '@/lib/utils'
import { sanitize } from 'isomorphic-dompurify'
import ImageWrapper from '@/app/_components/ImageWrapper'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ProjectBriefSectionType } from '@/models/IDictionary/SharedProps'

const ProjectBriefSection = ({ article, image, title, className, ...props }: ProjectBriefSectionType) => {
  const containerRef = useRef(null)


  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "20% 20%",
        scrub: 1,
      },
    })
      .fromTo('.title', { y: "-40%", opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, 0)
      .fromTo('.img', { x: "-40%", opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 }, 0)
      .fromTo('.content', { x: "40%", opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 }, 0)

  }, { scope: containerRef });

  const sectionTitle = getHighlightedText(title, {
    replaceWith: { start: '<span class="font-bold italic">', end: '</span>' },
  })
  const articleTitle = getHighlightedText(article.title, {
    replaceWith: { start: '<span class="text-primary-900 font-bold italic">', end: '</span>' },
  })
  const finalArticleTitle = getHighlightedText(articleTitle,
    {
      delimiter: {
        start: "<<",
        end: ">>",
      },
      replaceWith: { start: '<br class="hidden desktop:block" />', end: '' },
    })

  return (
    <section className={cn('flex flex-col gap-[2.33vw] tablet:gap-[2.5vw] desktop:gap-[4.16vw] overflow-hidden', className)} {...props} ref={containerRef}>
      <h3 className='title text-[7.456vw] text-center tablet:text-[7.5vw] desktop:text-[5.2vw] text-primary-900 font-medium' dangerouslySetInnerHTML={{ __html: sanitize(sectionTitle) }} />
      <div className='flex flex-col-reverse gap-[4.66vw] tablet:gap-[2.5vw] desktop:gap-0 desktop:flex-row justify-between items-center'>
        <div className='img tablet:max-w-[60%] desktop:max-w-[36.712vw] tablet:max-h-[53.75vw] rounded-[0.932vw] tablet:rounded-[0.5vw] desktop:rounded-[0.208vw] desktop:max-h-[35.048vw] overflow-hidden shadow-custom'>
          <ImageWrapper {...image} className='w-full h-auto' skeletonClassName='desktop:w-[36.66vw] tablet:w-[52.5vw] w-[86.21vw] desktop:h-[34.996vw] tablet:h-[53.75vw] h-[107.879vw]' />
        </div>
        <div className='content flex flex-col gap-[2.33vw] tablet:gap-[1.25vw] desktop:gap-[1.56vw] w-full desktop:max-w-[36.14vw]'>
          <h4 dangerouslySetInnerHTML={{ __html: sanitize(finalArticleTitle) }} className='text-[4.66vw] tablet:text-[4vw] desktop:text-[2.288vw] font-medium' />
          <p className='text-gray-450 text-[3.262vw] tablet:text-[2.75vw] desktop:text-[1.248vw]'>{article.description}</p>
        </div>
      </div>
    </section>
  )
}

export default ProjectBriefSection