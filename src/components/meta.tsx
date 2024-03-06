import Head from 'next/head';
import React from 'react';

const defaultMeta = {
  title: 'Generate UPI Link For Free',
  description: 'Generate Free UPI Link with getupilink.com. You can create QR Code. It supports PhonePe, Google Pay and many other payment applications.',
  keywords: 'upi link generator, free upi link generator, upi qr code generator',
  topics: 'payment, upi, qr, bhim',
  topic: 'payment',
  siteName: 'https://getupilink.com',
  ogImage: 'https://getupilink.com/og_image.png',
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
      <meta property="og:title" content={title || defaultMeta.title} />
      <meta
        property="og:description"
        content={description || defaultMeta.description}
      />
      <meta
        property="og:image"
        content={ogImage || defaultMeta.ogImage}
      />
      {/* <meta name="og:type" content={topic || defaultMeta.topic} /> */}
      <meta
        property="og:site_name"
        content={siteName || defaultMeta.siteName}
      />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <meta name="google-site-verification" content="ojkvgtSayTMXjSqowJ7WcEBobUANbgRrBRHQlq4vJPU" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" />
      <meta name="msvalidate.01" content="EC7ACAD5C3615200CDA8212D18D47F04" />
    </Head>
  );
};

export default SeoMeta;
