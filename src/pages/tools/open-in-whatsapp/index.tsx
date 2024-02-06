import { WhatsAppHeroSection } from '@/components/Hero/whatsAppHero';
import OpenInWhatsApp from '@/components/forms/whatspapp';
import SeoMeta from '@/components/meta';

const WhatsApp = () => {
  const metaTags = {
    title: 'Send whatsapp message without saving number',
    description:
      'getupilink let you send message to any whats app number without saving it on your device. Select country, enter your number and your chat will be opened.',
    keywords: 'whatsapp, whatsapp open',
    ogImage: 'https://pub-fa7e0fa098c143f5b63217aa7c0895d8.r2.dev/whatsapp.png',
    topics: 'whatsapp, wa me',
  };
  return (
    <>
      <SeoMeta {...metaTags} />
      <WhatsAppHeroSection />
      <OpenInWhatsApp />
    </>
  );
};

export default WhatsApp;
