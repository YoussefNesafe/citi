import { CardProps, CardType } from './types'
import PointCard from './PointCard'
import JourneyCard from './JourneyCard'
import NewsBlogsCard from './NewsBlogsCard'




const Card = ({ type, ...props }: CardProps) => {

  const CardsMap: { [type in CardType]: any } = {
    [CardType.POINT_CARD]: <PointCard {...props} />,
    [CardType.JOURNEY_CARD]: <JourneyCard   {...props} />,
    [CardType.NEWS_BLOGS_CARD]: <NewsBlogsCard   {...props} />,
  }


  return (
    <>
      {CardsMap[type]}
    </>
  )
}

export default Card