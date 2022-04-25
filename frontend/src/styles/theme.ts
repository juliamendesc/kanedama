import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    mansaPurple: '#6556D1',
    mansaRed: '#EE5057',
    cardLightPurple: '#F5F3FB',
    backgroundLighterColor: 'rgb(249, 249, 249)',
    backgroundLightColor: 'rgb(245, 243, 251)',
    backgroundMediumColor: 'rgb(203, 194, 240)',
    darkBlue: '#183753',
    white: '#FFFFFF',
  },
  typography: {
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    headerLogo: {
      fontFamily: 'Assistant, Roboto, sans-serif',
      fontWeight: 700,
    },
    h1: {
      fontSize: 38,
      fontWeight: 700,
    },
  },
  mobile: {
    small: '450px',
    medium: '650px',
    large: '1024px',
  },
};
