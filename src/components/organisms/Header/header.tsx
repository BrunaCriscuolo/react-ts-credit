import React from 'react';

import { Image as ImageComponent } from '../../atoms/Image/image';
import { Space } from '../../atoms/Space/space';

import { Image } from '../../../variables/images';

import { Container } from './styles';

export const Header = (): React.ReactElement => {
  const { logo } = Image;

  return (
    <Container>
      <Space padding="2rem">
        <ImageComponent src={logo} alt="Logo DTMoney" />
      </Space>
    </Container>
  );
};
