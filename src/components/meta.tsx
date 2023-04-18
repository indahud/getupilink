import Head from 'next/head';
import React from 'react';

const defaultMeta = {
  title: 'Generate UPI Links',
  description: 'Generate UPI Links',
  keywords: 'payment, upi, qr',
  topics: 'payment, upi, qr',
  topic: 'payment',
  siteName: 'https://upigenerator.com',
  ogImage: 'https://upigenerator.com/og.png',
  canonicalUrl: '',
};

type MetaProps = {
  title?: string;
  description?: string;
  keywords?: string;
  topics?: string;
  topic?: string;
  siteName?: string;
  ogImage?: string;
  canonicalUrl?: string;
};

const SeoMeta: React.FunctionComponent<MetaProps> = ({
  title,
  description,
  keywords,
  topics,
  topic,
  siteName,
  ogImage,
  canonicalUrl,
}) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />  
      <title>{title || defaultMeta.title}</title>
      <meta
        name="description"
        content={description || defaultMeta.description}
      />
      <meta name="keywords" content={keywords || defaultMeta.keywords} />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="robots" content="index,follow" />
      <meta name="topics" content={topics || defaultMeta.topics} />
      <meta property="og:title" content={ogImage || defaultMeta.ogImage} />
      <meta
        property="og:description"
        content={description || defaultMeta.description}
      />
      <meta
        property="og:image"
        content={description || defaultMeta.description}
      />
      <meta name="og:type" content={topic || defaultMeta.topic} />
      <meta
        property="og:site_name"
        content={siteName || defaultMeta.siteName}
      />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {/* <meta property="og:url" content={canonicalUrl || defaultMeta.canonicalUrl} /> */}
    </Head>
  );
};

export default SeoMeta;
