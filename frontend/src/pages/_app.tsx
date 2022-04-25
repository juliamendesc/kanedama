import type { AppProps } from 'next/app';
import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
        <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
