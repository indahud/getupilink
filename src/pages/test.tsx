import React from 'react';

const MyForm: React.FC = () => {
  let hidden = true;
  return (
    <>
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

        {!hidden ? (
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="upiID"
                    className="block text-sm font-medium text-gray-700"
                  >
                    UPI ID
                  </label>
                  <div className="mt-1">
                    <input
                      id="upiID"
                      name="upiID"
                      type="text"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
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
                    <input
                      id="amount"
                      name="amount"
                      type="number"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
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
            </div>
          </div>
        ) : (
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div>
                <label
                  htmlFor="upiID"
                  className="block text-sm font-medium text-gray-700"
                >
                  UPI ID
                </label>
                <div className="mt-1">
                  <input
                    id="upiID"
                    name="upiID"
                    type="text"
                    readOnly
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full mb-10 mt-6 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        )}

        {/* <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <img src='https://placehold.co/300x100/png' className='w-full rounded'/>
    </div> */}
      </div>
    </>
  );
};

export default MyForm;
