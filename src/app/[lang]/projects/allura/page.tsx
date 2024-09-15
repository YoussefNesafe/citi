import AlluraPopUpSection from '@/app/_sections/shared/AlluraPopUpSection';
import MapWrapper from '@/app/_sections/shared/MapWrapper';
import { AlluraPopUpType } from '@/models/IDictionary/SharedProps';
import getLocalizedData from '@/services/getLocalizedData';
import React, { Suspense } from 'react'
import { Locale } from '../../../../../i18n-config';
import AlluraBanner from '@/app/_sections/projects/allura/AlluraBanner';
import { AlluraPageType } from '@/models/IDictionary/ProjectsPages/AlluraPage';
import AlluraOverview from '@/app/_sections/projects/allura/AlluraOverview';
import { SharedSectionsProps } from '@/models/IDictionary';
import ProjectBriefSection from '@/app/_sections/shared/ProjectBriefSection';

const mapProps = {
  latitude: 25.06244118496213,
  longitude: 55.21884912822761,
  locationName: 'Allura'
}

const AlluraPage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { banner, overView, projectBrief } = await getLocalizedData<AlluraPageType>(lang, 'projects.allura');
  const { alluraPopUp, mapHeader } = await getLocalizedData<SharedSectionsProps>(lang, 'shared');


  return (
    <>
      <Suspense>
        <AlluraBanner {...banner} />
      </Suspense>
      <Suspense>
        <AlluraOverview {...overView} className="section-py" />
      </Suspense>
      <ProjectBriefSection {...projectBrief} className='section-py' />
      <MapWrapper {...mapProps} header={mapHeader} />
      {/* <AlluraPopUpSection {...alluraPopUp} /> */}
    </>
  )
}

export default AlluraPage