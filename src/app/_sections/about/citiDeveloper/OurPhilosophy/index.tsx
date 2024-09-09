import SectionWithImageAndPointCards from '@/app/_sections/shared/SectionWithImageAndPointCards'
import { OurPhilosophyType } from '@/models/IDictionary/AboutPages/CitiDeveloper'
import { Suspense } from 'react'


const OurPhilosophy = ({ ...props }: OurPhilosophyType) => {
  return <Suspense>
    <SectionWithImageAndPointCards  {...props} />
  </Suspense>
}

export default OurPhilosophy