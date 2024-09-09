import { getHighlightedText } from '@/hooks/getHighlightedText'
import { cn } from '@/lib/utils'
import { AdditionalProps } from '@/models/IDictionary/SharedProps'
import { sanitize } from 'isomorphic-dompurify'
import React from 'react'

const SectionTitle = ({ text, className, ...props }: { text: string } & AdditionalProps) => {

  const isNormalFontWeight = text.search('{{') !== -1;
  const title = getHighlightedText(text, {
    replaceWith: { start: '<span class="font-bold italic">', end: '</span>' },
  })

  return (
    <div
      className={cn('text-[5.126vw] font-bold tablet:text-[3vw] desktop:text-[2.288vw] leading-[1.3] text-dark', isNormalFontWeight && 'font-normal', className)}
      {...props}
      dangerouslySetInnerHTML={{ __html: sanitize(title) }}
    />
  )
}

export default SectionTitle