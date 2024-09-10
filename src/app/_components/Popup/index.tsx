import React, { ReactNode, Suspense } from 'react'
import {
  Dialog,
  DialogContent,
} from "@/app/_components/ui/dialog"
import { DialogTitle } from '@radix-ui/react-dialog'

const Popup = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense>
      <Dialog defaultOpen >
        <DialogTitle hidden />
        <DialogContent className='border-0 tablet:border-0 desktop:border-0 bg-linear-popup w-auto h-auto text-white p-[4.66vw] tablet:p-[3.75vw] desktop:p-[3.12vw]'>
          {children}
        </DialogContent>
      </Dialog>
    </Suspense>
  )
}

export default Popup