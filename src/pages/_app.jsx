import { ToastContainer } from "react-toastify";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import '../styles/index.scss';

import Container from '../services/Container'
import ContainerProvider from './container-provider'



function MyApp({ Component, pageProps }) {
  // const container = Container.build()

  return (<>
    {/* <ContainerProvider container={container}> */}
      <Component {...pageProps} />
      <ToastContainer />
    {/* </ContainerProvider> */}
  </>
  )
}

export default MyApp
