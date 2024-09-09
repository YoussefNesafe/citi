import Card from '@/app/_components/Card'
import { CardType } from '@/app/_components/Card/types'
import SectionHeader from '@/app/_components/SectionHeader'
import SideSectionImages from '@/app/_components/SideSectionImages'
import { cn } from '@/lib/utils'
import { WhatMakesUsDifferentSectionProps } from '@/models/IDictionary/HomePage'
import React, { HTMLAttributes, Suspense } from 'react'

type Props = WhatMakesUsDifferentSectionProps & HTMLAttributes<HTMLElement>

const WhatMakesUsDifferent = ({ cards, animatedText, images, header, className, ...props }: Props) => {
  return (
    <section {...props} className={cn('flex flex-col  desktop:flex-row gap-[6.99vw] tablet:gap-[7.5vw] desktop:gap-[8.06vw]', className)} >
      <div className='w-full flex flex-col gap-[4.66vw] tablet:gap-[2.5vw] desktop:gap-[1.82vw] desktop:max-w-[35.464vw] shrink-0 desktop:justify-center'>
        <SectionHeader {...header} />
        <div className='flex flex-col gap-[2.33vw] tablet:gap-[1.875vw] desktop:gap-[1.04vw]'>
          {
            cards?.map((card, index) => <Card key={index + "-card"} type={CardType.POINT_CARD} {...card} />)
          }
        </div>
      </div>
      <Suspense>
        <SideSectionImages images={images} animatedText={animatedText} />
      </Suspense>
    </section>
  )
}

export default WhatMakesUsDifferent