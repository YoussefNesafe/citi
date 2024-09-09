import { cn } from '@/lib/utils'
import { FooterProps, WhereToGoNextCardProps } from '@/models/IDictionary/Layout'
import React, { HTMLAttributes } from 'react'
import Button from '../../Button'
import Image from 'next/image'
type Props = Pick<FooterProps, 'whereToGoNextCards'> & HTMLAttributes<HTMLElement>

const WhereToGoNext = ({ whereToGoNextCards, className }: Props) => {
  return (
    <div className={cn('flex flex-col tablet:flex-row gap-[6.99vw] tablet:gap-[3.75vw] desktop:gap-[1.56vw] overflow-hidden', className)}>
      {
        whereToGoNextCards.map((card, index) => (
          <div className=' w-full h-[61.745vw] tablet:h-[25vw] desktop:h-[16.484vw] flex justify-center items-center' key={index + ""}>
            <Image {...card.image} alt={card.image.alt} className='absolute h-full w-full top-0 left-0 object-cover' />
            <Button {...card.button} size='md' theme='transparent' className='uppercase' />
          </div>
        ))
      }
    </div>
  )
}

export default WhereToGoNext