import Document, { Head, Main, NextScript, Html } from "next/document";
import Modal from "react-modal";

Modal.setAppElement("#__next");

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {this.props.styles}
          <meta name="application-name" content="The_newsroom" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="The_newsroom" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="description"
            content="A place to you keep up with the News"
          />
          <meta name="theme-color" content="#437faf" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />

          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link
            href="/favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" />
          <link rel="icon" href="/android-chrome-256x256.png" sizes="256x256" />
          <link rel="icon" href="/android-chrome-384x384.png" sizes="384x384" />
          <link rel="icon" href="/android-chrome-512x512.png" sizes="512x512" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
