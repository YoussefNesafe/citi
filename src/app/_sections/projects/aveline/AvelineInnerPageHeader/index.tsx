import SectionDescription from '@/app/_components/SectionHeader/SectionDescription'
import SectionTitle from '@/app/_components/SectionHeader/SectionTitle'
import { cn } from '@/lib/utils'
import { SectionHeaderProps } from '@/models/IDictionary/SharedProps'
import React from 'react'

const AvelineInnerPageHeader = ({ title, description, className, ...props }: SectionHeaderProps) => {
  return (
    <section className={cn('flex flex-col items-center justify-center text-center', className)} {...props}>
      {title && <SectionTitle text={title} className='text-primary-900 text-[9.32vw] tablet:text-[8.75vw] desktop:text-[4.68vw]' />}
      {description && <SectionDescription text={description} className='desktop:max-w-[52.416vw]' />}

    </section>
  )
}

export default AvelineInnerPageHeader