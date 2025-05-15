import { colorsTuple, createTheme } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
  colors: {
    // primary:primaryColor,
    primary: colorsTuple('#27624E'),
    primaryLite: colorsTuple('#008F5E'),
    primaryExtraLight: colorsTuple('#59D39F'),
    primaryDark: colorsTuple('#02261A'),
    black: colorsTuple('#000000'),
    white: colorsTuple('#ffffff'),
    secondary: colorsTuple('#E36F34'),
    greyLite: colorsTuple('#D4D4D4'),
    grey: colorsTuple('#4D525F'),
    greyMid: colorsTuple('#E7E7E8'),
  },

  fontFamily: 'Inter, sans-serif',
  fontFamilyMonospace: 'Inter, monospace',
  // headings: {
  //   fontWeight: '600',
  //   sizes: {
  //     h1: {
  //       fontSize: rem(21.981),
  //       lineHeight: '1.205',
  //     },
  //     h2: {
  //       fontSize: rem(21.318),
  //       lineHeight: '1.205',
  //     },
  //     h3: {
  //       fontSize: rem(20.765),
  //       lineHeight: '1.205',
  //     },
  //     h4: {
  //       fontSize: rem(20.304),
  //       lineHeight: '1.205',
  //     },
  //     h5: {
  //       fontSize: rem(19.2),
  //       lineHeight: '1.205',
  //     },
  //     h6: {
  //       fontSize: rem(13.333),
  //       lineHeight: '1.205',
  //     },
  //   },
  // },
});

export default theme;
