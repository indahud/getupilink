import TermsAndConditionsComponent from '@/components/Legal/terms';
import SeoMeta from '@/components/meta';

const metaTags = {
  title: 'Terms & Conditions | getupilink.com',
  description: 'Terms & Conditions for using the getupilink and its tools.',
  keywords: 'terms, conditions, getupilnk',
  topics: 'upi',
};

export default function TermsAndConditions() {
  return (
    <>
      <SeoMeta {...metaTags} />
      <TermsAndConditionsComponent />
    </>
  );
}
