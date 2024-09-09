import SectionHeader from '@/app/_components/SectionHeader'
import SideSectionImages from '@/app/_components/SideSectionImages'
import { cn } from '@/lib/utils'
import { OverDecadeOfTrustType } from '@/models/IDictionary/AboutPages/CitiDeveloper'
import React, { Suspense } from 'react'


const OverDecadeOfTrust = ({ animatedText, images, header, className, ...props }: OverDecadeOfTrustType) => {
  return (
    <section {...props} className={cn('flex flex-col  desktop:flex-row gap-[6.99vw] tablet:gap-[7.5vw] desktop:gap-[8.06vw]', className)} >
      <div className='w-full flex flex-col gap-[4.66vw] tablet:gap-[2.5vw] desktop:gap-[1.82vw] desktop:max-w-[35.464vw] shrink-0 desktop:justify-center'>
        <SectionHeader {...header} />
      </div>
      <Suspense>
        <SideSectionImages images={images} animatedText={animatedText} />
      </Suspense>
    </section>
  )
}

export default OverDecadeOfTrust