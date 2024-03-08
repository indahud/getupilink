export function PrivacyPolicyComponent() {
  return (
    <>
      <section className="flex justify-center">
        <div className="max-w-3xl mx-auto mx-4 sm:mx-0 px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 border rounded-xl border bg-card shadow mt-14 mb-10 bg-white">
          <div className="max-w-2xl">
            {/* Content */}
            <div className="space-y-5 md:space-y-6">
              <div className="space-y-3">
                <h1 className="text-2xl font-bold md:text-3xl dark:text-white">
                  Privacy and Policy
                </h1>
                <p className="text-lg text-gray-800 dark:text-gray-200">
                  Thank you for visiting{' '}
                  <a
                    className="text-blue-600 decoration-2 hover:underline font-medium"
                    href="https://getupilink.com"
                  >
                    getupilink
                  </a>
                  . This Privacy Policy outlines how we collect, use, and
                  protect the information you provide while using our website
                  and its tools.
                </p>
              </div>
              <h3 className="text-xl font-bold">Information We Collect</h3>
              <ul className="list-disc">
                <li className="mt-4">
                  <span className="font-bold">Usage Data: </span> We use
                  analytics tools, including Google Analytics, to collect
                  information about your usage of our website. This may include
                  your browser type, operating system, and other technical
                  details
                </li>
                <li className="mt-4">
                  <span className="font-bold">Cookies: </span> We use cookies to
                  enhance your experience on our website. Cookies are small text
                  files stored on your device that help us analyze website usage
                  and personalize content.
                </li>
              </ul>
              <h3 className="text-xl font-bold">How We Use Your Information</h3>
              <ul>
                <li className="mt-4">
                  <span className="font-bold">Personal Information: </span>
                  We may use your personal information to respond to your
                  inquiries, provide customer support, and send you relevant
                  updates.
                </li>
                <li className="mt-4">
                  <span className="font-bold">Usage Data: </span>
                  We use analytics data to improve our website, understand user
                  preferences, and optimize content.
                </li>
                <li className="mt-4">
                  <span className="font-bold">Cookies: </span>
                  Cookies help us analyze user behavior, personalize content,
                  and provide a better user experience. You can manage cookie
                  preferences through your browser settings.
                </li>
              </ul>
              <h3 className="text-xl font-bold">Third-Party Services</h3>
              <p>
                We may use third-party services, such as analytics tools, to
                collect and process data on our behalf. These third parties have
                their own privacy policies governing the use of your
                information.
              </p>
              <h3 className="text-xl font-bold">Data Security</h3>
              <p>
                We take reasonable measures to protect your information from
                unauthorized access, disclosure, alteration, and destruction.
                However, no online platform can guarantee absolute security.
              </p>
              <h3 className="text-xl font-bold">
                Changes to this Privacy Policy
              </h3>
              <p>
                We reserve the right to update this Privacy Policy at any time.
                Any changes will be effective immediately upon posting on our
                website.
              </p>
              <h3 className="text-xl font-bold">Contact Us</h3>
              <p>
                If you have any questions or concerns about this Privacy Policy,
                please contact us at this
                <a
                  href="mailto:cb45yskw8@mozmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 decoration-2 hover:underline font-medium"
                >
                  {' '}
                  email{' '}
                </a>
                .
              </p>
            </div>
            {/* End Content */}
          </div>
        </div>
      </section>
    </>
  );
}
