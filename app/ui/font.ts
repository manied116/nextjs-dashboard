import { Inter,Electrolize,Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const electrolize = Electrolize({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export const lusitana = Lusitana({
  weight: ["400","700"],
  subsets: ["latin"],
});