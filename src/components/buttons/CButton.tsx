import { Button } from '@mantine/core';
import { memo } from 'react';

const CButton = ({
  title = '',
  variant = 'filled',
  color = 'var(--mantine-color-primary-0)',
  extraStyles = {},
  padHor = 'calc((24 / 1440) * 100vw)',
  fontSize = 'calc((14 / 1440) * 100vw)',
  btnHeight = 'calc((44 / 1440) * 100vw)',
}) => {
  return (
    <>
      <Button
        variant={variant}
        color={color}
        style={{
          borderRadius: 'calc((100 / 1440) * 100vw)',
          paddingLeft: padHor,
          paddingRight: padHor,
          fontSize: fontSize,
          fontWeight: 500,
          height: btnHeight,
          ...extraStyles,
        }}
      >
        {title}
      </Button>
    </>
  );
};

export default memo(CButton);
