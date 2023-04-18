import { Form, Field } from 'react-final-form';
import { useRouter } from 'next/router';
import { useState } from 'react';

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
  const [copyMessage, setCopyMessage] = useState('Copy Link');
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
    setCopyMessage('Copied 🚀');
    setTimeout(() => {
      setCopyMessage('Copy UPI Link');
    }, 1000);
  };

  return (
    <>
      {!upiLink.show ? (
        <Form onSubmit={submitHandler} validate={validate}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="upiID">UPI ID:</label>
                <Field<string>
                  name="upiID"
                  component="input"
                  type="text"
                  className="text-gray-900"
                >
                  {({ input, meta }) => (
                    <div>
                      <input {...input} type="text" placeholder="UPI ID" />
                      {meta.error && meta.touched && <div>{meta.error}</div>}
                    </div>
                  )}
                </Field>
              </div>
              <div>
                <label htmlFor="amount">UPI ID:</label>
                <Field<number>
                  name="amount"
                  component="input"
                  type="number"
                  className="text-gray-900"
                >
                  {({ input, meta }) => (
                    <div>
                      <input {...input} type="number" placeholder="Amount" />
                      {meta.error && meta.touched && <div>{meta.error}</div>}
                    </div>
                  )}
                </Field>
              </div>
              <button type="submit">Submit</button>
            </form>
          )}
        </Form>
      ) : (
        <div>
          <input type="text" readOnly value={upiLink.url} />
          <p>
            <button onClick={copyLink}>{copyMessage}</button>
          </p>
          <button onClick={redirectToPage}>Go to link</button>
        </div>
      )}
    </>
  );
};

export default UpiForm;
