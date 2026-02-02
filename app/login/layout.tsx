import ClientSessionProvider from "@/components/ClientSessionProvider";
import type { ReactNode } from "react";

export default function LoginLayout({ children }: { children: ReactNode }) {
  return <ClientSessionProvider>{children}</ClientSessionProvider>;
}
