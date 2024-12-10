import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { spaceGrotesk, workSans, oxanium } from "@/lib/font";

export const metadata: Metadata = {
  title: "Astrea Jobs | Navigate Your Career",
  description: "Streamline your job search and professional networking with an intelligent tracking system.",
};

export default function RootLayout({ children, }
                                   : Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${workSans.variable} ${oxanium.variable} antialiased`}>
      <body>
        {children}
      </body>
    </html>
  );
}
