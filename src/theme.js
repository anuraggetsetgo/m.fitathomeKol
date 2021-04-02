/* Updated by Vinay */

import { createMuiTheme } from "@material-ui/core/styles";
//import Exoregular from './fonts/exo-2-v7-latin-regular.woff2';
//import Exobold from './fonts/exo-2-v7-latin-600.woff2';
//import Exoheavy from './fonts/exo-2-v7-latin-500.woff2';
//import Exothin from './fonts/exo-2-v7-latin-300.woff2';
import Poppins from "./fonts/poppins-v15-latin-regular.woff";
import TestThin from "./fonts/Montserrat-Thin.ttf";
import Test from "./fonts/Montserrat-Regular.woff";
import { colors } from "./services";

const poppins = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 600,
  src: `local('Poppins'),
       local('Poppins-Regular') , 
       url(${Poppins}) format('woff');`,
};
const testThin = {
  fontFamily: "Test-Thin",
  fontStyle: "normal",
  fontDisplay: "swap",
  src: `
      local('Test'),
      local('Test-Thin'),
      url(${TestThin}) format('truetype')
    `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};
const test = {
  fontFamily: "Test",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Test'),
    local('Test'),
    url(${Test}) format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};
// const exoHeavy = {
//     fontFamily: 'Exo',
//     fontStyle: 'normal',
//     fontDisplay: 'swap',
//     fontWeight: 500,
//     src: `
//       local('Exo'),
//       local('Exo-Heavy'),
//       url(${Exoheavy}) format('woff2')
//     `,
//     unicodeRange:
//       'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
//   };
// const exoBold = {
//     fontFamily: 'Exo',
//     fontStyle: 'normal',
//     fontDisplay: 'swap',
//     fontWeight: 600,
//     src: `
//       local('Exo'),
//       local('Exo-Bold'),
//       url(${Exobold}) format('woff2')
//     `,
//     unicodeRange:
//       'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
//   };

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    action: {
      disabled: colors.disableButtonColor,
    },
  },
  spacing: (value) => `${value * 8}px`,

  typography: {
    //fontFamily: 'Exo, Arial',
    fontFamily: "Poppins,Arial",
    spacing: (value) => value ** 8,
    color: colors.secondary, // '#fff',
    root: {
      color: colors.secondary,
    },
    p: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    h1: {
      fontSize: "48px",
      lineHeight: "54px",
      textShadow: "1px 1px #1b1b1b",
    },
    h2: {
      fontSize: "40px",
      lineHeight: "48px",
      marginBottom: "16px",
    },
    h3: {
      fontSize: "32px",
      lineHeight: "36px",
    },
    h4: {
      fontSize: "24px",
      lineHeight: "28px",
    },
    h5: {
      fontSize: "18px",
      lineHeight: "24px",
    },
    h6: {
      fontSize: "16px",
      lineHeight: "22px",
    },
    h7: {
      fontSize: "14px",
      lineHeight: "22px",
    },
    subtitle1: {
      fontSize: "1.5rem",
      lineHeight: "2.2rem",
    },
    subtitle2: {
      fontSize: "1.2rem",
      lineHeight: "1.8rem",
    },
  },
  MuiButton: {
    root: {
      borderRadius: "50px",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [poppins],
      },
    },
    MuiButton: {
      // Name of the rule
      root: {
        //borderRadius: '20px',
        textTransform: "none",
      },
      outlined: {
        padding: "8px 20px",
      },
      contained: {
        padding: "8px 20px",
      },
      containedPrimary: {
        color: colors.secondary,
      },
    },
    MuiSelect: {
      root: { color: "#c0c0c0" },
    },
    MuiList: {
      root: { background: "none" },
    },
    MuiTableCell:{
      sizeSmall:{
        padding:"6px 4px 6px 4px",
        '&:last-child':{paddingRight:"5px"}
      },
    },

  },
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to change
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
});

export default theme;
