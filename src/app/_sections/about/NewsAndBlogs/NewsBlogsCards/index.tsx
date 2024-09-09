import Card from '@/app/_components/Card'
import { CardType } from '@/app/_components/Card/types'
import { cn } from '@/lib/utils'
import { NewsAndBlogsPagesType } from '@/models/IDictionary/AboutPages/NewsAndBlogsPages'
import { AdditionalProps } from '@/models/IDictionary/SharedProps'
import React from 'react'

type Props = AdditionalProps & Pick<NewsAndBlogsPagesType, 'cards'>

const NewsBlogsCards = ({ cards, className, ...props }: Props) => {
  return (
    <section className={cn('', className)} {...props}>
      <Card {...cards[0]} type={CardType.NEWS_BLOGS_CARD} className="tablet:flex-row  mb-[6.99vw] tablet:mb-[3.75vw] desktop:mb-[1.56vw] gap-[6.99vw] tablet:gap-[3.75vw] desktop:gap-[1.56vw]" classNames={{
        title: "desktop:text-[1.2vw] text-gray-450",
        description: "text-right tablet:max-w-[62.5vw] desktop:max-w-full tablet:self-end desktop:self-stretch desktop:text-[1.5vw] text-dark font-bold",
        contentWrapper: 'justify-around ',
      }} />
      <div className='w-full flex gap-[6.99vw]  tablet:gap-[3.75vw] desktop:gap-[1.56vw] flex-wrap justify-center'>
        {
          cards.map((card, index) => index !== 0 && <Card key={index + "-card"} className='tablet:max-w-[41.5vw] desktop:max-w-[26.1vw]' {...card} type={CardType.NEWS_BLOGS_CARD} />)
        }
      </div>
    </section>
  )
}

export default NewsBlogsCards