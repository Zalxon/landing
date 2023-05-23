import { ThemeProvider } from 'theme-ui'
import theme from '@zalxon/theme'
import '@zalxon/components/globals.css'
import '@zalxon/components/fonts.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
