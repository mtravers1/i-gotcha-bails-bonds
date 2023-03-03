import React, { FC, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useToasts } from 'react-toast-notifications';
import Image from 'next/image';
import { useRouter } from 'next/router';
import loader from 'assets/loader.gif';
import { Button } from 'components/button';
import Input from 'components/input';
import data from 'data/reset';
import { axiosInstance } from 'helpers';
import { useForm } from 'hooks/useForm';
import style from './style.module.scss';

const ResetPassword: FC = () => {
  const { addToast } = useToasts();
  const [loadingResend, setLoadingResend] = useState(false);
  const { push, query } = useRouter();
  const intl = useIntl();

  const { handleSubmit, handleChange, inputTypes, errors, loading } = useForm({
    inputs: data,
    cb: async (inputs) => {
      if (inputs.password !== inputs.cpassword) {
        throw Error(
          intl.formatMessage({
            id: 'passwords-not-match',
            defaultMessage: 'Please make sure that the passwords are the same',
          })
        );
      }

      const dataObj = Object.keys(inputs).reduce((acc, input) => {
        if (input !== 'cpassword') {
          return { ...acc, [input]: inputs[input] };
        }
        return { ...acc };
      }, {});

      await axiosInstance.put(`/auth/user/reset-password`, dataObj);

      addToast(
        intl.formatMessage({
          id: 'reset-password-page.success',
          defaultMessage: 'Successfully updated',
        }),

        {
          appearance: 'success',
          autoDismiss: true,
        }
      );

      push('/login-register');
    },
  });

  const resendOtp = async () => {
    setLoadingResend(true);

    try {
      await axiosInstance.put('/auth/user/forgot-password', {
        phone: query.phone,
      });
    } finally {
      setLoadingResend(false);
    }
  };

  return (
    <div className={style['auth-section']}>
      <div className={style['reg-text']}>
        <h2>
          <FormattedMessage
            id="reset-password-page.title"
            defaultMessage="Reset password"
          />
        </h2>
        <p>
          <FormattedMessage
            id="reset-password-page.desc"
            defaultMessage="One lat step"
          />
        </p>
      </div>
      <form className="form">
        {data.map((form, i) => (
          <Input
            key={`login_form_${i}`}
            name={form.name}
            type={form.type}
            placeholder={form.placeHolder}
            value={inputTypes[form.name]}
            errorMsg={form.errorMessage}
            handleChange={handleChange}
            errors={errors[form.name]}
            attr={form.attr}
            open={true}
          />
        ))}

        <div className="text-center">
          <Button onClick={handleSubmit} loading={loading}>
            <FormattedMessage id="rest" defaultMessage="Reset" />
          </Button>
        </div>

        {query.phone && (
          <small className="mt-5 text-right flex item-center justify-end">
            {loadingResend && (
              <Image
                src={loader}
                alt="Loading"
                width={20}
                height={20}
                className="mr-5"
              />
            )}
            <FormattedMessage
              id="forgot-page.resend-text"
              defaultMessage="Didn't get link"
            />{' '}
            <strong
              className="cursor-pointer font-bold text-primary ml-1"
              onClick={resendOtp}
            >
              <FormattedMessage id="resend" defaultMessage="Resend" />
            </strong>
          </small>
        )}
      </form>
    </div>
  );
};

export default ResetPassword;
