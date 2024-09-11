'use client';
import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '../../../lib/utils';

type Props = ImageProps & {
  skeletonClassName?: string;
  enableGlow?: boolean;
}

export default function ImageWrapper({ skeletonClassName, className, enableGlow = false, ...props }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const onLoadHandle = async () => {
    setIsLoading(false);
  };

  const ImageRender = ({ imageRenderClassName = '' }: { imageRenderClassName?: string }) => {
    return (
      <Image
        className={cn(isLoading && 'absolute opacity-0', className, imageRenderClassName)}
        onLoad={onLoadHandle}
        {...props}
        alt={props.alt}
      />
    );
  };
  return (
    <>
      {enableGlow ? (
        <ImageRender imageRenderClassName="blur-[18.67vw] tablet:blur-[8.75vw] desktop:blur-[3.65vw] opacity-70 animate-none z-[-1] absolute" />
      ) : null}
      <ImageRender />
      <div
        className={cn(
          className,
          'skeleton-background duration-[4000] left-0 top-0 h-full w-full animate-linearBackgroundMoving rounded-[4.27vw] !filter-none tablet:rounded-[2vw] desktop:rounded-[0.83vw]',
          skeletonClassName,
          isLoading ? '' : '!hidden'
        )}
      />
    </>
  );
}
