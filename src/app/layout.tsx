import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Astrea Jobs | Navigate Your Career",
  description: "Streamline your job search and professional networking with an intelligent tracking system.",
};

export default function RootLayout({ children, }
                                   : Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
