"use client";
import { SessionProvider, useSession, getSession } from "next-auth/react";
import { useEffect } from "react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  session?: any;
}

export default function ClientSessionProvider({ children, session }: Props) {
  // Force session refresh when mounting
  useEffect(() => {
    getSession(); // fetch latest session immediately
  }, []);

  return <SessionProvider session={session}>{children}</SessionProvider>;
}
