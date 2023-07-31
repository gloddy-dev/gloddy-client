import Layout from '@/app/components/Layout';
import './globals.css';

import QueryProvider from './components/QueryProvider.client';

import type { Metadata } from 'next';

import { UserProvider } from './components/UserProvider.client';

export const metadata: Metadata = {
  title: 'Gloddy',
  description: '조금 더 믿을 만한 모임을 할 수 있도록 준비했어요!',
  openGraph: {
    title: 'Gloddy',
    description: '조금 더 믿을 만한 모임을 할 수 있도록 준비했어요!',
    url: '', // 웹사이트 URL
    siteName: 'Gloddy',
    images: [
      {
        url: '', // 이미지 URL
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'ko-KR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Gloddy',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <QueryProvider>
        <UserProvider>{children}</UserProvider>
      </QueryProvider>
    </Layout>
  );
}
