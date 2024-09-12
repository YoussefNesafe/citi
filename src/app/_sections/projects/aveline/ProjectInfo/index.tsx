import Button from '@/app/_components/Button'
import { getHighlightedText } from '@/hooks/getHighlightedText'
import { cn } from '@/lib/utils'
import { ProjectInfoType } from '@/models/IDictionary/ProjectsPages/AvelinePage'
import { sanitize } from 'isomorphic-dompurify'
import React, { Suspense } from 'react';
import InfoBox from './InfoBox'


const ProjectInfo = ({ bookText, button, data, className, ...props }: ProjectInfoType) => {
  const text = getHighlightedText(bookText, {
    replaceWith: { start: '<span class="font-bold font-sans text-primary-600">', end: '</span>' },
  })
  return (
    <section className={cn('bg-linear-project-info text-white flex flex-col gap-[9.32vw] tablet:gap-[7.5vw] desktop:gap-[6.76vw]', className)} {...props}>
      <div className='flex justify-between desktop:justify-center flex-wrap desktop:flex-nowrap gap-y-[9.32vw] tablet:gap-y-[5vw]'>
        <Suspense>
          {
            data.map((el, index) => <InfoBox {...el} key={index + '-info'} index={index} />)
          }
        </Suspense>
      </div>
      <div className='flex flex-col justify-center items-center gap-[4.66vw] tablet:gap-[2.5vw] desktop:gap-[3.64vw]'>
        <h4 dangerouslySetInnerHTML={{ __html: sanitize(text) }} className='animate-pulse text-[5.126vw] tablet:text-[5vw] desktop:text-[2.6vw] text-center' />
        <Button {...button} size="md" theme='secondary' className='animate-scaleInOut' />
      </div>
    </section>
  )
}

export default ProjectInfo