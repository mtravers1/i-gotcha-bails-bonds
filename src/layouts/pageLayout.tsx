import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { Navbar } from 'components/navbar';
import { TopNav } from 'components/navbar/topNav';
import { PageTitleCard } from 'components/pageTitleCard';

export const PageLayout: FC<{
  children: any;
  useTopNav?: boolean;
  pageTitle?: { id: string; defaultMessage: string };
}> = ({ children, useTopNav = true, pageTitle }) => {
  return (
    <main>
      {' '}
      <Navbar />
      {pageTitle && (
        <PageTitleCard>
          <FormattedMessage
            id={pageTitle.id}
            defaultMessage={pageTitle.defaultMessage}
          />
        </PageTitleCard>
      )}
      {useTopNav && <TopNav />}
      {children}
    </main>
  );
};
