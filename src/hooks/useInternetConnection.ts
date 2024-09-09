import isBrowser from '@/app/utils/isBrowser';
import { useEffect, useState } from 'react';

export default function useInternetConnection(disableScrolling = true) {
  const [online, setOnline] = useState(true);

  const setToOffline = () => {
    setOnline(false);
    if (disableScrolling) window.document.documentElement.style.overflow = 'hidden';
  };
  const setToOnline = () => {
    setOnline(true);
    if (disableScrolling) window.document.documentElement.style.overflow = 'unset';
  };

  useEffect(() => {
    if (!isBrowser) return;
    if (typeof window.navigator?.onLine === 'boolean' && !window.navigator.onLine) setToOffline();
    window.addEventListener('offline', setToOffline);
    window.addEventListener('online', setToOnline);

    return () => {
      window.removeEventListener('offline', setToOffline);
      window.removeEventListener('online', setToOnline);
    };
  }, []);

  return { online };
}
