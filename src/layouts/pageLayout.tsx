import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { Navbar } from 'components/navbar';
import { TopNav } from 'components/navbar/topNav';
import { PageTitleCard } from 'components/pageTitleCard';

export const PageLayout: FC<{
  children: any;
  useTopNav?: boolean;
  pageTitle?: string;
}> = ({ children, useTopNav = true, pageTitle }) => {
  return (
    <main>
      {' '}
      <Navbar />
      {pageTitle && (
        <PageTitleCard>
          <h2>
            <FormattedMessage id={pageTitle} />
          </h2>
        </PageTitleCard>
      )}
      {useTopNav && <TopNav />}
      {children}
    </main>
  );
};
