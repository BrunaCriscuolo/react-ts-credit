import React, { ReactNode } from 'react';

type TitleProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
  children: ReactNode;
};
export const Title = ({ as: Component, children }: TitleProps): React.ReactElement => (
  <Component>
    {children}
  </Component>
);
