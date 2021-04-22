import Document, { Head, Main, NextScript, Html } from "next/document";
import Modal from "react-modal";

Modal.setAppElement("#__next");

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {this.props.styles}
          <meta name="theme-color" content="#E5E7EB" />
          <meta
            name="description"
            content="A place to you keep up with the News"
          />
          <meta name="apple-mobile-web-app-title" content="Newsroom" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            href="/favicon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
