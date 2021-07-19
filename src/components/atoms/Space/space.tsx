import React from 'react';

type SpaceProps = {
  children: React.ReactNode;
  padding?: string;
};
export const Space = ({
  children,
  padding,
}: SpaceProps): React.ReactElement => {
  let style: React.CSSProperties = {};

  style = { padding };

  return (
    <div style={style}>
      {children}
    </div>
  );
};
