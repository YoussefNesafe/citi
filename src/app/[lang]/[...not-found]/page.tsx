import getLocalizedData from '@/services/getLocalizedData';
import Image from 'next/image';
import { NotFoundPageProps } from '@/models/IDictionary/NotFoundPage';
import Link from 'next/link';

export default async function NotFound({ params: { lang } }: any) {
  const { title, button } = await getLocalizedData<NotFoundPageProps>(lang, 'notFoundPage');
  return (
    <>
      <Image src='/images/404/background.png' alt='background' width={1366} height={768} className='h-full w-full absolute top-0 left-0 z-[-1]' />
      <div className='w-full h-full flex flex-col items-center gap-[21.36vw] tablet:gap-[18.75vw] desktop:gap-[8.7vw]'>
        <div className='w-full flex items-center justify-center relative'>
          <Image src='/images/404/background-alt.png' alt='background-alt' width={592} height={407} className='desktop:w-[34.336vw] h-auto absolute top-0 left-[50%] -translate-x-[50%] animate-pulse' />
          <div className='flex w-full justify-center gap-[3.204vw] tablet:gap-[2.5vw] desktop:gap-[1.16vw] z-[2]'>
            <Image src='/images/404/4.png' alt='4' width={141} height={333} className='w-[29.37vw] tablet:w-[17.625vw] desktop:w-[8.178vw] h-auto animate-slideToBottom -translate-y-full' />
            <Image src='/images/404/0.png' alt='0' width={113} height={405} className='w-[24.03vw] tablet:w-[14.125vw] desktop:w-[6.554vw] h-auto animate-slideToBottom2 -translate-y-full' />
            <Image src='/images/404/4-2.png' alt='4' width={119} height={324} className='w-[25.365vw] tablet:w-[14.875vw] desktop:w-[6.902vw] h-auto animate-slideToBottom3 -translate-y-full' />
          </div>
        </div>
        <div className='flex flex-col gap-[4.272vw] tablet:gap-[2vw] desktop:gap-[0.928vw] items-center animate-fadeInSlideUp -translate-y-(10%) opacity-0'>
          <h2 className='font-bold text-[6.942vw] tablet:text-[4.5vw] desktop:text-[2.436vw]'>{title}</h2>
          <Link href={button.href || '/'} className='bg-black/80 text-white py-[2.67vw] tablet:py-[1.25vw] desktop:py-[0.58vw] px-[10.68vw] tablet:px-[5vw] desktop:px-[2.32vw] rounded-full hover:bg-black transition-all duration-300 text-[3.738vw] tablet:text-[2vw] desktop:text-[0.928vw]'>
            {button.title}
          </Link>
        </div>
      </div>
    </>
  );
}
