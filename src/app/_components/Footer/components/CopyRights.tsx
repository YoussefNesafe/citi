import { cn } from '@/lib/utils'
import React, { HTMLAttributes } from 'react'
type Props = { text: string } & HTMLAttributes<HTMLElement>
const CopyRights = ({ text, className }: Props) => {
  return (
    <div className={cn('bg-white w-full text-center py-[4.893vw] tablet:py-[2.625vw] desktop:py-[1.092vw] text-[2.33vw] tablet:text-[1.25vw] desktop:text-[0.52vw] leading-[1.25]', className)}>{text}
    </div>
  )
}

export default CopyRights