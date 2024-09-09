import React from 'react'
import { CardProps } from './types'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Button from '../Button'
import Link from 'next/link'

const JourneyCard = ({ date, description, readMore, button, image, title, className }: Omit<CardProps, 'type'>) => {
  return (
    <div className={cn('flex flex-col p-[4.194vw] tablet:p-[1.75vw] desktop:p-[1.04vw] gap-[2.33vw] tablet:gap-[1.875vw] desktop:gap-[1.3vw] rounded-[3.728vw] tablet:rounded-[2vw] desktop:rounded-[1.56vw] linear-border-vertical transition-all duration-700 hover:desktop:p-0 group overflow-hidden bg-white ', className)} >
      {image && <div className='shrink-0 w-full h-[46.512vw] tablet:h-[25vw] desktop:h-[16.172vw] rounded-[3.728vw] tablet:rounded-[2vw] desktop:rounded-t-[1.56vw] desktop:rounded-b-[0.52vw] overflow-hidden group-hover:desktop:w-full group-hover:desktop:h-full  transition-all duration-700 group-hover:desktop:rounded-b-[1.56vw] '>
        <Image {...image} alt='country' className='h-full w-full object-cover' />
      </div>}
      <div className='flex justify-between items-center font-bold text-[4.66vw] tablet:text-[3vw] desktop:text-[1.456vw]'>
        <span>{title}</span>
        <span className='text-primary-900'>{date}</span>
      </div>
      <Link href={button?.href || "/"} className=' text-gray-450 h-full  text-[3.262vw] tablet:text-[1.75vw] desktop:text-[0.936vw] [&>span]:text-primary-900'>
        {description}
        {readMore && <span className='tablet:block desktop:inline-block'>{readMore}</span>}
      </Link>
      {button && <Button {...button} theme='transparent' className='absolute top-[50%] left-0 -translate-x-[50%] group-hover:desktop:left-[50%] -translate-y-[50%] w-fit text-nowrap hidden group-hover:desktop:block' />}
    </div>
  )
}

export default JourneyCard