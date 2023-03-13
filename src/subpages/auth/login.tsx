import React, { useState, useEffect, FC } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useToasts } from 'react-toast-notifications';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from 'components/button';
import { Input } from 'components/input';
import data from 'data/signIn';
import { axiosInstance } from 'helpers';
import { User } from 'helpers/interfaces';
import { useAppDispatch } from 'hooks/reduxHooks';
import { useForm } from 'hooks/useForm';
import { login } from 'redux/reducers/user';
import style from './style.module.scss';

const Login: FC<{
  redirectUrl?: string | string[] | undefined;
}> = ({ redirectUrl }) => {
  const [reviel, setReviel] = useState(false);
  const { addToast } = useToasts();
  const dispatch = useAppDispatch();
  const history = useRouter();
  const intl = useIntl();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { handleSubmit, handleChange, inputTypes, errors, loading } = useForm({
    inputs: data,
    cb: async (inputs: any) => {
      const response = await axiosInstance.post('/auth/user/login', {
        email: inputs.email,
        password: inputs.password,
      });

      // @ts-ignore
      const user = (dispatch(login(response.data.data)) as unknown) as User;

      addToast(
        intl.formatMessage(
          {
            id: 'login-page.success',
            defaultMessage: 'Welcome back {name}',
          },
          { name: user.firstName }
        ),
        {
          appearance: 'success',
          autoDismiss: true,
        }
      );

      if (redirectUrl) return history.push(`${redirectUrl}`);

      history.push('/');
    },
  });

  const revielPassword = () => {
    setReviel(!reviel);
  };

  const showSignup = () => {
    document.querySelector('#signup')?.scrollIntoView();
  };

  return (
    <div className={style['auth-section']}>
      <div className={style['reg-text']}>
        <h2>
          <FormattedMessage id="nav.login" defaultMessage="Login" />
        </h2>
        <p>
          <>
            <FormattedMessage
              id="login-page.title"
              defaultMessage="Great to have you back"
            />
            <strong
              className="text-black cursor-pointer lg:hidden"
              onClick={showSignup}
            >
              / <FormattedMessage id="signup" defaultMessage="sign up" />
            </strong>
          </>
        </p>
      </div>
      <form className="flex flex-col">
        {data.map((form, i) => (
          <Input
            key={`login_form_${i}`}
            name={form.name}
            type={form.type}
            placeholder={form.placeHolder}
            value={inputTypes[form.name]}
            errorMsg={form.errorMessage}
            required={form.required}
            reviel={form.type === 'password' ? reviel : false}
            revielPassword={revielPassword}
            handleChange={handleChange}
            errors={errors}
            attr={form.attr}
            open={true}
          />
        ))}

        <Button
          onClick={handleSubmit}
          loading={loading}
          className="self-center"
        >
          <FormattedMessage id="nav.login" defaultMessage="Login" />
        </Button>

        <small className="self-end block mt-5 font-bold">
          <Link href="/forgot-password">
            <FormattedMessage
              id="forgot.password"
              defaultMessage="Lost your password?"
            />
          </Link>
        </small>
      </form>
    </div>
  );
};

export default Login;
