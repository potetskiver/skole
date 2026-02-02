"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Header({ name }: { name: string }) {
  const { data: session } = useSession();
  const loggedIn = !!session?.user;

  return <header style={{ background: "#000", color: "#fff", padding: "12px 0" }}>
    <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <h1 style={{ margin: 0, lineHeight: 1 }}>Skole Header</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <h2 style={{ margin: 0, lineHeight: 1 }}>Velkommen {name}</h2>
        {loggedIn ? 
          <button onClick={() => signOut({ callbackUrl: "/" })} style={{ background: "#fff", color: "#000", border: "none", padding: "8px 16px", cursor: "pointer", borderRadius: "4px" }}>Logg ut</button>
          : 
          <Link href="/login"><button style={{ background: "#fff", color: "#000", border: "none", padding: "8px 16px", cursor: "pointer", borderRadius: "4px" }}>Logg inn</button></Link>
        }
      </div>
    </div>
  </header>;
}
