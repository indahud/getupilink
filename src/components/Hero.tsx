import { Poppins, Inter } from 'next/font/google';

const poppins = Poppins({
  weight: '700',
  subsets: ['latin'],
});

const inter = Inter({ 
  weight: '400',
  subsets: ['latin'],
})

export const HeroSection = () => {
  return (
      <section className="relative bg-gray-900">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h1 className={`${poppins.className} text-4xl text-white font-extrabold mx-auto md:text-5xl`}>
              Generate upi link for free
            </h1>
            <p className={`${inter.className} max-w-2xl mx-auto text-gray-400`}>Scan QR code or directly open with any upi app</p>
          </div>
        </div>
        <div
          className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
          style={{
            background:
              'linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)',
          }}
        ></div>
      </section>
  );
};
