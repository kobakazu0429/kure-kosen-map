import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

const title = "呉高専マップ";
const description = "呉高専の学生によって作成された学内のWeb地図です。";
const base_url = "https://kure-kosen-map.vercel.app";
const ogp_url = `${base_url}/OGP.png`;

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja" className="h-full">
        <Head>
          <style>{`#__next { height:100% } `}</style>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{title}</title>
          <meta name="description" content={description} />

          <meta itemProp="name" content={title} />
          <meta itemProp="description" content={description} />
          <meta itemProp="image" content={ogp_url} />

          <meta property="og:url" content={base_url} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={ogp_url} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={ogp_url} />
        </Head>
        <body className="h-full w-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
