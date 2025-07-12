import { Inter } from "next/font/google";
import "./globals.css";
import { logVisit } from "@/lib/actions";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Johan Hernandez",
  description: "Portfolio",
};


export default async function RootLayout({ children }: { children: React.ReactNode }) {
  logVisit().catch(console.error);
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
