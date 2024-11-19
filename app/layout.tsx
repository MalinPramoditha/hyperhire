import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import Header from "./component/Header";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins', 
})

export const metadata: Metadata = {
  title: "Hire Talent",
  description: "Hire the best foreign talent",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${poppins.className} antialiased font-black`} >
        <Header />
        {children}
      </body>
    </html>
  );
}
