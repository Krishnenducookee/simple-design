import '@/styles/globals.css'
import Mainlayout from '@/Components/Layouts/MainLayout'

export default function App({ Component, pageProps }) {
  
  
  return( 
    <Mainlayout>
  <Component {...pageProps} />
  </Mainlayout>
  
)}
