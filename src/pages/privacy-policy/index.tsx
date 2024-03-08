import { PrivacyPolicyComponent } from '@/components/Legal/privacy-policy';
import SeoMeta from '@/components/meta';

const metaTags = {
  title: 'Privacy & Policy | getupilink.com',
  description: 'Privacy & Policy for using the getupilink and its tools.',
  keywords: 'privacy, policy, getupilnk',
  topics: 'upi',
};

export default function PrivacyPolicy() {
  return (
    <>
      <SeoMeta {...metaTags} />
      <PrivacyPolicyComponent />
    </>
  );
}
