import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "../lib/utils";
import "./globals.css";
import Providers from "./provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className="h-full">
      <body
        className={cn(
          " bg-background font-sans antialiased h-full relative ",
          fontSans.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
