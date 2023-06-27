import './globals.css';

export const metadata = {
  title: 'Gloddy',
  description: '조금 더 믿을 만한 모임을 할 수 있도록 준비했어요!',
  icons: {
    icon: { url: '/assets/profile_fill.svg', type: 'image/svg' },
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="flex h-screen w-screen justify-center bg-slate-50">
        <div className="relative h-full w-full max-w-[26.25rem] overflow-y-scroll bg-white px-24">
          {children}
        </div>
      </body>
    </html>
  );
}
