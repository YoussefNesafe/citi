"use client"
import PhotoCard from '@/app/_components/PhotoCard'
import SectionTitle from '@/app/_components/SectionHeader/SectionTitle'
import usePathNameDetails from '@/hooks/usePathNameDetails'
import { cn } from '@/lib/utils'
import { ApartmentsCardsType } from '@/models/IDictionary/SharedProps'
import React from 'react'




const ApartmentsCards = ({ title, cards, className, ...props }: ApartmentsCardsType) => {
  const { innerPagePathName } = usePathNameDetails();
  const cardsFiltration = () => {
    if (innerPagePathName === undefined) {
      return cards.filter(card => card.button.href !== '/projects/aveline')
    }
    return cards.filter(card => !card.button.href?.includes(innerPagePathName))
  }
  return (
    <section className={cn('flex flex-col gap-[6.99vw] tablet:gap-[6.25vw] desktop:gap-[3.12vw] justify-center items-center ', className)} {...props}>
      <SectionTitle text={title} className='text-[4.66vw]' />
      <div className='w-full flex flex-wrap justify-between gap-[4.66vw] tablet:gap-[2.5vw] desktop:gap-[2.708vw] tablet:justify-between'>
        {
          cardsFiltration().map((card, index) => <PhotoCard key={index + '-card'} {...card} />)
        }
      </div>
    </section>
  )
}

export default ApartmentsCards