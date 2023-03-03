import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { Navbar } from 'components/navbar';
import { TopNav } from 'components/navbar/topNav';
import { PageTitleCard } from 'components/pageTitleCard';

export const PageLayout: FC<{
  children: any;
  useTopNav?: boolean;
  pageTitle?: { id: string; defaultMessage: string };
  className?: string;
}> = ({ children, useTopNav = true, pageTitle, className }) => {
  return (
    <main className={classNames('flex flex-col min-h-screen', className)}>
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
