import { getHighlightedText } from '@/hooks/getHighlightedText'
import { cn } from '@/lib/utils'
import { AvelineJvcType } from '@/models/IDictionary/ProjectsPages/AvelinePage'
import { sanitize } from 'isomorphic-dompurify'
import ImageWrapper from '@/app/_components/ImageWrapper'
import React from 'react'

const AvelineJvcSection = ({ article, image, title, className, ...props }: AvelineJvcType) => {

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
    <section className={cn('flex flex-col gap-[2.33vw] tablet:gap-[2.5vw] desktop:gap-[4.16vw]', className)} {...props}>
      <h3 className='text-[7.456vw] text-center tablet:text-[7.5vw] desktop:text-[5.2vw] text-primary-900 font-medium' dangerouslySetInnerHTML={{ __html: sanitize(sectionTitle) }} />
      <div className='flex flex-col-reverse gap-[4.66vw] tablet:gap-[2.5vw] desktop:gap-0 desktop:flex-row justify-between items-center'>
        <div className='tablet:max-w-[60%] desktop:max-w-[36.712vw] tablet:max-h-[53.75vw] rounded-[0.932vw] tablet:rounded-[0.5vw] desktop:rounded-[0.208vw] desktop:max-h-[35.048vw] overflow-hidden shadow-custom'>
          <ImageWrapper {...image} className='w-full h-auto ' />
        </div>
        <div className='flex flex-col gap-[2.33vw] tablet:gap-[1.25vw] desktop:gap-[1.56vw] w-full desktop:max-w-[36.14vw]'>
          <h4 dangerouslySetInnerHTML={{ __html: sanitize(finalArticleTitle) }} className='text-[4.66vw] tablet:text-[4vw] desktop:text-[2.288vw] font-medium' />
          <p className='text-gray-450 text-[3.262vw] tablet:text-[2.75vw] desktop:text-[1.248vw]'>{article.description}</p>
        </div>
      </div>
    </section>
  )
}

export default AvelineJvcSection