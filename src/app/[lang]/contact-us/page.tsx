import React from 'react'
import { Locale } from '../../../../i18n-config'
import getLocalizedData from '@/services/getLocalizedData';
import { ContactUsPageProps } from '@/models/IDictionary/ContactUsPage';
import ContactUsFormSection from '@/app/_sections/contact-us/ContactUsFormSection';
import { LayoutProps } from '@/models/IDictionary/Layout';
import { SharedSectionsProps } from '@/models/IDictionary';

const ContactUsPage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { form } = await getLocalizedData<ContactUsPageProps>(lang, 'contactUs');
  const { footer } = await getLocalizedData<LayoutProps>(lang, 'layout');
  const { errorMessages, countrieslist } = await getLocalizedData<SharedSectionsProps>(lang, 'shared');

  return (
    <>
      <ContactUsFormSection
        {...form}
        errorMessages={errorMessages}
        countrieslist={countrieslist}
        socialMediaLinks={footer.socialMediaLinks}
        className='section-py'
      />
    </>
  )
}

export default ContactUsPage