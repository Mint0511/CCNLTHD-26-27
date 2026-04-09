"use client";

import { SessionProvider } from "next-auth/react";

const AuthProvider = ({ children }) => (
  <SessionProvider refetchInterval={0}>{children}</SessionProvider>
);

export default AuthProvider;