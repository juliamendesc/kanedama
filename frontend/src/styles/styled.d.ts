import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      mansaPurple: string;
      mansaRed: string;
      darkBlue: string;
      cardLightPurple: string;
      backgroundLightColor: string;
      backgroundMediumColor: string;
      backgroundLighterColor: string;
      white: string;
    };
    typography: {
      fontSize: number;
      fontWeightLight: number;
      fontWeightRegular: number;
      fontWeightMedium: number;
      fontWeightBold: number;
      headerLogo: {
        fontFamily: string;
        fontWeight: number;
      };
      h1: {
        fontSize: number;
        fontWeight: number;
      };
    };
    mobile: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
