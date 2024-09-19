'use client';
import React, { useEffect, useState } from 'react';
import { IUserDataProps } from '@/hooks/useUserDataContext';
import { UserDataContext } from '../_components/context/UserDataContext';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';


const Providers = ({ children }: { children: React.ReactNode }) => {
  const [userData, setUserData] = useState<IUserDataProps>({ isLoading: true });
  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(`/api/ip-info`);
      const { res } = (await response.json()) as { res: IUserDataProps };
      setUserData({ ...res, isLoading: false });
    };
    if (!Object.hasOwn(userData, 'ip_address')) fetchApi();

  }, [userData]);

  return (
    <>

      <UserDataContext.Provider value={{ userData, setUserData }}>
        <ReCaptchaProvider>{children}</ReCaptchaProvider>
      </UserDataContext.Provider>
    </>
  );
};

export const ReCaptchaProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_V3 || ''}>{children}</GoogleReCaptchaProvider>
    </>
  );
};

export default Providers;
