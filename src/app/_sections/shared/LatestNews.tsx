import Button from "@/app/_components/Button"
import Card from "@/app/_components/Card"
import { CardType } from "@/app/_components/Card/types"
import SectionHeader from "@/app/_components/SectionHeader"
import { cn } from "@/lib/utils"
import { LatestNewsProps } from "@/models/IDictionary/SharedProps"


const LatestNews = ({ button, cards, header, mainArticle, className, ...props }: LatestNewsProps) => {
  return (
    <section {...props} className={cn("flex flex-col gap-[9.32vw] tablet:gap-[7.5vw] desktop:gap-[4.16vw]", className)}>
      <SectionHeader {...header} className="text-center" />
      <div className="flex flex-col items-center desktop:items-stretch gap-[4.66vw] tablet:gap-[2.5vw] desktop:gap-[1.56vw]">
        <Button size='sm' {...button} className="desktop:text-[0.936vw]" />
        <div className="flex flex-col desktop:flex-row gap-[3.495vw] tablet:gap-[6.25vw] desktop:gap-[6.24vw]">
          <Card  {...mainArticle} type={CardType.NEWS_BLOGS_CARD}
            className="w-full desktop:max-w-[33.852vw] tablet:flex-row desktop:flex-col"
            classNames={{
              title: "desktop:text-[1.248vw]",
              description: "text-right tablet:max-w-[62.5vw] desktop:max-w-full tablet:self-end desktop:self-stretch desktop:text-[0.936vw]",
              contentWrapper: "tablet:justify-around"
            }} />
          <div className="flex flex-col gap-[3.495vw] tablet:gap-[3.75vw] desktop:gap-[1.56vw]">
            {
              cards.map((card, index) => <Card key={index + "c-ard"}  {...card} type={CardType.NEWS_BLOGS_CARD}
                className="flex-row"
                classNames={{
                  title: "desktop:text-[1.248vw]",
                  description: "desktop:text-[0.936vw]",
                  contentWrapper: "tablet:justify-around "
                }}
                //@ts-ignore
                image={{
                  ...card?.image,
                  className: "w-[30.29vw] tablet:w-[35vw] desktop:w-[14.56vw] h-auto desktop:h-[10.4vw] shrink-0"
                }} />)
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestNews