'use client';

import { ErrorBoundary } from 'react-error-boundary';

export default function RetryErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary
      fallbackRender={({ resetErrorBoundary }) => (
        <div className="px-24pxr py-40pxr flex flex-col items-center">
          <p className="text-h5 text-black">문제가 발생했습니다</p>
          <p className="mt-2pxr text-b3 text-grey-600">페이지를 불러오는데 실패했습니다.</p>
          <button
            className="mt-16pxr bg-grey-200 px-12pxr py-8pxr text-13pxr font-bold text-grey-800 rounded-lg"
            onClick={() => resetErrorBoundary()}
          >
            다시 불러오기
          </button>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  );
}
