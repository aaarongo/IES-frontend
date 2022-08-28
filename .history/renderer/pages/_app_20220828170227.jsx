import React from "react";
import Head from "next/head";
import '../styles/globals.css';
import TitleBar from "../components/TitleBar/TitleBar";
import styles from './_app.module.scss';

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
      <div className={styles.main}>
        <TitleBar />
        <div className={styles.content}>
          <Component {...pageProps} />
        </div>
      </div>
    </React.Fragment>
  );
}
