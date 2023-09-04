import './globals.css';

import { languages } from '../i18n/settings';
import { QueryProvider } from '@/components/common/Provider';
import { BASE_WEB_URL, KAKAO_SDK_URL } from '@/constants';
import ModalProvider from '@/hooks/useModal/ModalProvider';
import { dir } from 'i18next';
import Script from 'next/script';

import type { StrictPropsWithChildren } from '@/types';

const DEFAULT_OG_TITLE = 'Gloddy';
const DEFAULT_OG_DESC = '조금 더 믿을 만한 모임을 할 수 있도록 준비했어요!';
const DEFAULT_OG_IMAGE = '/assets/main_logo.png';

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
      <QueryProvider>
        <ModalProvider>{children}</ModalProvider>
      </QueryProvider>

      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Script type="text/javascript" src={KAKAO_SDK_URL} strategy="beforeInteractive" />
    </Layout>
  );
}

function Layout({ lng, children }: StrictPropsWithChildren<{ lng: string }>) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className="flex h-full min-h-[100dvh] w-screen justify-center overflow-y-scroll bg-slate-50">
        <div className="relative min-h-[100dvh] w-full max-w-450 bg-white text-sign-primary">
          {children}
        </div>
      </body>
    </html>
  );
}
