import React, { ReactNode } from 'react';

type LinkProps = {
  href: string,
  target: '_blank' | '_parent' | '_self' | '_top',
  children: ReactNode;
};
export const Link = ({ href, target, children }: LinkProps): React.ReactElement => (
  <a href={href} target={target}>
    {children}
  </a>
);
