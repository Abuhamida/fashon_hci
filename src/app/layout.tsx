"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Transition from "./components/Transition";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = usePathname();
  return (
    <html lang="en" data-theme="light" className="selection:text-white selection:bg-primary">
      <body className={inter.className}>
        <AnimatePresence mode="wait">
          <motion.div key={router} className=" w-full ">
            <Transition />
            {router == '/sign-in' || router == '/sign-up' ? null : <Nav />}
            <div className=" min-h-screen ">{children}</div>
            <Footer  />
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
