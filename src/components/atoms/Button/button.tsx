import React from 'react';

import { getApparence } from './util';
import { tupleString } from '../_util/type';

const buttonApparences = tupleString('default', 'primary', 'secondary', 'info', 'success', 'warning', 'error', 'link', 'text');
export type ButtonApparence = typeof buttonApparences[number];

const buttonTypes = tupleString('submit', 'button', 'reset');
export type ButtonType = typeof buttonTypes[number];

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLElement>,
  type: ButtonType,
  apparence?: ButtonApparence,
  label: string,
  disabled?: boolean;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button = ({
  label = 'Button',
  type = 'button',
  apparence = 'default',
  disabled,
  onClick,
}: ButtonProps): React.ReactElement => {
  const style: React.CSSProperties = { background: getApparence(apparence) };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={style}
    >
      {label}
    </button>
  );
};
