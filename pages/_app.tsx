import '../styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalContext from '../components/hoc/GlobalContext'
import Layout from '../components/hoc/Layout'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return
    
    navigator.serviceWorker.register('/sw.js').then(
      function (registration) {
        console.log(
          'Service Worker registration successful with scope: ',
          registration.scope
        )
      },
      function (err) {
        console.log('Service Worker registration failed: ', err)
      }
    )
  }, [])
  return (
    <GlobalContext {...pageProps}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContext>
  )
}

export default MyApp
