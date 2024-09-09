import { HTMLAttributes } from 'react';
import { CountUpProps } from 'react-countup';
import { sanitize } from 'isomorphic-dompurify';
import CountUp from '@/app/hocs/CountUp';
import { CountUpCardProps } from '@/models/IDictionary/HomePage';
import { cn } from '@/lib/utils';


type Props = Omit<CountUpProps, 'end'> & CountUpCardProps & HTMLAttributes<HTMLElement>

export default function CountUpCard({
  className,
  number,
  text,
  suffix,
  ...props
}: Props) {
  return (
    <div className={cn('text-center flex flex-col gap-[1.165vw] tablet:gap-0', className)} {...props}>
      <CountUp
        suffix={suffix}
        end={number}
        duration={1}
        prefix={`${number}`.length === 1 ? '0' : ''}
        enableScrollSpy
        scrollSpyOnce
        className='text-dark font-sans font-extrabold text-[9.32vw] tablet:text-[3.75vw] desktop:text-[3.12vw] leading-[1.25]'
      />
      {text ? (
        <div
          className='font-semibold text-[4.66vw] tablet:text-[2.25vw] desktop:text-[1.56vw] leading-[1.25] text-gray-450'
          dangerouslySetInnerHTML={{ __html: sanitize(text) }}
        />
      ) : null}
    </div>
  );
}
