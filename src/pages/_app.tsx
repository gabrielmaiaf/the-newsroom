import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import "tailwindcss/tailwind.css";

import { ModalProvider } from "../hooks/useModal";
import Modal from "../components/modal";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
      <Modal />
    </ModalProvider>
  );
}

export default CustomApp;
