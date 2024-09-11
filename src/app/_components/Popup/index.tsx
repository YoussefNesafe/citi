import React, { ReactNode, Suspense } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle
} from "@/app/_components/ui/dialog"
import { AdditionalProps } from '@/models/IDictionary/SharedProps'
import { cn } from '@/lib/utils'

const Popup = ({ children, className, ...props }: AdditionalProps & { children: ReactNode }) => {
  return (
    <Suspense>
      <Dialog defaultOpen >
        <DialogTitle hidden />
        <DialogContent  {...props} className={cn('border-0 tablet:border-0 desktop:border-0 bg-linear-popup w-auto h-auto text-white p-[4.66vw] tablet:p-[3.75vw] desktop:p-[3.12vw]', className)}>
          {children}
        </DialogContent>
      </Dialog>
    </Suspense>
  )
}

export default Popup