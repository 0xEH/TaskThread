import { Inter } from 'next/font/google';

import RecoilContextProvider from '@/app/lib/RecoilContextProvider';
import MainLayout from '@/app/main-layout';

import './globals.css';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TaskThread',
  description: 'Connects tasks into a unified thread',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' dir='ltr'>
      <body className={inter.className}>
        <RecoilContextProvider>
          <MainLayout>{children}</MainLayout>
        </RecoilContextProvider>
      </body>
    </html>
  );
}
