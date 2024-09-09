import usePathNameDetails from '@/hooks/usePathNameDetails';
import { PageLinkItemProps } from '@/models/IDictionary/Layout';
import Link from 'next/link';
import React, { HtmlHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = PageLinkItemProps & HtmlHTMLAttributes<HTMLElement>;

const NavLink = forwardRef<HTMLAnchorElement, Props>(
  ({ href, pageKey, title, onClick, className, ...props }, ref) => {
    const { groupPathName, pagePathName } = usePathNameDetails();
    const isHomePage = (pageKey: string) => pageKey === 'home' && groupPathName === undefined;
    const isActive = (pageKey: string) => pageKey === 'home' ? isHomePage(pageKey) : (pageKey === groupPathName || pageKey === pagePathName);

    return (
      <Link
        {...props}
        href={href}
        onClick={onClick}
        ref={ref}
        className={twMerge(
          'text-[3.728vw] tablet:text-[2vw] desktop:text-[1.248vw] font-medium leading-[1.25] flex items-center',
          isActive(pageKey) && 'text-primary-900 font-semibold',
          className
        )}
      >
        {title}
      </Link>
    );
  }
);

NavLink.displayName = 'NavLink';

export default NavLink;
