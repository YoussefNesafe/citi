import LongArrowUp from '@/app/_components/icons/LongArrowUp'
import SectionDescription from '@/app/_components/SectionHeader/SectionDescription'
import SectionTitle from '@/app/_components/SectionHeader/SectionTitle'
import { cn } from '@/lib/utils'
import { NewsAndBlogsPagesType } from '@/models/IDictionary/AboutPages/NewsAndBlogsPages'
import { AdditionalProps } from '@/models/IDictionary/SharedProps'
import Link from 'next/link'
import React from 'react'

export type Props = AdditionalProps & Pick<NewsAndBlogsPagesType, 'button' | 'header'>

const NewsBlogsHeader = ({ button, header, className, ...props }: Props) => {
  return (
    <section className={cn('flex items-center justify-cente', className)} {...props}>
      <div className='text-center w-full flex flex-col gap-[2.796vw] section-py tablet:gap-[1.875vw] desktop:gap-[0.78vw]'>
        <SectionTitle text={header.title || ''} />
        <SectionDescription text={header.description || ''} />
        <Link href={button?.href || "/"} className='flex gap-[0.932vw] tablet:gap-[1.25vw] desktop:gap-[0.52vw] items-center text-primary-900 leading-[1.25] text-[3.262vw] tablet:text-[2.25vw] desktop:text-[1.04vw] hover:scale-105 duration-300 transition-all absolute top-[4.66vw] tablet:top-[2.5vw] desktop:top-auto right-0 font-semibold'>
          <LongArrowUp className='rotate-90 w-[3.262vw] tablet:w-[3vw] desktop:w-[1.248vw] h-[3.262vw] tablet:h-[3vw] desktop:h-[1.248vw] [&>path]:fill-primary-900' />
          {button?.title}
        </Link>
      </div>

    </section>
  )
}

export default NewsBlogsHeader