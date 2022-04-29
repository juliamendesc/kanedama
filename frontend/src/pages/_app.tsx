import React, { FC } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
