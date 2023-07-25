import { StrictPropsWithChildren } from '@/types';

export default function JoinContentTextMessage({ children }: StrictPropsWithChildren) {
  return <p className="text-14 text-gray2">{children}</p>;
}
