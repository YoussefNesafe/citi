import SectionWithImageAndPointCards from '@/app/_sections/shared/SectionWithImageAndPointCards'
import { OurValuesType } from '@/models/IDictionary/AboutPages/CitiDeveloper'
import { Suspense } from 'react';


const OurValues = ({ ...props }: OurValuesType) => {
  return <Suspense>
    <SectionWithImageAndPointCards  {...props} reverse />
  </Suspense>
}

export default OurValues