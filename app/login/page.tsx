"use client";
import React, { useState, useEffect } from "react";
import { useSession, signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => { if (session?.user) router.replace("/"); }, [session, router]);

  async function handleLogin(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", { redirect: false, username, password });
    if (res?.error) {
      alert(res.error);
      setLoading(false);
      return;
    }

    await getSession(); // refresh session so Header updates immediately
    router.replace("/");
    setLoading(false);
  }

  return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "calc(100vh - 64px)" }}>
    <div style={{ width: "100%", maxWidth: "400px", padding: "24px", border: "1px solid #ccc", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
      <h1 style={{ textAlign: "center", marginBottom: "16px" }}>Login</h1>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
      </form>
      <p style={{ textAlign: "center", marginTop: "12px" }}>Don't have an account? <a href="/register" style={{ color: "blue" }}>Register</a></p>
    </div>
  </div>;
}
