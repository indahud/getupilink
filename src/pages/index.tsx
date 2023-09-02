import { Form, Field } from 'react-final-form';
import { useRouter } from 'next/router';
import { useState } from 'react';
import SeoMeta from '@/components/meta';
import * as gtag from '../utils/analytics';
import { HeroSection } from '@/components/Hero';

import { Inter } from 'next/font/google';

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
})



type FormData = {
  upiID: string;
  amount?: number;
};

type FormErrors = {
  upiID?: string;
  amount?: string;
};

type LinkProps = {
  show: boolean;
  url: string;
};

const validate = (values: FormData) => {
  const errors: FormErrors = {};

  if (!values.upiID) {
    errors.upiID = 'UPI ID is required';
  } else if (!values.upiID.includes('@')) {
    errors.upiID = 'Enter valid UPI ID';
  }

  if (values.amount && values.amount <= 0) {
    errors.amount = 'Enter valid Amount';
  }

  return errors;
};

const UpiForm = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copyMessage, setCopyMessage] = useState('Copy');
  const [upiLink, setUpiLink] = useState<LinkProps>({
    show: false,
    url: '',
  });

  const submitHandler = (values: FormData) => {
    let link;
    const newUpiId = values.upiID.trim()
    if (values.amount) {
      link = `/upi/${newUpiId}?am=${values.amount}`;
    } else {
      link = `/upi/${newUpiId}`;
    }

    setUpiLink({
      show: true,
      url: `${window.location.protocol}//${window.location.hostname}:${window.location.port}${link}`,
    });

    gtag.event({
      action: 'upi_payment_link',
      category: 'engagement',
      label: `UPI ID: ${newUpiId} - Amount: ${values.amount || null}`,
      value: `New UPI payment link`,
    });
  };

  const redirectToPage = () => {
    router.push(upiLink.url);
  };

  const copyLink = () => {
    const url = upiLink.url;
    navigator.clipboard.writeText(url);
    setCopyMessage('Copied');
    setTimeout(() => {
      setCopyMessage('Copy');
    }, 1000);
  };

  const refreshPage = () => {
    window.location.reload()
  }

  const shareLink = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Your gnerated upi link to accept payment',
          text: 'Check out this upi link',
          url: upiLink.url,
        })
      } else {
        throw new Error('navigator.share is not supported in this browser')
      }
    } catch (error) {
      console.log('Error while sharing link')
    }

  }

  return (
    <>
      <SeoMeta />
      <HeroSection />
      <section className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 w-full sm:full md:w-6/12 lg:w-2/6 mx-auto px-2 sm:px-0">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {!upiLink.show ? (
              <Form onSubmit={submitHandler} validate={validate}>
                {({ handleSubmit }) => (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label
                        htmlFor="upiID"
                        className={`${inter.className} block text-gray-700`}
                      >
                        UPI ID
                      </label>
                      <div className="mt-1">
                        <Field<string>
                          name="upiID"
                          component="input"
                          type="text"
                          className={`${inter.className} tracking-wider text-gray-900`}
                        >
                          {({ input, meta }) => (
                            <div>
                              <input
                                {...input}
                                type="text"
                                placeholder="UPI ID / VPA"
                                className={`${inter.className} tracking-wider block w-full px-4 py-4 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                              />
                              {meta.error && meta.touched && (
                                <div className="mt-1 text-pink-500">
                                  {meta.error}
                                </div>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="amount"
                        className={`${inter.className} block text-gray-700`}
                      >
                        Amount
                      </label>
                      <div className="mt-1">
                        <Field<number>
                          name="amount"
                          component="input"
                          type="number"
                          className="text-gray-900"
                        >
                          {({ input, meta }) => (
                            <div>
                              <input
                                {...input}
                                type="number"
                                placeholder="Amount"
                                className={`${inter.className} tracking-wider block w-full px-4 py-4 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                              />
                              {meta.error && meta.touched && (
                                <div className="text-pink-500">
                                  {meta.error}
                                </div>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className={`${inter.className} w-full mb-10 mt-7 flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                      >
                        Process
                      </button>
                    </div>
                  </form>
                )}
              </Form>
            ) : (
              <>
                <div className='flex justify-between mb-3'>
                  <button
                    className='text-sm rounded-md bg-gray-600 pl-3 pr-3 pb-2/3 pt-2/3 text-white'
                    onClick={refreshPage}
                  >Generate New</button>
                  <div className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 font-medium' viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M8 9h-1a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2h-1" />
                      <path d="M12 14v-11" />
                      <path d="M9 6l3 -3l3 3" />
                    </svg>
                    <button className="text-sm font-medium underline text-gray-600 " onClick={shareLink}>Share</button>
                  </div>

                </div>
                <div className="flex items-center">

                  <input
                    value={upiLink.url}
                    className={`${inter.className} mr-2 w-full px-4 text-gray-700 py-4 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  />
                  <button
                    onClick={copyLink}
                    className={`${inter.className} pt-3 pb-4 pl-4 pr-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none`}
                  >
                    {copyMessage}
                  </button>
                </div>

                <div>
                  <button
                    type="submit"
                    onClick={redirectToPage}
                    className={`${inter.className} w-full mt-6 flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                  >
                    Preview
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default UpiForm;
