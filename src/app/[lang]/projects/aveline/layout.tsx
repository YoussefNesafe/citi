import React, { Suspense } from 'react'
import { Locale } from '../../../../../i18n-config';
import ApartmentsCards from '@/app/_sections/projects/aveline/ApartmentsCards';
import getLocalizedData from '@/services/getLocalizedData';
import { SharedSectionsProps } from '@/models/IDictionary';

export default async function AvelineLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {

  const { apartmentsCards } = await getLocalizedData<SharedSectionsProps>(lang, 'shared');
  return (
    <>
      {children}
      <Suspense>
        <ApartmentsCards {...apartmentsCards} className='section-py' />
      </Suspense>
    </>
  )
}
