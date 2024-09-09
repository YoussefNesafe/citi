'use client';

import isBrowser from '@/app/utils/isBrowser';
import useInternetConnection from '@/hooks/useInternetConnection';
import { InternetConnectionProps } from '@/models/IDictionary/Layout';
import Image from 'next/image';
import { createPortal } from 'react-dom';

export default function InternetConnection({ title, description }: InternetConnectionProps) {

  const { online } = useInternetConnection();

  if (!isBrowser || online) return null;
  return createPortal(
    <div className="fixed left-0 top-0 z-50 grid h-full w-full place-items-center bg-black bg-opacity-80">
      <div
        className="z-50 min-h-[13.35vw] tablet:min-h-[6.25vw] desktop:min-h-[2.6vw] w-fit max-w-[90%] rounded-[5.34vw] tablet:rounded-[2.5vw] desktop:rounded-[1.04vw] 
      bg-linear-black p-[5.34vw] tablet:p-[5vw] desktop:p-[2.08vw] flex flex-col items-center gap-[5.34vw] tablet:gap-[2.5vw] desktop:gap-[2.6vw] text-white"
      >


        <Image src='/images/shared/disconnected.png' alt='disconnected' width={512} height={512} className='w-[26.7vw] tablet:w-[18.75vw] desktop:w-[7.8vw] h-[26.7vw] tablet:h-[18.75vw] desktop:h-[7.8vw]  animate-pulse' />
        <div className='flex flex-col gap-[2.67vw] tablet:gap-[2.5vw] desktop:gap-[1.04vw] text-center'>
          <div className='text-[6.408vw] tablet:text-[4vw] desktop:text-[1.664vw] font-semibold '>
            {title}
          </div>
          <div className='text-[4.806vw] tablet:text-[3vw] desktop:text-[1.248vw] text-gray-400'>
            {description}
          </div>
        </div>
      </div>
    </div>,
    window.document.body
  );
}
