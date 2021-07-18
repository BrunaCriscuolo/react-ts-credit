import React from 'react';

type ButtonProps = {
  // onClick: () => void,
  // type: 'submit' | 'button' | 'reset',
  // _apparence: 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text',
  label: string,
};

export const Button = ({
  label = 'button',
  // type = 'button' as ButtonProps['type'],
}: ButtonProps): React.ReactElement => (
  <button
    type="button"
  // onClick={onClick}
  >
    {label}
  </button>
);
