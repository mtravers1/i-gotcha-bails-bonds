import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { GiSouthAmerica } from 'react-icons/gi';
import { IoIosCalendar } from 'react-icons/io';
import { TbRotateClockwise2 } from 'react-icons/tb';
import styles from './topNav.module.scss';

export const TopNav: FC = () => {
  return (
    <div className="container mx-auto">
      <div className="flex md:flex-row flex-col justify-between items-center py-2 md:py-5">
        <div className={styles['top-nav-el']}>
          <GiSouthAmerica />{' '}
          <FormattedMessage id="bail-resources.page.top-one" />
        </div>
        <div className={styles['top-nav-el']}>
          <TbRotateClockwise2 />{' '}
          <FormattedMessage id="bail-resources.page.top-two" />
        </div>
        <div className={styles['top-nav-el']}>
          <IoIosCalendar />{' '}
          <FormattedMessage id="bail-resources.page.top-three" />
        </div>
      </div>
    </div>
  );
};
