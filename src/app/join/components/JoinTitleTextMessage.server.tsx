import type { StrictPropsWithChildren } from '@/types';

export default function JoinTitleTextMessage({ children }: StrictPropsWithChildren) {
  return <div className="leading-2.5 font-700 mb-30 text-24">{children}</div>;
}
