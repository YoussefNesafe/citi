import { cn } from '@/lib/utils';
import { AdditionalProps } from '@/models/IDictionary/SharedProps';
import React from 'react';

function Label({ label, className, ...props }: AdditionalProps & { label?: string; className?: string }) {
  return (
    <>
      {label ? (
        <span
          className={cn(
            'mb-[1.068vw] text-[3.262vw] font-semibold text-primary-500 tablet:mb-[0.5vw] tablet:text-[1.75vw] desktop:mb-[0.208vw] desktop:text-[1.04vw]',
            className
          )}
          {...props}
        >
          {label}
        </span>
      ) : (
        <></>
      )}
    </>
  );
}

export default Label;
