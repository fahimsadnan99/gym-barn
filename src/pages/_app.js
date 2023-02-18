import '@/styles/globals.css'
import Navbar from '@/Layout/Navbar'
import Footer from "../Layout/Footer"

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar></Navbar>
    <Component {...pageProps} />
    <Footer></Footer>
    </>
  )
  

}
