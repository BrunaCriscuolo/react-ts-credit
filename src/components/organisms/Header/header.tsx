import React from 'react';

import { Image as ImageComponent } from '../../atoms/Image/image';

import { Image } from '../../../variables/images';

export const Header = (): React.ReactElement => {
  const { logo } = Image;
  return (
    <div>
      <ImageComponent src={logo} alt="Logo DTMoney" />
    </div>
  );
};
