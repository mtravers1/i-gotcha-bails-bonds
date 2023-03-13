import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { useToasts } from 'react-toast-notifications';
import { Button } from 'components/button';
import { Input } from 'components/input';
import { SideNav } from 'components/sideNav';
import data from 'data/profile';
import { axiosInstance } from 'helpers';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { useForm } from 'hooks/useForm';
import { AccountLayout } from 'layouts/accountLayout';
import { login } from 'redux/reducers/user';

const MyAccount: FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  const { addToast } = useToasts();
  const dispatch = useAppDispatch();

  console.log(user);

  const { handleSubmit, handleChange, inputTypes, errors, loading } = useForm({
    inputs: data,
    initials: user,
    cb: async (inputs) => {
      await axiosInstance.patch('/auth/user/update', inputs);

      addToast(`Successfully Updated`, {
        appearance: 'success',
        autoDismiss: true,
      });

      dispatch(login());
    },
  });

  return (
    <AccountLayout
      pageTitle={{
        id: 'account.myAccount',
        defaultMessage: 'Basic Account Details',
      }}
      navText="Navigation"
      floating={(openSide: boolean) => <SideNav openSide={openSide} />}
    >
      <div className="flex items-start flex-wrap">
        <form className="form flex-grow w-full md:w-auto max-w-md">
          {data.map((form, i) => (
            <Input
              key={`profile_form_${i}`}
              name={form.name}
              type={form.type}
              placeholder={form.placeHolder}
              value={inputTypes[form.name]}
              errorMsg={form.errorMessage}
              required={form.required}
              handleChange={handleChange}
              errors={errors}
            />
          ))}

          <Button onClick={handleSubmit} loading={loading}>
            <FormattedMessage
              id="update.profile"
              defaultMessage="Update Profile"
            />
          </Button>
        </form>
      </div>
    </AccountLayout>
  );
};

export default MyAccount;
