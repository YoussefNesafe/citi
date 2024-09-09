import { useState } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';
import { useEventListener } from './useEventListener';
import { DESKTOP_BREAKPOINT } from '@/constants';

interface WindowSize {
  width: number;
  height: number;
  isDesktop: boolean;
  isMobile: boolean;
}

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
    isDesktop: false,
    isMobile: false,
  });

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      isDesktop: window.innerWidth >= DESKTOP_BREAKPOINT,
      isMobile: window.innerWidth < DESKTOP_BREAKPOINT
    });
  };

  useEventListener('resize', handleSize);

  // Set size at the first client-side load
  useIsomorphicLayoutEffect(() => {
    handleSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return windowSize;
}
