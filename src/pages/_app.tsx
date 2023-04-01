import '../styles/globals.css'
import Layout from '../components/layouts'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Okamon</title>
        <meta property="og:image" content={'https://okamon.dev/okamon.png'} />
        <link rel="icon" href="/image/okamon.png" />
      </Head>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </>
  )
}
