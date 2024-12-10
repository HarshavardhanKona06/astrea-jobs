import { Space_Grotesk, Work_Sans, Oxanium } from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
    variable: '--font-space-grotesk',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

export const workSans = Work_Sans({
    variable: '--font-work-sans',
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const oxanium = Oxanium({
    variable: '--font-oxanium',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});
