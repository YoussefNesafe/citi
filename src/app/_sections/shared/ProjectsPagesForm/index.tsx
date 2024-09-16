"use client";
import Form from '@/app/_components/Form'
import SectionDescription from '@/app/_components/SectionHeader/SectionDescription';
import SectionTitle from '@/app/_components/SectionHeader/SectionTitle';
import { cn } from '@/lib/utils';
import { SharedSectionsProps } from '@/models/IDictionary'
import { FormProps, FormType } from '@/models/IDictionary/SharedProps'
import React from 'react'
type Props = FormProps & Pick<SharedSectionsProps, 'errorMessages' | 'countrieslist'>
const ProjectsPagesForm = ({ className, ...formData }: Props) => {
  return (
    <section id='formSection' className={cn('', className)}>
      <div className='desktop:max-w-[49.92vw] desktop:m-auto bg-white p-[4.66vw] tablet:p-[5vw] desktop:p-[3.12vw] rounded-[2.796vw] tablet:rounded-[1.5vw] desktop:rounded-[0.624vw] shadow-custom flex flex-col gap-[4.66vw] tablet:gap-[3.75vw] desktop:gap-[2.6vw]'>
        <div className='flex flex-col gap-[1.864vw] tablet:gap-[0.5vw] desktop:gap-[1.04vw]'>
          <SectionTitle text={formData.title} className='text-center text-primary-900' />
          <SectionDescription text={formData.description} className='text-center text-dark desktop:text-[1.2vw] font-semibold' />
        </div>

        <Form className='form' {...formData} formType={FormType.projectsPagesContacts} />
      </div>
    </section>
  )
}

export default ProjectsPagesForm