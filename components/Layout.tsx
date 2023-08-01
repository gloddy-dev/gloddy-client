import type { StrictPropsWithChildren } from '@/types';

export default function Layout({ children }: StrictPropsWithChildren) {
  return (
    <html lang="ko">
      <body className="flex h-[100dvh] w-screen justify-center bg-slate-50">
        <div className="relative h-full w-full max-w-450 overflow-y-scroll bg-white text-black">
          {children}
        </div>
      </body>
    </html>
  );
}
