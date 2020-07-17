import React from "react"
import BaseDocument, { Html, Head, Main, NextScript } from "next/document"

export default class Document extends BaseDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="bg-cool-gray-100 antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
