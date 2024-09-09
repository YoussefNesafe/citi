"use client";
import React, { HtmlHTMLAttributes, useRef, useEffect } from 'react';
import Logo from '../../Logo';
import Button from '../../Button';
import { twMerge } from 'tailwind-merge';
import ArrowDown from '../../icons/ArrowDown';
import usePathNameDetails from '@/hooks/usePathNameDetails';
import { NavbarProps } from '@/models/IDictionary/Layout';
import NavLink from './NavLink';
import SubNavTitle from './SubNavTitle';
import LanguagesMenu from './LanguagesMenu';


type Props = NavbarProps & HtmlHTMLAttributes<HTMLElement>
const DesktopNavbar = ({ links, languages, contactUsButton, className }: Props) => {
  const { groupPathName, pagePathName } = usePathNameDetails()
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);



  const isHomePage = (pageKey: string) => pageKey === 'home' && groupPathName === undefined
  const isActive = (pageKey: string) => pageKey === 'home' ? isHomePage(pageKey) : (pageKey === groupPathName || pageKey === pagePathName)
  return (
    <div className={twMerge('w-full h-full flex items-center justify-between static', className)}>
      <div className='flex items-center desktop:gap-[2.028vw]'>
        <Logo type={'gold'} />
        <nav className='flex desktop:gap-[2.392vw]'>
          {links.map((link, index) => (
            <div className="group" key={link.pageKey} >
              {link.href ? (
                <NavLink
                  {...link}
                  //@ts-ignore
                  ref={el => (linkRefs.current[index] = el)}
                  className='uppercase'
                />) :
                <div
                  //@ts-ignore
                  ref={el => (linkRefs.current[index] = el)}
                >
                  <SubNavTitle
                    title={link.title}
                    isActive={isActive(link.pageKey)}
                    className='uppercase '
                  />
                  <div className='absolute w-fit border shadow-md desktop:rounded-[0.52vw] text-nowrap bg-white desktop:py-[0.52vw] desktop:px-[1.04vw] group-hover:block hover:block hidden  overflow-hidden'>
                    {
                      link?.subLinks?.map(subLink => (
                        <NavLink
                          {...subLink}
                          key={subLink.pageKey}
                          className='desktop:text-[0.936vw] desktop:py-[0.728vw] last-of-type:border-none border-b border-gray-450 transition-all duration-500 navlink' />
                      ))
                    }
                  </div>
                </div>

              }
            </div>
          )
          )}
        </nav>
      </div>
      <div className='flex items-center gap-[3.262vw] tablet:gap-[2.5vw] desktop:gap-[1.04vw]'>
        <Button {...contactUsButton} className='uppercase' size='md' />
        <LanguagesMenu languages={languages} />
      </div>
    </div>
  );
};

export default DesktopNavbar;
