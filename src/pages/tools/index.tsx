import { CommonHeroSection } from "@/components/Hero/common";
import SeoMeta from "@/components/meta";
import { cardItems } from "@/utils/constants";
import Link from "next/link";

const heroProps = {
  title: "All tools listing",
  description: "Useful tools for your needs",
};

const metaTags = {
  title: "All tools listing | getupilink.com",
  description:
    "getupilink has wide range of tools like upi link generator, whats app opener without saving number",
  keywords: "tools, upi link generator, whatsapp, whatsapp open",
  ogImage: "https://pub-fa7e0fa098c143f5b63217aa7c0895d8.r2.dev/whatsapp.png",
  topics: "tools, payment, whatsapp, wa me",
};

export default function OtherTools() {
  return (
    <>
      <SeoMeta {...metaTags} />
      <CommonHeroSection {...heroProps} />
      <section className="mx-auto container mt-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 py-5">
          {cardItems.map((card) => (
            <div key={card.id} className="rounded-xl border bg-card shadow">
              <div className="p-5 font-semibold text-gray-800 border-b">
                <h3 className="font-semibold leading-none tracking-tight group-hover:text-blue-600 cursor-pointer">
                  <Link href={card.slug}>{card.title}</Link>
                </h3>
              </div>
              <div className="p-5 text-sm text-muted-foreground">
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
