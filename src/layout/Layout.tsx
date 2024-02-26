import Head from 'next/head';
import React from 'react';
import { getDefaultHeadMetaData } from 'config/website';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import gsap from 'gsap';
import { Toaster } from 'react-hot-toast';

interface LayoutProps {
  meta: {
    title?: string;
    description?: string;
    shareImageUrl?: string;
  };
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { meta, children } = props;

  const defaultMetaData = getDefaultHeadMetaData();
  const currentHost: string = defaultMetaData.host;
  const currentMetaTitle: string = meta.title || defaultMetaData.title;
  const currentMetaDescription: string = meta.description || defaultMetaData.description;
  const currentShareImageUrl: string =
    meta.shareImageUrl || `${currentHost}${defaultMetaData.shareImage}`;

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  return (
    <>
      <Head>
        <title>{currentMetaTitle}</title>
        <meta name="viewport" content="width=device-width,minimal-ui,viewport-fit=cover" />
        <meta name="description" content={currentMetaDescription} />
        <meta name="title" content={currentMetaTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentMetaTitle} />
        <meta name="twitter:description" content={currentMetaDescription} />
        <meta name="twitter:image" content={`${currentShareImageUrl}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={currentMetaTitle} />
        <meta property="og:description" content={currentMetaDescription} />
        <meta property="og:site_name" content={currentMetaTitle} />
        <meta property="og:image" content={`${currentShareImageUrl}`} />
      </Head>
      <header></header>
      <main>{children}</main>
      <Toaster position="bottom-right" reverseOrder={true} />
      <footer></footer>
    </>
  );
};

export default Layout;
