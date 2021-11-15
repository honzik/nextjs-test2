// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import { repoName } from '../prismic-configuration'

import { createResolver } from "next-slicezone/resolver";

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    await createResolver();
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script async defer src={`//static.cdn.prismic.io/prismic.js?new=true&repo=${repoName}`}></script>          <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`}></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
};
