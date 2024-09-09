import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import ArrowDown from '../../icons/ArrowDown';


type Props = { title: string; isActive?: boolean } & HTMLAttributes<HTMLElement>

const SubNavTitle = ({ title, isActive, ...props }: Props) => {
  return (
    <div
      {...props}
      className={twMerge('desktop:text-[1.248vw] cursor-pointer font-medium leading-[1.25] flex items-center desktop:gap-[0.364vw] group-hover:text-primary-900', isActive && 'text-primary-900 font-semibold', props?.className)} >
      {title}
      {
        <ArrowDown fill={isActive ? undefined : 'dark'} fillOpacity={1} className='desktop:w-[0.832vw] desktop:h-[0.624vw] textShadow transition-all duration-700 group-hover:rotate-180 group-hover:[&>path]:fill-primary-900' />
      }
    </div>
  )
}

export default SubNavTitle