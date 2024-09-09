import { SectionHeaderProps } from '@/models/IDictionary/SharedProps'
import React from 'react'
import SectionTitle from './SectionTitle'
import SectionSubtitle from './SectionSubtitle'
import SectionDescription from './SectionDescription'
import { cn } from '@/lib/utils'


const SectionHeader = ({ description, subtitle, title, className, ...props }: SectionHeaderProps) => {
  return (
    <div {...props} className={cn('flex flex-col gap-[1.398vw] tablet:gap-[1.25vw] desktop:gap-[0.52vw]', className)}>
      <div className='flex flex-col gap-[1.398vw] tablet:gap-[0.75vw] desktop:gap-[0.312vw]'>
        {subtitle && <SectionSubtitle text={subtitle} />}
        {title && <SectionTitle text={title} />}
      </div>
      {description && <SectionDescription text={description} />}
    </div>
  )
}

export default SectionHeader