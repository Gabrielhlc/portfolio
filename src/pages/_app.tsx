import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@/styles/theme'
import { GlobalStyle } from '@/styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
