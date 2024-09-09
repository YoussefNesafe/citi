import Button from '@/app/_components/Button'
import { getHighlightedText } from '@/hooks/getHighlightedText'
import { cn } from '@/lib/utils'
import { ProjectInfoBoxType, ProjectInfoType } from '@/models/IDictionary/ProjectsPages/AvelinePage'
import { sanitize } from 'isomorphic-dompurify'
import React from 'react';

const InfoBox = ({ description, title }: ProjectInfoBoxType) => (
  <div className='flex shrink-0 flex-col p-[4.66vw] tablet:px-[6.25vw] tablet:py-[2.5vw] desktop:px-[4.68vw] w-[47%] desktop:w-auto desktop:max-w-[22.88vw] gap-[2.33vw] tablet:gap-[3.75vw] desktop:gap-[2.08vw] text-center border-b desktop:border-b-0 desktop:border-r border-primary-900 desktop:last-of-type:border-none '>
    <div className='text-primary-600 font-extrabold text-[4.194vw] tablet:text-[4vw] desktop:text-[2.08vw]'>{title}</div>
    <div className='font-semibold text-[3.262vw] tablet:text-[2.5vw] desktop:text-[1.56vw]'>{description}</div>
  </div>
)


const ProjectInfo = ({ bookText, button, data, className, ...props }: ProjectInfoType) => {
  const text = getHighlightedText(bookText, {
    replaceWith: { start: '<span class="font-bold font-sans text-primary-600">', end: '</span>' },
  })
  return (
    <section className={cn('bg-linear-project-info text-white flex flex-col gap-[9.32vw] tablet:gap-[7.5vw] desktop:gap-[6.76vw]', className)} {...props}>
      <div className='flex justify-between desktop:justify-center flex-wrap desktop:flex-nowrap gap-y-[9.32vw] tablet:gap-y-[5vw]'>
        {
          data.map((el, index) => <InfoBox {...el} key={index + '-info'} />)
        }
      </div>
      <div className='flex flex-col justify-center items-center gap-[4.66vw] tablet:gap-[2.5vw] desktop:gap-[3.64vw]'>
        <h4 dangerouslySetInnerHTML={{ __html: sanitize(text) }} className='text-[5.126vw] tablet:text-[5vw] desktop:text-[2.6vw] text-center' />
        <Button {...button} size="md" theme='secondary' className='font-sans' />
      </div>
    </section>
  )
}

export default ProjectInfo