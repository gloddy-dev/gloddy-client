import './globals.css';

import { dir } from 'i18next';
import localFont from 'next/font/local';
import { Suspense } from 'react';

import { languages } from '../i18n/settings';

import type { StrictPropsWithChildren } from '@/types';

import { GoogleAnalytics } from '@/components/Analytics';
import { QueryProvider } from '@/components/Provider';
import ToastProvider from '@/components/Provider/ToastProvider';
import { BASE_WEB_URL } from '@/constants';
import ModalProvider from '@/hooks/useModal/ModalProvider';

const DEFAULT_OG_TITLE = 'Gloddy';
const DEFAULT_OG_DESC = '조금 더 믿을 만한 모임을 할 수 있도록 준비했어요!';
const DEFAULT_OG_IMAGE = '/images/main_logo.png';

const SansFont = localFont({
  src: [
    {
      path: './fonts/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-pretendard',
});

export const metadata = {
  metadataBase: new URL(BASE_WEB_URL),
  title: {
    template: `${DEFAULT_OG_TITLE} / %s `,
    default: DEFAULT_OG_TITLE,
  },
  description: DEFAULT_OG_DESC,
  openGraph: {
    title: DEFAULT_OG_TITLE,
    description: DEFAULT_OG_DESC,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: DEFAULT_OG_TITLE,
    description: DEFAULT_OG_DESC,
    images: [DEFAULT_OG_IMAGE],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

interface RootLayoutProps {
  params: {
    lng: string;
  };
}

export default function RootLayout({
  params: { lng },
  children,
}: StrictPropsWithChildren<RootLayoutProps>) {
  return (
    <Layout lng={lng}>
      <ToastProvider>
        <QueryProvider>
          <ModalProvider>{children}</ModalProvider>
        </QueryProvider>
      </ToastProvider>
      <Suspense>
        <GoogleAnalytics />
      </Suspense>
    </Layout>
  );
}

interface LayoutProps {
  lng: string;
}

function Layout({ lng, children }: StrictPropsWithChildren<LayoutProps>) {
  return (
    <html lang={lng} dir={dir(lng)} className={`${SansFont.variable}`}>
      <body className="flex h-full min-h-screen w-screen justify-center overflow-y-scroll bg-slate-50">
        <div className="max-w-450 text-sign-primary relative min-h-[100dvh] w-full bg-white">
          {children}
        </div>
      </body>
    </html>
  );
}
