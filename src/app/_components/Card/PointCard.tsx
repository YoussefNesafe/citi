import React from 'react'
import { CardProps } from './types'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const PointCard = ({ description, title, image, className, ...props }: Omit<CardProps, 'type'>) => {
  return (
    <div {...props} className={cn('bg-white hover:bg-linear-primary transition-all duration-300 border rounded-[5.592vw] tablet:rounded-[3vw] desktop:rounded-[2.028vw] flex flex-col gap-[1.864vw] tablet:gap-[1vw] desktop:gap-[0.624vw] p-[3.728vw] tablet:p-[2vw] desktop:p-[1.404vw] pl-[9.32vw] tablet:pl-[5vw] desktop:pl-[3.38vw] linear-border hover:border-primary-900', className)}>
      {image ? <Image
        {...image}
        alt={image.alt}
        className={cn('w-[10.252vw] tablet:w-[5.5vw] desktop:w-[3.744vw] h-[10.252vw] tablet:h-[5.5vw] desktop:h-[3.744vw] absolute top-[50%] -translate-y-[50%] -left-[5.126vw] tablet:-left-[2.75vw] desktop:-left-[1.872vw]', image.className)}
      /> : <></>}
      <div className='text-[3.721vw] tablet:text-[1.75vw] desktop:text-[1.248vw] font-bold leading-[1.4]'>{title}</div>
      <div className='text-[3.256vw] tablet:text-[1.5vw] desktop:text-[0.832vw] leading-[1.25] text-gray-450'>{description}</div>
    </div>
  )
}

export default PointCard