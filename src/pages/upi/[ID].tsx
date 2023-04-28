import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import QRCode from 'react-qr-code';

const UpiQR: NextPage = () => {
  const router = useRouter();
  const { ID, am } = router.query;
  const paymentlink = `upi://pay?pn=withUpigen&pa=${ID}&cu=INR${`&am=${
    am ? am : ''
  }`}`;

  const redirectToUpi = () => {
    router.push(paymentlink);
  };
  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10 border border-gray-300 shadow">
            <div className="mb-4">
              <p className='flex items-center justify-center text-2xl tracking-tight text-gray-700'>
                You are paying {am ? `INR ${am}` : ''}
              </p>
              <p className='flex items-center mt-1 justify-center text-2xl tracking-tight text-gray-700'>
                to 👉 <span className='ml-2 font-bold'>{ID}</span>
              </p>
            </div>
            <div className="flex items-center justify-center">
              <QRCode
                value={paymentlink}
                size={400}
                className="border border-gray-300 px-10 py-10 rounded-md"
              />
            </div>
            <div className="flex items-center justify-center mt-2 text-gray-900 text-lg">
              <p>Scan this QR with any UPI ID</p>
            </div>
          </div>
          <div>
            <div className="w-full mt-6 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <a href={paymentlink} target="_blank" rel="noopener noreferrer">
                Pay
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpiQR;