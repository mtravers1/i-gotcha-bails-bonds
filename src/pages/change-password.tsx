import React, { FC } from 'react';
import { PageLayout } from 'layouts/pageLayout';
import ResetPassword from 'subpages/auth/reset-password';

const changePassword: FC = () => {
  return (
    <PageLayout
      pageTitle={{
        id: 'change.password',
        defaultMessage: 'Change your password',
      }}
    >
      <div
        className="py-12 md:py-24 lg:py-28 container mx-auto bg-gray-200"
        style={{ minHeight: '500px' }}
      >
        <ResetPassword />
      </div>
    </PageLayout>
  );
};

export default changePassword;
