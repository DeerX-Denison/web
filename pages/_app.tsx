// Global CSS for pages style use Tailwind
import '../styles/globals.css'
// Local CSS for compenent style
import '../components/css/style.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
