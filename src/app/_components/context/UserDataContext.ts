import { IUserDataProps } from '@/hooks/useUserDataContext';
import { Dispatch, SetStateAction, createContext } from 'react';

export type userContextType = {
  userData: IUserDataProps;
  setUserData: Dispatch<SetStateAction<object>>;
};

export const UserDataContext = createContext({} as userContextType);
