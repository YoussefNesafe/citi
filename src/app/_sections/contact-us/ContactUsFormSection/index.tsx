'use client'
import ContactUsForm from '@/app/_components/ContactUsForm'
import { cn } from '@/lib/utils'
import { SharedSectionsProps } from '@/models/IDictionary'
import { ContactUsFormProps } from '@/models/IDictionary/ContactUsPage'
import { FooterProps } from '@/models/IDictionary/Layout'
import React, { Suspense, useRef } from 'react'
import FormContent from './FormContent'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


type Props = ContactUsFormProps & Pick<SharedSectionsProps, 'errorMessages' | 'countrieslist'> & Pick<FooterProps, "socialMediaLinks">

const ContactUsFormSection = ({ disclaimer, fields, errorMessages, countrieslist, submit, className, ...rest }: Props) => {
  const containerRef = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo('.form', { y: '-40%', opacity: 0, }, { y: 0, opacity: 1, duration: 1, ease: 'power1.out', });
      gsap.fromTo('.formContent', { x: '-40%', }, { x: 0, duration: 1, ease: 'bounce.out', })
    },
    {
      scope: containerRef,
    }
  );

  return (
    <section className={cn('', className)} ref={containerRef}>
      <div className=' bg-white p-[4.66vw] tablet:p-[3.125vw] desktop:p-[2.028vw] flex flex-col desktop:flex-row gap-[10.485vw] tablet:gap-[5.625vw] desktop:gap-[4.16vw] shrink-0 shadow-custom rounded-[2.796vw] tablet:rounded-[1.5vw] desktop:rounded-[0.624vw] overflow-hidden'>
        <FormContent {...rest} className='formContent' />
        <ContactUsForm className='form' disclaimer={disclaimer} errorMessages={errorMessages} countrieslist={countrieslist} submit={submit} fields={fields} />
      </div>
    </section>
  )
}

export default ContactUsFormSection