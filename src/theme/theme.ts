import { colorsTuple, createTheme } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
  colors: {
    // primary:primaryColor,
    primary: colorsTuple('#27624E'),
    primaryLite: colorsTuple('#008F5E'),
    primaryExtraLight: colorsTuple('#59D39F'),
    black: colorsTuple('#000000'),
    white: colorsTuple('#ffffff'),
    secondary: colorsTuple('#E36F34'),
    greyLite: colorsTuple('#D4D4D4'),
    grey: colorsTuple('#4D525F'),
  },

  fontFamily: 'Manrope, sans-serif',
  fontFamilyMonospace: 'Manrope, monospace',
});

export default theme;
