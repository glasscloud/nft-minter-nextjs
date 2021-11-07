import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DAppProvider, Config } from '@usedapp/core'

import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DAppProvider config={{}}>
        <Header className="container mx-auto bg-primary">HEADER</Header>
        <Main className="container mx-auto bg-transparent h-screen"><Component {...pageProps} /></Main>
        <Footer className="container mx-auto bg-gray-200">FOOTER</Footer>
      </DAppProvider>
    </>
  )
}

export default MyApp
