export type PageType = 'grouping' | 'meeting' | 'profile';

export type StrictPropsWithChildren<P = unknown> = P & {
  children: React.ReactNode;
};
