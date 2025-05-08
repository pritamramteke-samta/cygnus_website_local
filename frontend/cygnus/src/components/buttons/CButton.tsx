import './cbutton.scss';

const CButton = ({
  title = '',
  variant = 'filled',
  // color = 'var(--mantine-color-primary-0)',
  extraStyles = {},
  // size='42px',
}) => {
  return (
    <>
      {/* <Button
      p={'md'}
      variant={variant}
      // size={size}
      color={color}
      radius='xl'
      style={{
        ...extraStyles,
      }}
    >
      {title}
    </Button> */}

      <button style={{ ...extraStyles }} className={`btn ${variant}`}>
        {title}
      </button>
    </>
  );
};

export default CButton;
