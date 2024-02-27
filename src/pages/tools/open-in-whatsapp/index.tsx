import { CommonHeroSection } from "@/components/Hero/common";
import OpenInWhatsApp from "@/components/forms/whatspapp";
import SeoMeta from "@/components/meta";

const heroProps = {
  title: "Open whats app without saving number",
  description:
    "Easily start conversation with unknown whatsapp number without saving it.",
};

const metaTags = {
  title: "Send whatsapp message without saving number",
  description:
    "getupilink let you send message to any whats app number without saving it on your device. Select country, enter your number and your chat will be opened.",
  keywords: "whatsapp, whatsapp open",
  ogImage: "https://pub-fa7e0fa098c143f5b63217aa7c0895d8.r2.dev/whatsapp.png",
  topics: "whatsapp, wa me",
};

const WhatsApp = () => {
  return (
    <>
      <SeoMeta {...metaTags} />
      <CommonHeroSection {...heroProps} />
      <OpenInWhatsApp />
    </>
  );
};

export default WhatsApp;
