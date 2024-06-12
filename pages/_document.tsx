// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Foundation:wght@400..700&family=Mynerve&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/icon.ico" type="image/x-icon" />
          {/* <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
