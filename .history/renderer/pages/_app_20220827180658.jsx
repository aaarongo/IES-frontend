import React from "react";
import Head from "next/head";
import '../styles/globals.css';
import SideMenu from "../components/SideMenu/SideMenu";


export default function (props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
      <SideMenu homeState="active" viewincomeState="" addincomeState="" viewexpenseState="" addexpenseState="" />
    </React.Fragment>
  );
}
