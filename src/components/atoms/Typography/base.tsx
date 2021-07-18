import React, { ReactNode } from 'react';

type TypographyProps = {
  component: any,
  children: ReactNode,
};
export const Base = ({ component: Component, children }: TypographyProps): React.ReactElement => (
  <Component>
    {children}
  </Component>
);
