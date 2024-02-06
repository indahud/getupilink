import { useForm } from 'react-hook-form';
import { countries } from '@/utils/constants';
import { ErrorMessage } from '@hookform/error-message';
import { inter } from '@/utils/fonts';

const OpenInWhatsApp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const { phoneNumber, country } = data;
    const URL = `https://wa.me/${country}${phoneNumber}`;
    window.open(URL, '_blank', 'noopener,noreferrer');
  };
  return (
    <>
      <section className="flex flex-col justify-center py-12 sm:px-6 lg:px-8 mb-28">
        <div className="mt-8 w-full sm:full md:w-6/12 lg:w-2/6 mx-auto px-2 sm:px-0">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <label
                htmlFor="country"
                className={`${inter} block text-gray-700 mb-4`}
              >
                Country
              </label>
              <select
                {...register('country')}
                className="mb-4 py-3 px-4 pe-9 block w-full border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 disabled:opacity-50 disabled:pointer-events-none"
              >
                {countries.map((country) => (
                  <option key={country.name} value={country.code}>
                    {`${country.code} - ${country.name}`}
                  </option>
                ))}
              </select>
              <label
                htmlFor="phoneNumber"
                className={`${inter} block text-gray-700 mb-4`}
              >
                Phone Number
              </label>
              <input
                {...register('phoneNumber', {
                  required: 'Phone Number is required',
                  minLength: {
                    value: 10,
                    message: 'Number should be 10 digits',
                  },
                })}
                placeholder="Phone Number"
                className="tracking-wider mb-4 block w-full px-4 py-4 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                errors={errors}
                name="phoneNumber"
                as="p"
                className="text-pink-500"
              />
              <button
                type="submit"
                className="w-full mb-10 mt-10 flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Start Conversation ⚡
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default OpenInWhatsApp;
