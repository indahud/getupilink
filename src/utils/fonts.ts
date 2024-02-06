import { Inter, Poppins, Space_Grotesk } from 'next/font/google';

export const poppins_init = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['700'],
});

export const inter_init = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: '400',
});

export const grotesk_init = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  weight: ['700'],
});

export const poppins = poppins_init.variable;
export const inter = inter_init.variable;
export const grotesk = grotesk_init.variable;
