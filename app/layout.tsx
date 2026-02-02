import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientSessionProvider from "@/components/ClientSessionProvider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hei vørld!",
  description: "Made by the man the myth the legend",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="no">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ClientSessionProvider session={session}>
          <Header name={session?.user?.name ?? "Gjest"} />
          <main style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", minHeight: "calc(100vh - 64px)" }}>
            {children}
          </main>
          <Footer />
        </ClientSessionProvider>
      </body>
    </html>
  );
}
