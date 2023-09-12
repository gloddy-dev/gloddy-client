import './globals.css';

import { readFileSync } from 'fs';

import { InitMap } from '@/components/Map';
import { QueryProvider } from '@/components/Provider';
import QueryProviderWrapModal from '@/components/Provider/QueryProviderWrapModal.client';
import { BASE_WEB_URL, GOOGLE_API_KEY } from '@/constants';
import ModalProvider from '@/hooks/useModal/ModalProvider';
import Script from 'next/script';

import type { StrictPropsWithChildren } from '@/types';

const DEFAULT_OG_TITLE = 'Gloddy';
const DEFAULT_OG_DESC = '조금 더 믿을 만한 모임을 할 수 있도록 준비했어요!';
const DEFAULT_OG_IMAGE = '/images/main_logo.png';

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

export default function RootLayout({ children }: StrictPropsWithChildren) {
  return (
    <Layout>
      <QueryProviderWrapModal>
        <ModalProvider>
          <QueryProvider>{children}</QueryProvider>
        </ModalProvider>
      </QueryProviderWrapModal>
      <InitMap />
      <Script
        defer
        src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places&callback=initMap`}
      ></Script>
    </Layout>
  );
}

function Layout({ children }: StrictPropsWithChildren) {
  const filePath = `src/style/tailwindSSR.css`;
  const styleSheetContent = readFileSync(filePath, 'utf8');

  return (
    <html lang="ko">
      <head>
        <style dangerouslySetInnerHTML={{ __html: styleSheetContent }} />
      </head>
      <body className="flex h-full min-h-[100dvh] w-screen justify-center overflow-y-scroll bg-slate-50">
        <div className="relative min-h-[100dvh] w-full max-w-450 bg-white text-sign-primary">
          {children}
        </div>
      </body>
    </html>
  );
}
