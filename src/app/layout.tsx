import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "~/utils/cn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tic Tac Toe - Challenge Your Friends Now!",
  description:
    "A fun and engaging Tic Tac Toe web application to enjoy with your friends, built using Next.js and other modern technologies for a seamless and interactive experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, `antialiased`)}>{children}</body>
    </html>
  );
}
