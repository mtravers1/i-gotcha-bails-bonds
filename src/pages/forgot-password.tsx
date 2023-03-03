import React, { FC } from 'react';
import { PageLayout } from 'layouts/pageLayout';
import Forgot from 'subpages/auth/forgot';

const forgotPassword: FC = () => {
  return (
    <PageLayout
      pageTitle={{ id: 'forgot.password', defaultMessage: 'Forgot Password' }}
    >
      <div
        className="py-12 md:py-24 lg:py-28 container mx-auto bg-gray-200"
        style={{ minHeight: '500px' }}
      >
        <Forgot />
      </div>
    </PageLayout>
  );
};

export default forgotPassword;
