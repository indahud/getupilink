import SeoMeta from '@/components/meta';

const About = () => {
  const metaTags = {
    title: 'About Me | getupilink.com',
    description:
      'getupilink.com provides a way to easily accept upi payments through link.',
    keywords: 'whatsapp, whatsapp open',
    ogImage: 'https://getupilink.com/og_image.png',
    topics: 'upi, about',
  };
  return (
    <>
      <SeoMeta {...metaTags} />
      <section className="flex justify-center">
        <div className="max-w-3xl mx-auto mx-4 sm:mx-0 px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 border rounded-xl border bg-card shadow mt-14 mb-10 bg-white">
          <div className="max-w-2xl">
            <div className="space-y-5 md:space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold md:text-3xl">About Me</h2>
                <p className="text-lg text-gray-800">
                  Hi, I am Sanket. I am indie developer from India 🇮🇳. I create
                  differnt projects in my free time. I created this project to
                  solve the problem I was facing.
                </p>
              </div>
              <p className="text-lg text-gray-800">
                getupilink is 100% free and open source. It doesn&apos;t have
                any ads. Because I dont have any plans to make money with this.
              </p>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold">Tech Stack 👨🏿‍💻</h3>
                <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800">
                  <li className="ps-2">NextJS</li>
                  <li className="ps-2">Tailwind CSS</li>
                  <li className="ps-2">React Final Form</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold">
                  Wanna connect with me ??
                </h3>
                <p className="text-lg text-gray-800">
                  <a
                    href="https://twitter.com/0xsanketh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-600 decoration-2 hover:underline font-medium"
                  >
                    Twitter
                  </a>
                  <a
                    href="mailto:cb45yskw8@mozmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-600 decoration-2 hover:underline font-medium"
                  >
                    Mail
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
