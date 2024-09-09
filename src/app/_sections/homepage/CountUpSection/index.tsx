import CountUpCard from '@/app/_components/CountUpCard'
import { cn } from '@/lib/utils'
import { CountUpSectionProps } from '@/models/IDictionary/HomePage'
import React, { HTMLAttributes } from 'react'


type Props = { cards: CountUpSectionProps } & HTMLAttributes<HTMLElement>

const CountUpSection = ({ cards, className, ...props }: Props) => {
  const cardsLength = cards.length
  return (
    <section {...props} className={cn("flex w-full flex-col gap-[11.65vw] tablet:gap-[1.25vw] tablet:flex-wrap  tablet:flex-row  items-center justify-between text-center", className)}>
      {cards.map(({ number, text, suffix }, index) => (
        <>
          <CountUpCard
            key={`counter-card-${index}`}
            number={number}
            text={text}
            suffix={suffix}
          />
          {
            index !== cardsLength - 1 ? <div className='hidden tablet:block w-[0.233vw] bg-primary-900 tablet:h-[5.625vw] desktop:h-[4.732vw]' /> : <></>
          }
        </>
      ))}
    </section>
  )
}

export default CountUpSection