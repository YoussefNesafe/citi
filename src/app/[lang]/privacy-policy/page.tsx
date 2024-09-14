import React from 'react'
import { Locale } from '../../../../i18n-config';
import { PrivacyPolicyAndTermsConditionsType } from '@/models/IDictionary/PrivacyPolicyAndTermsConditions';
import getLocalizedData from '@/services/getLocalizedData';
import { MetaDataType } from '@/models/IDictionary/SharedProps';
import { Metadata } from 'next';
import { sanitize } from 'isomorphic-dompurify';
import { cn } from '@/lib/utils';
export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
  // fetch data
  const metadata = await getLocalizedData<MetaDataType>(lang, 'privacyPolicy.metadata');
  return {
    ...metadata,
  };
}
const PrivacyPolicyPage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { title, htmlText } = await getLocalizedData<PrivacyPolicyAndTermsConditionsType>(lang, 'privacyPolicy');
  return (
    <>
      <section className='section-py mt-[11.65vw] tablet:mt-[6.25vw] desktop:mt-[2.6vw]'>
        <div className='text-[6.524vw] tablet:text-[4vw] desktop:text-[2.912vw] font-bold text-center'>
          {title}
        </div>
      </section>
      <section className={cn(
        'section-pb font-sans',
        '[&>div>p]:text-[3.262vw] tablet:[&>div>p]:text-[2vw] desktop:[&>div>p]:text-[1vw]',
        '[&>div>ul>li]:text-[3.262vw] tablet:[&>div>ul>li]:text-[2vw] desktop:[&>div>ul>li]:text-[1vw]',
        '[&>div>p>strong]:text-[4.194vw] tablet:[&>div>p>strong]:text-[2.5vw] desktop:[&>div>p>strong]:text-[1.248vw] leading-[1.5] [&>div>p]:my-[3.262vw] tablet:[&>div>p]:my-[1.75vw] desktop:[&>div>p]:my-[0.728vw]',
        '[&>div>ul]:pl-[2.33vw] tablet:[&>div>ul]:pl-[2vw] desktop:[&>div>ul]:pl-[0.832vw]',
        '[&>div>ul>li>strong]:text-[3.728vw] tablet:[&>div>ul>li>strong]:text-[2.25vw] desktop:[&>div>ul>li>strong]:text-[1.04vw] [&>div>ul>li>strong]:italic  [&>div>ul>li>strong]:font-medium',
      )} dangerouslySetInnerHTML={{ __html: sanitize(htmlText) }} />
    </>
  )
}

export default PrivacyPolicyPage