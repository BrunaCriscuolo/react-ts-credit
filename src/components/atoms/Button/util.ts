import { Color } from '../../../variables/colors';

const {
  gray100, primaryMain, secondaryMain, infoMain, successMain, warningMain, errorMain,
} = Color;

export const getApparence = (type: string) => ({
  primary: primaryMain,
  secondary: secondaryMain,
  info: infoMain,
  success: successMain,
  warning: warningMain,
  error: errorMain,
  link: 'transparent',
  text: 'transparent',
}[type] || gray100);
