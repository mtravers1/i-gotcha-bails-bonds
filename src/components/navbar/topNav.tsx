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
          <FormattedMessage
            id="bail-resources.page.top-one"
            defaultMessage="We Are Serving All 50 States"
          />
        </div>
        <div className={styles['top-nav-el']}>
          <TbRotateClockwise2 />{' '}
          <FormattedMessage
            id="bail-resources.page.top-two"
            defaultMessage="Where Available Any Time 24/7 Service"
          />
        </div>
        <div className={styles['top-nav-el']}>
          <IoIosCalendar />{' '}
          <FormattedMessage
            id="bail-resources.page.top-three"
            defaultMessage="Bail Out Same Day"
          />
        </div>
      </div>
    </div>
  );
};
