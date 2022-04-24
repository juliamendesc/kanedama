import type { AppProps } from 'next/app';
import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { DisplayPortProvider } from 'providers/displayPort';
import { theme } from 'styles/theme';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <DisplayPortProvider>
        <Component {...pageProps} />
      </DisplayPortProvider>
    </ThemeProvider>
  );
};

export default MyApp;
