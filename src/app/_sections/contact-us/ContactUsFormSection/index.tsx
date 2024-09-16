'use client'
import { cn } from '@/lib/utils'
import { SharedSectionsProps } from '@/models/IDictionary'
import { FooterProps } from '@/models/IDictionary/Layout'
import React, { useRef } from 'react'
import FormContent from './FormContent'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Form from '@/app/_components/Form'
import { FormProps, FormType } from '@/models/IDictionary/SharedProps'


type Props = FormProps & Pick<SharedSectionsProps, 'errorMessages' | 'countrieslist'> & Pick<FooterProps, "socialMediaLinks">

const ContactUsFormSection = ({ className, ...formData }: Props) => {
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
        <FormContent {...formData} className='formContent' />
        <Form className='form' {...formData} formType={FormType.contactUs} />
      </div>
    </section>
  )
}

export default ContactUsFormSection