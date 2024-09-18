import { SocialMediaLinkProps } from '@/models/IDictionary/Layout'
import React from 'react'
import Facebook from '../icons/Facebook'
import X from '../icons/X'
import Linkedin from '../icons/Linkedin'
import Instagram from '../icons/Instagram'
import Youtube from '../icons/Youtube'
import Link from 'next/link'
import { AdditionalProps } from '@/models/IDictionary/SharedProps'
import { cn } from '@/lib/utils'

type Props = AdditionalProps & { links: SocialMediaLinkProps[], iconClassName?: string }

export const SocialMediaLinks = ({ links, className, iconClassName }: Props) => {
  const IconsMap = {
    x: <X />,
    facebook: <Facebook />,
    linkedin: <Linkedin />,
    instagram: <Instagram />,
    youtube: <Youtube />
  }

  type iconType = keyof typeof IconsMap
  return (
    <div className={cn('flex w-full items-center justify-between tablet:w-fit gap-[1.864vw] tablet:gap-[1.25vw] desktop:gap-[0.416vw]', className)}>

      {
        links.map(({ href, icon }, index) => <Link key={index + "-link"} href={href} className={cn('[&>svg>path]:hover:fill-primary-900 hover:[&>svg]:fill-white  w-[10.718vw] tablet:w-[7.75vw] desktop:w-[2.392vw] h-[10.718vw] shrink-0 [&>svg]:w-full [&>svg]:h-full tablet:h-[7.75vw] desktop:h-[2.392vw]', iconClassName)} target='_blank'>
          {IconsMap?.[icon as iconType]}
        </Link>)
      }
    </div>
  )
}

export default SocialMediaLinks