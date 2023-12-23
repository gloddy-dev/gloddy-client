'use client';

import { ErrorBoundary } from '@suspensive/react';

export default function RetryErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary
      fallback={({ reset }) => (
        <div className="flex flex-col items-center px-24 py-40">
          <p className="text-h5 text-black">문제가 발생했습니다</p>
          <p className="text-b3 text-grey-600 mt-2">페이지를 불러오는데 실패했습니다.</p>
          <button
            className="bg-grey-200 text-grey-800 text-13 mt-16 rounded-lg px-12 py-8 font-bold"
            onClick={() => reset()}
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
