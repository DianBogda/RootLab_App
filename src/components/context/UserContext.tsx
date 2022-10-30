import React, { createContext, PropsWithChildren, ReactNode, useState } from 'react';

export type UserDetail = {
  email: string,
  status: {
    enabled: boolean
  }
}
export type UserContextProps =  {
  userName: string,
  setUsername: (username:string)=>void
  userDetail:  UserDetail
  setUserDetail: (userDetail: UserDetail)=>void
}

export const userContext = createContext<UserContextProps>({} as UserContextProps);

export const UserContextProvider: React.FC<PropsWithChildren> = ({ children }) => {

  const [userName, setUsername] = useState('');
  const [userDetail, setUserDetail] = useState<UserDetail>({
    email: 'diannitaab@gmail.com',
    status: {
      enabled: true
    }
  })

  return (<userContext.Provider value={{
    userName,
    setUsername,
    userDetail,
    setUserDetail
  }}>
    {children}
  </userContext.Provider>);
};

