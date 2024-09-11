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
        type === "gold" ? <ImageWrapper src='/images/shared/logo-gold.png' alt='logo' width={286} height={95} className='w-auto h-[13vw] tablet:h-[10vw]  desktop:h-[4vw]' skeletonClassName='h-[13vw] tablet:h-[10vw]  desktop:h-[4vw] w-[30.756vw] tablet:w-[30vw] desktop:w-[11.856vw]' /> : <ImageWrapper src='/images/shared/logo-white.png' alt='logo' width={286} height={95} className='w-auto h-[13vw] tablet:h-[10vw] desktop:h-[4vw]' skeletonClassName='h-[13vw] tablet:h-[10vw]  desktop:h-[4vw] w-[30.756vw] tablet:w-[30vw] desktop:w-[11.856vw]' />
      }
    </Link>
  )
}

export default Logo