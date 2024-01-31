'use client';

import useAppRouter from '@/hooks/useAppRouter';
import { MouseEvent, PropsWithChildren } from 'react';

interface NavLinkProps {
  href: string;
  className?: string;
  scroll?: boolean;
  isReplace?: boolean;
}

export default function NavLink({
  children,
  href,
  className,
  scroll,
  isReplace = false,
  ...props
}: PropsWithChildren<NavLinkProps>) {
  const { push, replace } = useAppRouter();
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (isReplace) replace(href);
    else push(href, scroll);
  };

  return (
    <span onClick={handleClick} {...props} className={className}>
      {children}
    </span>
  );
}
