import React from 'react';

type ImageProps = {
  src: string,
  alt: string,
};
export const Image = ({ src, alt }: ImageProps): React.ReactElement => (
  <img src={src} alt={alt} />
);
