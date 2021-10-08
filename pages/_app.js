import { ChakraProvider } from '../node_modules/@chakra-ui/react/dist/cjs/chakra-provider'
import '../styles/globals.css'
import Navbar from './components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
