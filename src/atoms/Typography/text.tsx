import React, { ReactNode } from 'react';

type TextProps = {
  as: 'p' | 'label',
  children: ReactNode;
};
export const Text = ({ as: Component, children }: TextProps): React.ReactElement => (
  <Component>
    {children}
  </Component>
);
