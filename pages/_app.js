import React, { createContext } from "react";
import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Layout from "../components/Navbar/Layout";
import { GlobalProvider } from "../Context/Provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "react-datepicker/dist/react-datepicker.css";

export const DeviceContext = createContext({});

function MyApp({ Component, pageProps, isMobileView }) {
  return (
    <GlobalProvider>
      <DeviceContext.Provider value={{ isMobileView }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
        />
      </DeviceContext.Provider>
    </GlobalProvider>
  );
}

export default MyApp;
MyApp.getInitialProps = async ({ Component, ctx }) => {
  let isMobileView = (ctx.req
    ? ctx.req.headers["user-agent"]
    : navigator.userAgent
  ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);

  return {
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
      appProp: ctx.pathname
    },
    isMobileView: Boolean(isMobileView)
  };
};
