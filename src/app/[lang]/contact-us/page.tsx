import React, { Suspense } from 'react'
import { Locale } from '../../../../i18n-config'
import getLocalizedData from '@/services/getLocalizedData';
import { ContactUsPageProps } from '@/models/IDictionary/ContactUsPage';
import ContactUsFormSection from '@/app/_sections/contact-us/ContactUsFormSection';
import { LayoutProps } from '@/models/IDictionary/Layout';
import { SharedSectionsProps } from '@/models/IDictionary';
import { Metadata } from 'next';
import { MetaDataType } from "@/models/IDictionary/SharedProps";

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
  // fetch data
  const metadata = await getLocalizedData<MetaDataType>(lang, 'contactUs.metadata');
  return {
    ...metadata,
  };
}

const ContactUsPage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { form } = await getLocalizedData<ContactUsPageProps>(lang, 'contactUs');
  const { footer } = await getLocalizedData<LayoutProps>(lang, 'layout');
  const { errorMessages, countrieslist } = await getLocalizedData<SharedSectionsProps>(lang, 'shared');

  return (
    <>
      <Suspense>
        <ContactUsFormSection
          {...form}
          errorMessages={errorMessages}
          countrieslist={countrieslist}
          socialMediaLinks={footer.socialMediaLinks}
          className='section-py'
        />
      </Suspense>
    </>
  )
}

export default ContactUsPage