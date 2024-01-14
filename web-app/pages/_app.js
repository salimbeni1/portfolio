import { useEffect, useState } from "react";
import Script from 'next/script'
import Layout from "../components/Layout";
import Head from "../components/Head";
import "../styles/globals.css";
import "../styles/themes.css";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);

  return (
    <Layout>
      <Head title={`Etienne Salimbeni | ${pageProps.title}`} />
      <Component {...pageProps} />
      <Script type="text/javascript" id="clustrmaps" src="//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=a&t=n&d=_DpzN4jsym39EjKuInOrNcu-fQx1Sh7WYuds9G9BdCw&co=3f4f5a&cmo=d0ab5b&cmn=ebf335"/>
    </Layout>
  );
}

export default MyApp;
