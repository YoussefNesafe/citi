import ImageWrapper from '@/app/_components/ImageWrapper'
import Link from 'next/link'
import React from 'react'


export type LogoProps = {
  type?: "gold" | "white"
}


const Logo = ({ type = "gold" }: LogoProps) => {
  return (
    <Link href={"/"}>
      {
        type === "gold" ? <ImageWrapper src='/images/shared/logo-gold.png' alt='logo' width={286} height={95} className='w-auto h-[13vw] tablet:h-[10vw]  desktop:h-[4vw]' /> : <ImageWrapper src='/images/shared/logo-white.png' alt='logo' width={286} height={95} className='w-auto h-[13vw] tablet:h-[10vw] desktop:h-[4vw]' />
      }
    </Link>
  )
}

export default Logo