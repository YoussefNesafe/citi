import Image from 'next/image'
import React from 'react'
import CopyRights from './components/CopyRights'
import LocationCard from './components/LocationCard'
import WhereToGoNext from './components/WhereToGoNext'
import FooterLinks from './components/FooterLinks'
import { FooterProps } from '@/models/IDictionary/Layout'

const Footer = ({ copyRights, links, locationCard, socialMediaLinks, whereToGoNextCards, contactUsButton }: FooterProps) => {
  return (
    <footer>
      <section className='desktop:hidden block mb-[6.99vw] tablet:mb-[3.75vw]'>
        <WhereToGoNext className='w-full' whereToGoNextCards={whereToGoNextCards} />
      </section>
      <section className='flex flex-col justify-center items-start desktop:grid desktop:grid-cols-8 desktop:grid-rows-5  gap-[9.32vw] tablet:gap-[5vw] desktop:gap-[1.56vw]'>
        <Image src='/images/shared/primary-bg.png' alt='bg' width={1920} height={631} className='w-[100vw] h-[80%] tablet:h-[85%] desktop:h-[60%] object-cover absolute bottom-0 left-0' />
        <LocationCard {...locationCard} className='desktop:col-span-3 desktop:row-span-5 w-full desktop:max-w-[28.756vw]' />
        <WhereToGoNext className='hidden desktop:flex w-full col-span-5 row-span-2' whereToGoNextCards={whereToGoNextCards} />
        <FooterLinks contactUsButton={contactUsButton} links={links} socialMediaLinks={socialMediaLinks} className='col-span-5 w-full row-span-3 ' />
      </section>
      <CopyRights text={copyRights} />
    </footer>
  )
}

export default Footer