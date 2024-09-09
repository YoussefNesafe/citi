"use client"
import React, { HtmlHTMLAttributes, useState } from 'react'
import Logo from '../../Logo'
import { twMerge } from 'tailwind-merge'
import LanguagesMenu from './LanguagesMenu'
import Menu from '../../icons/Menu'
import { NavbarProps } from '@/models/IDictionary/Layout'
import {
  Sheet, SheetTrigger
  , SheetContent,
  SheetClose,
  SheetFooter
} from '../../ui/sheet'
import { isRtlLang } from '@/app/utils/isRtlLang'
import usePathNameDetails from '@/hooks/usePathNameDetails'
import Link from 'next/link'
import NavLink from './NavLink'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion'
import { cn } from '@/lib/utils'
import Button from '../../Button'


type Props = NavbarProps & HtmlHTMLAttributes<HTMLElement>

const MobileNavbar = ({ links, languages, contactUsButton, className }: Props) => {
  const { lang, groupPathName } = usePathNameDetails();
  const [open, setOpen] = useState<boolean>(false)

  const isGroupPathActive = (pageKey: string) => pageKey === groupPathName || (pageKey === 'home' && groupPathName === undefined)
  return (
    <>
      <div className='w-full flex justify-between items-center'>
        <Logo />
        <div className='flex items-center gap-[3.262vw] tablet:gap-[2.5vw]'>
          <LanguagesMenu languages={languages} />

          <Sheet>
            <SheetTrigger >
              <Menu onClick={() => setOpen(prev => !prev)} className='rtl:-scale-x-[1] desktop:hidden w-[5.592vw] h-[5.592vw] tablet:w-[3vw] tablet:h-[3vw]' />
            </SheetTrigger>
            <SheetContent side={isRtlLang(lang) ? 'left' : 'right'} className="w-3/4 flex flex-col">
              <Accordion type='single' defaultValue={groupPathName} className='overflow-y-auto'>
                <nav>
                  {
                    links.map(link => (
                      <AccordionItem value={link.pageKey} key={link.pageKey}>
                        {
                          link?.href ? <SheetClose asChild>
                            <NavLink {...link} className='py-[3.262vw] tablet:py-[1.75vw] hover:bg-dark/30' />
                          </SheetClose> : <>
                            <AccordionTrigger className={cn(
                              'py-[3.262vw] tablet:py-[1.75vw] hover:bg-dark/30 text-dark text-[3.728vw] tablet:text-[2vw]',
                              isGroupPathActive(link.pageKey) && 'text-primary-900'
                            )}>
                              {link.title}
                            </AccordionTrigger>
                            <AccordionContent>
                              {
                                link?.subLinks?.map(sublink =>
                                  <SheetClose key={sublink.pageKey} asChild>
                                    <NavLink {...sublink} className='py-[2.33vw] tablet:py-[1.25vw] mx-[4.66vw] tablet:mx-[2.5vw] px-[4.66vw] tablet:px-[2.5vw] transition-all duration-300 hover:bg-dark border-b-[0.233vw] last-of-type:border-none hover:text-white border-dark/20' />
                                  </SheetClose>)
                              }
                            </AccordionContent>
                          </>
                        }
                      </AccordionItem>
                    ))
                  }
                </nav>
              </Accordion>
              <div className='absolute bottom-0 bg-white shadow-lg left-0 w-full px-[2.33vw] tablet:px-[1.25vw] py-[2.33vw] tablet:py-[1.25vw] '>
                <Button {...contactUsButton} className='w-full font-medium uppercase' />
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>

    </>

  )
}

export default MobileNavbar