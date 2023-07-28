import { StrictPropsWithChildren } from '@/types';

export default function JoinTitleTextMessage({ children }: StrictPropsWithChildren) {
  return <div className="leading-2.5 mb-30 text-24 font-700">{children}</div>;
}
