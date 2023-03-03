import React, { FC } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { useRouter } from 'next/router';
import { Button } from 'components/button';
import Input from 'components/input';
import data from 'data/signup';
import { axiosInstance } from 'helpers';
import { useForm } from 'hooks/useForm';
// import Social from '../SocialSec';
import { login } from 'redux/reducers/user';
import style from './style.module.scss';

const Signup: FC<{
  redirectUrl?: string | string[] | undefined;
}> = ({ redirectUrl }) => {
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const history = useRouter();
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

      [inputs.firstName, inputs.lastName] = inputs.fullName.split(' ');

      const dataObj = Object.keys(inputs).reduce((acc, input) => {
        if (input === 'cpassword' || input === 'fullName') {
          return { ...acc };
        }
        if (input === 'si_password') {
          return { ...acc, password: inputs[input] };
        }
        return { ...acc, [input]: inputs[input] };
      }, {});

      const response = await axiosInstance.post('/user/signup', dataObj);

      // @ts-ignore
      const user = dispatch(login(response.data.data));

      addToast(
        intl.formatMessage(
          {
            id: 'signup-page.success',
            defaultMessage:
              'Hey {name}, Thanks for joining us. We are glad to have you on board',
          },
          {
            name: user.firstName,
          }
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

  return (
    <div className={style['auth-section']} id="signup">
      <div className={style['reg-text']}>
        <h2>
          <FormattedMessage id="register" defaultMessage="Register" />
        </h2>
        <p>
          <FormattedMessage
            id="signup-page.title"
            defaultMessage="If you don’t have an account, register now!"
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
            errors={errors}
            required={form.required}
            handleChange={handleChange}
            attr={form.attr}
          />
        ))}

        <div className="text-center">
          <Button onClick={handleSubmit} loading={loading}>
            <FormattedMessage id="signup" defaultMessage={'Signup'} />
          </Button>
        </div>
      </form>

      {/* <Social /> */}
    </div>
  );
};

export default Signup;
