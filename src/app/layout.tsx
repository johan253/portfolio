import { Inter } from "next/font/google";
import "./globals.css";
import { logVisit } from "@/lib/actions";
import React from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Johan Hernandez",
  description: "Portfolio",
};


export default async function RootLayout({ children }: { children: React.ReactNode }) {
  logVisit();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
