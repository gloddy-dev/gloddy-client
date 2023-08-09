import './globals.css';

import QueryProvider from '@/components/common/Provider/QueryProvider.client';
import { BASE_WEB_URL, KAKAO_SDK_URL } from '@/constants';
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <QueryProvider>{children}</QueryProvider>
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Script type="text/javascript" src={KAKAO_SDK_URL} strategy="beforeInteractive" />
    </Layout>
  );
}

function Layout({ children }: StrictPropsWithChildren) {
  return (
    <html lang="ko">
      <body className="flex h-[100dvh] w-screen justify-center overflow-y-scroll bg-slate-50">
        <div className="relative h-full w-full max-w-450 bg-white text-black">{children}</div>
      </body>
    </html>
  );
}
