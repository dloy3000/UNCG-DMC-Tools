import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Layout } from '@/components/Format/Layout/Layout'
import Fonts from '@/components/Theme/Fonts'
import theme from '@/components/Theme/Theme'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
