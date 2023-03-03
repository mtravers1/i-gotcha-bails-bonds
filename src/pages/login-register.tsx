import { FC } from 'react';
import { useRouter } from 'next/router';
import { PageLayout } from 'layouts/pageLayout';
import Login from 'subpages/auth/login';
import Register from 'subpages/auth/register';

const CoustomerLogin: FC = () => {
  const router = useRouter();

  const { redirect } = router.query;

  return (
    <PageLayout
      pageTitle={{ id: 'customer.login', defaultMessage: 'Customer Lofin' }}
    >
      <div
        className="py-12 md:py-24 lg:py-28 container mx-auto bg-gray-200"
        style={{ minHeight: '500px' }}
      >
        <div className="flex flex-wrap w-full">
          <div className="w-full lg:max-w-1/2 py-12 px-5 sm:py-14 sm:px-12 bg-lite mb-12 md:mb-0">
            <Login redirectUrl={redirect} />
          </div>
          <div className="w-full lg:max-w-1/2 py-12 px-5 sm:py-14 sm:px-12">
            <Register redirectUrl={redirect} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CoustomerLogin;
