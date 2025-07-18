import { Inter } from "next/font/google";
import "./globals.css";
import { logVisit } from "@/lib/actions";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Johan Hernandez",
  description: "Portfolio",
};


export default async function RootLayout({ children }: { children: React.ReactNode }) {
  logVisit();
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900`}>{children}</body>
    </html>
  );
}
