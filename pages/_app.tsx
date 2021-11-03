import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header className="container mx-auto bg-transparent">HEADER</Header>
      <Main className="container mx-auto bg-transparent h-screen"><Component {...pageProps} /></Main>
      <Footer className="container mx-auto bg-gray-200">FOOTER</Footer>
    </>
  )
}

export default MyApp
