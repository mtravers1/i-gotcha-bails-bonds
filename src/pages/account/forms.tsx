import { FC } from 'react';
import { SideNav } from 'components/sideNav';
import { AccountLayout } from 'layouts/accountLayout';

const FormCard: FC = () => {
  return (
    <div>
      <h1>Form Card</h1>
    </div>
  );
};

const MyAccount: FC = () => {
  return (
    <AccountLayout
      pageTitle={{
        id: 'account.myAccount',
        defaultMessage: 'Basic Account Details',
      }}
      navText="Navigation"
      floating={(openSide: boolean) => <SideNav openSide={openSide} />}
    >
      <div>
        <h1>Hi, let's get you started</h1>
        <h2>Please Complete this application form for you to get started</h2>

        <div>
          <h1>Indemitor Form</h1>
          <p>....</p>
          <FormCard />
          <p>Go to form</p>
        </div>
      </div>
    </AccountLayout>
  );
};

export default MyAccount;
