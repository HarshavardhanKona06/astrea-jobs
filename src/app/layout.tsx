import type { Metadata } from "next";
import React from "react";
import "../styles/globals.css";
import { spaceGrotesk, workSans, oxanium } from "@/lib/font";
import {ThemeProvider} from "@/app/theme-provider";

export const metadata: Metadata = {
  title: "AstreaJobs | Navigate Your Career",
  description: "Streamline your job search and professional networking with an intelligent tracking system.",
};

export default function RootLayout({ children, }
                                   : Readonly<{ children: React.ReactNode; }>) {
  return (
      <html lang="en" className={`${spaceGrotesk.variable} ${workSans.variable} ${oxanium.variable} antialiased`}
            suppressHydrationWarning>
      <body className="bg-background-light text-text-primary-light dark:bg-background-dark dark:text-text-primary-dark font-work-sans">
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
      </html>
  );
}
