import { UserDataContext } from '@/app/_components/context/UserDataContext';
import { useContext } from 'react';
export type IUserDataProps = {
  ip_address?: string;
  'CF-Connecting-IP'?: string;
  'CF-IPCountry'?: string;
  Referer?: string;
  'User-Agent'?: string;
  [key: string]: any;
  isLoading?: boolean;
};
export const useUserDataContext = () => {
  const { userData } = useContext(UserDataContext);
  return userData as IUserDataProps;
};

export default useUserDataContext;
