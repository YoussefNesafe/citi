'use clinet'
import React from 'react'
import { NavbarProps } from '@/models/IDictionary/Layout'
import usePathNameDetails from '@/hooks/usePathNameDetails'
import Link from 'next/link'
import GlobIcon from '../../icons/GlobIcon'
import Image from 'next/image'

const LanguagesMenu = ({ languages }: Pick<NavbarProps, 'languages'>) => {
  const { lang } = usePathNameDetails();
  const fillteredLanguages = languages.filter(l => l.value !== lang);
  return (
    <div className='flex group  cursor-pointer gap-[0.932vw] tablet:gap-[0.5vw] desktop:gap-[0.208vw]  py-[4.194vw] tablet:py-[2.875vw] desktop:py-[1.716vw]'>
      <input type='checkbox' className='absolute top-0 left-0 h-full w-full  peer/checkbox z-[2] opacity-0' />
      <div
        className='text-[3.728vw] tablet:text-[2.25vw] desktop:text-[1.04vw] cursor-pointer font-medium leading-[1.25] flex items-center gap-[1.631vw] tablet:gap-[0.875vw] desktop:gap-[0.364vw] group-hover:text-primary-900 uppercase peer-checked/checkbox:text-primary-900  peer-checked/checkbox:[&>svg>path]:stroke-primary-900' >
        {lang}
        <GlobIcon className='w-[5.592vw] tablet:w-[3vw] desktop:w-[1.248vw] h-[5.592vw] tablet:h-[3vw] desktop:h-[1.248vw] group-hover:[&>path]:stroke-primary-900' />
      </div>
      <div className='absolute w-max border shadow-md  rounded-[2.33vw]  tablet:rounded-[1.25vw] desktop:rounded-[0.52vw] top-[13.98vw] tablet:top-[8.75vw] desktop:top-[4.68vw] text-nowrap bg-white py-[2.33vw] tablet:py-[1.25vw] desktop:py-[0.52vw] px-[4.66vw] ltr:right-0 rtl:left-0 tablet:px-[2.5vw] desktop:px-[1.04vw]  hidden peer-checked/checkbox:block group-hover:block hover:block overflow-hidden '>
        {
          fillteredLanguages?.map(({ href, label, value }) => (
            <Link
              key={value}
              href={href}
              className='text-[3.262vw] tablet:text-[2vw] desktop:text-[0.936vw] font-medium py-[3.262vw] tablet:py-[1.75vw] desktop:py-[0.728vw] last-of-type:border-none border-b border-gray-450 transition-all duration-500 leading-[1.25] flex items-center gap-[1.631vw] tablet:gap-[0.875vw] desktop:gap-[0.364vw] navlink w-full ltr:justify-between'
            >
              <Image src={`/images/flags/${value}.png`} alt={value} width={24} height={24} className='w-[5.592vw] tablet:w-[3vw] desktop:w-[1.248vw] h-[5.592vw] tablet:h-[3vw] desktop:h-[1.248vw]' />
              {label}
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default LanguagesMenu