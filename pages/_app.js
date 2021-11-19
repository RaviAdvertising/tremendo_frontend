import React, { createContext } from "react";
import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Layout from "../components/Navbar/Layout";
import { GlobalProvider } from "../Context/Provider";

export const DeviceContext = createContext({});

function MyApp({ Component, pageProps, isMobileView }) {
  return (
    <GlobalProvider>
      <DeviceContext.Provider value={{ isMobileView }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
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
