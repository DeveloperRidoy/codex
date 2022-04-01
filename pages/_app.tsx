import '../styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalContext from '../components/hoc/GlobalContext'
import Layout from '../components/hoc/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContext {...pageProps}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContext>
  )
}

export default MyApp
