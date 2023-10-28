'use client';

import useAppRouter from '@/hooks/useAppRouter';
import { MouseEvent, PropsWithChildren } from 'react';

interface NavLinkProps {
  href: string;
  className?: string;
  scroll?: boolean;
}

export default function NavLink({
  children,
  href,
  className,
  scroll,
  ...props
}: PropsWithChildren<NavLinkProps>) {
  const { push } = useAppRouter();
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    push(href);
  };

  return (
    <span onClick={handleClick} {...props} className={className}>
      {children}
    </span>
  );
}
