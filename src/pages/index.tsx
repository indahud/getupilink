import { Form, Field } from 'react-final-form';
import { useRouter } from 'next/router';
import { useState } from 'react';
import SeoMeta from '@/components/meta';

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
  const [copyMessage, setCopyMessage] = useState('Copy');
  const [upiLink, setUpiLink] = useState<LinkProps>({
    show: false,
    url: '',
  });

  const submitHandler = (values: FormData) => {
    let link;

    if (values.amount) {
      link = `/upi/${values.upiID}?am=${values.amount}`;
    } else {
      link = `/upi/${values.upiID}`;
    }

    setUpiLink({
      show: true,
      url: `${window.location.protocol}//${window.location.hostname}:${window.location.port}${link}`,
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

  return (
    <>
      <SeoMeta />
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Generate UPI Payment link
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              start your 14-day free trial
            </a>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {!upiLink.show ? (
              <Form onSubmit={submitHandler} validate={validate}>
                {({ handleSubmit }) => (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label
                        htmlFor="upiID"
                        className="block text-sm font-medium text-gray-700"
                      >
                        UPI ID
                      </label>
                      <div className="mt-1">
                        <Field<string>
                          name="upiID"
                          component="input"
                          type="text"
                          className="text-gray-900"
                        >
                          {({ input, meta }) => (
                            <div>
                              <input
                                {...input}
                                type="text"
                                placeholder="UPI ID"
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                        className="block text-sm font-medium text-gray-700"
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
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                              {meta.error && meta.touched && (
                                <div>{meta.error}</div>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full mb-10 mt-6 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Process
                      </button>
                    </div>
                  </form>
                )}
              </Form>
            ) : (
              <>
                <div className="flex items-center">
                  <input 
                    value={upiLink.url}
                    className="mr-2 w-full px-3 text-gray-700 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  <button onClick={copyLink} className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">
                  {copyMessage}
                  </button>
                </div>

                <div>
                  <button
                    type="submit"
                    onClick={redirectToPage} 
                    className="w-full mt-6 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Preview
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UpiForm;
