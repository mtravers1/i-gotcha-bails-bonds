import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { NavLink } from 'components/navLink';
import { UseLinks, Link } from 'hooks/useLinks';

export const SideNav: FC<{
  openSide: boolean;
}> = ({ openSide }) => {
  const { authLinks } = UseLinks();

  return (
    <div className="floating-nav px-3.5">
      <h3
        className={classNames('mb-3 text-2xl', {
          'text-white': openSide,
          'text-txt': !openSide,
        })}
      >
        <FormattedMessage id="navigation" defaultMessage="Navigation" />
      </h3>

      <ul className="flex flex-col">
        {authLinks.map((link: Link, i) => (
          <div key={`main_side_nav_${i}`}>
            <li
              className={classNames('links mb-2.5 inline-block flex-shrink', {
                'text-white': openSide,
                'text-txt': !openSide,
              })}
            >
              <NavLink
                href={link.path}
                activeClassName={classNames({
                  '!text-white': openSide,
                  '!text-primary': !openSide,
                })}
              >
                <>{link.name}</>
              </NavLink>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};
