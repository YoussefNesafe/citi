import Button from '@/app/_components/Button'
import FloatingCardWithImage from '@/app/_sections/shared/FloatingCardWithImage'
import { cn } from '@/lib/utils'
import { DiscoverCommunityType } from '@/models/IDictionary/ProjectsPages/AvelinePage'
import React from 'react'

const DiscoverCommunity = ({ button, description, image, title, className, ...props }: DiscoverCommunityType) => {
  const CardComponent = () => (
    <div className='py-[4.66vw] tablet:py-[4.75vw] desktop:py-[4.316vw] px-[4.66vw] tablet:px-[3.75vw] desktop:px-[3.64vw]'>
      <div className='flex flex-col gap-[2.33vw] tablet:gap-[5vw] desktop:gap-[4.992vw]'>
        <div className='flex flex-col gap-[2.33vw] tablet:gap-[5vw] desktop:gap-[2.392vw]'>
          <h2 className='text-[5.592vw] tablet:text-[4vw] desktop:text-[1.56vw] leading-[1.25] font-medium text-primary-600'>{title}</h2>
          <p className='text-[3.262vw] tablet:text-[2vw] desktop:text-[1.04vw] leading-[1.25]  text-white'>{description}</p>
        </div>
        <Button {...button} size="md" theme='secondary' />
      </div>
    </div>
  )

  return (
    <FloatingCardWithImage image={{ ...image, className: 'tablet:h-[50vw] desktop:w-[66.768vw] desktop:h-[41.132vw]' }} className={cn('', className)} {...props} cardComponent={<CardComponent />} {...props} />
  )
}

export default DiscoverCommunity