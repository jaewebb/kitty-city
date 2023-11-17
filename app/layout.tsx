import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import Script from 'next/script';

import './globals.css';

import Header from './components/Header';
import Footer from './components/Footer';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans'
});

const thinPaws = localFont({
  src: './fonts/thinpaws.ttf',
  variable: '--font-thin-paws'
});

export const metadata: Metadata = {
  title: 'Kitty City',
  description: 'A demo site showcasing some basic skills'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://kit.fontawesome.com/aca89374a4.js"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${openSans.variable} ${thinPaws.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
