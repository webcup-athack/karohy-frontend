import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "../redux/store";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import '../styles/index.scss';



function MyApp({ Component, pageProps }) {

  return (
    <>
        <Component {...pageProps} />
        <ToastContainer />
    </>
  )
}

export default MyApp
