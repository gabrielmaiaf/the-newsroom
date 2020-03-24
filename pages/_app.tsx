import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>RSS Feeder</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default CustomApp;
