import { getDefaultHeadMetaData, GTM_ID } from 'config/website';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

/* eslint-disable react/jsx-props-no-spreading, react/prop-types,  @typescript-eslint/explicit-module-boundary-types */
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const websiteData = getDefaultHeadMetaData();

    return (
      <Html lang={websiteData.language.replace('_', '-')}>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta property="og:locale" content={websiteData.language} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <link rel="apple-touch-icon" href={websiteData.appIconImage} />
          <link rel="icon" type="image/png" href={websiteData.favIconImage} />
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;500;600;700&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          ></link>{' '}
        </Head>
        <body className=" font-josefin">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
