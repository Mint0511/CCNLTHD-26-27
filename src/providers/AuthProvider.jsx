"use client";

import { SessionProvider } from "next-auth/react";

const AuthProvider = (props) => {
  const { children } = props;

  return (
    <SessionProvider refetchInterval={0}>
      {children}
    </SessionProvider>
  );
};

export default AuthProvider;