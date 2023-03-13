import React, { FC } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useToasts } from 'react-toast-notifications';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from 'components/button';
import { Input } from 'components/input';
import data from 'data/forgot';
import { axiosInstance } from 'helpers';
import { useForm } from 'hooks/useForm';
import style from './style.module.scss';

const Forgot: FC = () => {
  const history = useRouter();
  const { addToast } = useToasts();
  const intl = useIntl();

  const { handleSubmit, handleChange, inputTypes, errors, loading } = useForm({
    inputs: data,
    cb: async (inputs) => {
      await axiosInstance.put('/auth/user/forgot-password', inputs);

      addToast(
        intl.formatMessage({
          id: 'forgot-page.success',
          defaultMessage: 'Hi An OTP has been sent to your email',
        }),
        {
          appearance: 'success',
          autoDismiss: true,
        }
      );

      history.push(`/change-password?phone=${inputs.phone}`);
    },
  });

  return (
    <div className={classNames(style['auth-section'], 'max-w-xl mx-auto')}>
      <div className={style['reg-text']}>
        <h2>
          <FormattedMessage
            id="forgot.password"
            defaultMessage="Forgot password"
          />
        </h2>
        <p>
          <FormattedMessage
            id="forgot-page.title"
            defaultMessage="We'll send you a reset otp"
          />
          <Link href="/login-register">
            <strong className="text-black cursor-pointer">
              <FormattedMessage
                id="forgot-page.sigin"
                defaultMessage="or sign in"
              />
            </strong>
          </Link>
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
            required={form.required}
            handleChange={handleChange}
            errors={errors}
            open={true}
          />
        ))}

        <div className="text-center">
          <Button onClick={handleSubmit} loading={loading}>
            <FormattedMessage id="send.otp" defaultMessage="Send OTP" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Forgot;
