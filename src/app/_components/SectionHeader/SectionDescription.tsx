import { getHighlightedText } from '@/hooks/getHighlightedText';
import { cn } from '@/lib/utils';
import { sanitize } from 'isomorphic-dompurify'
import React from 'react'

const SectionDescription = ({ text, className }: { text: string; className?: string }) => {
  const title = getHighlightedText(text, {
    replaceWith: { start: '<span class="font-bold text-primary-900 font-sans ">', end: '</span>' },
  })
  return (
    <div className={cn('text-[3.262vw] tablet:text-[2.25vw] desktop:text-[0.936vw]  text-gray-450 font-medium desktop:font-normal leading-[1.25]', className)} dangerouslySetInnerHTML={{ __html: sanitize(title) }} />
  )
}

export default SectionDescription