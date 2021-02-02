import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja" className="h-full">
        <Head>
          <style>{`#__next { height:100% } `}</style>
          <meta
            name="description"
            content="呉高専の授業で学生によって作成させたWeb地図です。"
          />
        </Head>
        <body className="h-full w-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
