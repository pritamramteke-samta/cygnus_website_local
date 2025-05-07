import { Button } from '@mantine/core';

const CButton = ({
  title = '',
  variant = 'filled',
  color = 'var(--mantine-color-primary-9)',
  extraStyles = {},
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      radius='xl'
      style={{
        ...extraStyles,
      }}
    >
      {title}
    </Button>
  );
};

export default CButton;
