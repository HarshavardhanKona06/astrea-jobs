import type { Metadata } from "next";
import React from "react";
import "@/styles/globals.css";
import { spaceGrotesk, workSans, oxanium } from "@/lib/font";

export const metadata: Metadata = {
    title: {
        template: 'AstreaJobs | %s',
        default: 'AstreaJobs',
    },
    description: "Streamline your job search and professional networking with an intelligent tracking system.",
};

export default function RootLayout({ children, }
                                   : Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" className={`${spaceGrotesk.variable} ${workSans.variable} ${oxanium.variable} antialiased`}
              suppressHydrationWarning>
            <body className="bg-background-light text-text-primary-light dark:bg-background-dark dark:text-text-primary-dark font-work-sans">
                {children}
            </body>
        </html>
    );
}
