import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { DisplayPortProvider } from 'providers/displayPort'

function MyApp({ Component, pageProps }: AppProps) {
    return(
    <DisplayPortProvider>
      <Component {...pageProps} />
    </DisplayPortProvider>
  )
}
export default MyApp
