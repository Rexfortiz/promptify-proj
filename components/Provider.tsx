'use client';

import React, { ReactNode } from 'react'

import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth';

interface ProviderProps{
  children?: ReactNode;  //edit
  session?: Session | null | undefined;
}

const Provider: React.FC<ProviderProps> = ({children, session}) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider