import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import AuthProvider from "@/providers/auth";
import LoadingProvider from "@/providers/loading";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextjs + Firebase Auth",
  description: "Demo website using Nextjs and Firebase Auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "dark w-screen h-screen")}>
        <AuthProvider>
          <LoadingProvider>
            <Header />
            {children}
          </LoadingProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
