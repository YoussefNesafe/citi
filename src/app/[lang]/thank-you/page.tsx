import React from 'react'
import { Locale } from '../../../../i18n-config'
import { ThankYouPageType } from '@/models/IDictionary/ThankYouPage';
import getLocalizedData from '@/services/getLocalizedData';
import { getHighlightedText } from '@/hooks/getHighlightedText';
import { sanitize } from 'isomorphic-dompurify';
import { CheckSquareIcon } from 'lucide-react';

export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
  const { title, description, button } = await getLocalizedData<ThankYouPageType>(lang, 'thankYouPage');
  const formattedTitle = getHighlightedText(title, {
    replaceWith: { start: '<span class="font-extrabold text-primary-900">', end: '</span>' },
  })
  return (
    <section className='flex flex-col items-center py-[23.3vw] tablet:py-[18.75vw] desktop:py-[7.8vw]  gap-[6.99vw] tablet:gap-[5vw] desktop:gap-[2.6vw] text-center'>
      <CheckSquareIcon className='w-[18.64vw] h-[18.64vw] tablet:w-[10vw] tablet:h-[10vw] text-green-700 desktop:w-[5.2vw] desktop:h-[5.2vw]' />
      <div className='flex flex-col text-center gap-[2.796vw] tablet:gap-[1.5vw] desktop:gap-[0.624vw]'>
        <h1 className='text-[5.592vw] tablet:text-[4vw] desktop:text-[2.912vw] font-semibold' dangerouslySetInnerHTML={{ __html: sanitize(formattedTitle) }} />
        <p className='text-[3.728vw] tablet:text-[2.25vw] desktop:text-[1.248vw] text-gray-450'>{description}</p>
      </div>
    </section>
  )
}
