import React, { FC } from 'react';
import classNames from 'classnames';

export const PageSection: FC<{
  children: any;
  className?: string;
  useBorder?: boolean;
}> = ({ children, className, useBorder = true }) => {
  return (
    <section
      className={classNames(className, `container mx-auto mt-14`, {
        'border-t border-primary-sharp pt-11': useBorder,
      })}
    >
      {children}
    </section>
  );
};
