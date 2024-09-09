import Image from 'next/image'
import { CardProps } from './types'
import { cn } from '@/lib/utils'
import Calendar from '../icons/Calendar'
import LongArrowUp from '../icons/LongArrowUp'
import Link from 'next/link'

const NewsBlogsCard = ({ date, description, button, title, image, classNames, className }: Omit<CardProps, 'type'>) => {
  return (
    <div className={cn('rounded-[2.33vw] tablet:rounded-[2.5vw] desktop:rounded-[1.04vw] w-full h-full flex flex-col gap-[3.262vw] tablet:gap-[5vw] desktop:gap-[1.04vw] p-[4.194vw] tablet:p-[2.5vw] desktop:p-[1.04vw] bg-white shadow-custom', className)}>
      {image &&
        <div className={cn('shrink-0 shadow-custom rounded-[2.33vw] overflow-hidden tablet:rounded-[2.5vw] desktop:rounded-[1.04vw] object-cover w-full tablet:max-w-[38vw] desktop:max-w-[31.8vw] h-[58.25vw] tablet:h-[31.25vw] desktop:h-[15.6vw]', image?.className)}>
          <Image {...image} alt={image.alt} className={cn('hover:scale-110 object-center duration-300 transition-all h-full object-cover w-full')} />
        </div>
      }
      <div className={cn('flex flex-col gap-[3.262vw] tablet:gap-[1.75vw] desktop:gap-[1.04vw]', classNames?.contentWrapper)}>
        <div className='flex flex-col gap-[3.262vw] tablet:gap-[1.75vw] desktop:gap-[1.04vw]'>
          {
            title && <Link href={button?.href || "/"} target='_blank' className={cn('font-bold text-[3.262vw] tablet:text-[2.25vw] desktop:text-[0.936vw] leading-[1.25]', classNames?.title)}>
              {title}
            </Link>
          }
          {
            description && <Link href={button?.href || "/"} target='_blank' className={cn('text-gray-450 text-[2.796vw] tablet:text-[1.75vw] desktop:text-[0.728vw] leading-[1.25]', classNames?.description)}>
              {description}
            </Link>
          }
        </div>
        <div className='flex w-full justify-between'>
          {
            date && <div className='flex gap-[0.932vw] tablet:gap-[1.25vw] desktop:gap-[0.52vw] items-center'>

              <Calendar className='w-[3.262vw] tablet:w-[3vw] desktop:w-[1.248vw] h-[3.262vw] tablet:h-[3vw] desktop:h-[1.248vw]' />
              <span className='text-gray-450 leading-[1.25] text-[2.796vw] tablet:text-[2vw] desktop:text-[0.832vw]'>{date}</span>
            </div>
          }
          {
            button &&
            <Link href={button?.href || "/"} target='_blank' className='flex gap-[0.932vw] tablet:gap-[1.25vw] desktop:gap-[0.52vw] items-center text-primary-900 leading-[1.25] text-[2.796vw] tablet:text-[2vw] desktop:text-[0.832vw] hover:scale-105 duration-300 transition-all'>{button?.title}
              <LongArrowUp className='rotate-90 w-[3.262vw] tablet:w-[3vw] desktop:w-[1.248vw] h-[3.262vw] tablet:h-[3vw] desktop:h-[1.248vw] [&>path]:fill-primary-900' />
            </Link>

          }
        </div>
      </div>
    </div>
  )
}

export default NewsBlogsCard