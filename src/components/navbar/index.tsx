import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import {
  DropDown,
  DropDownChildren,
  DropDownHeader,
} from 'components/dropDown';
import { NavWrapper } from './navWrapper';

export const Navbar: FC = () => {
  const links = [
    {
      name: <FormattedMessage id="nav.home" />,
      path: '/home',
    },
    {
      name: <FormattedMessage id="nav.bail-resources" />,
      path: '/bailresources',
    },
    {
      name: <FormattedMessage id="nav.post-bail-option" />,
      path: '/postbail',
    },
    {
      name: <FormattedMessage id="nav.about" />,
      path: '/about',
    },
    {
      name: <FormattedMessage id="nav.reviews" />,
      path: '/reviews',
    },
  ];

  return (
    <>
      <div
        style={{
          width: '100vw',
          height: '88px',
        }}
      ></div>
      <NavWrapper>
        {(styles: any) => (
          <header className="w-full z-10" style={styles}>
            <div
              className="w-full absolute top-0 bg-white"
              style={{
                boxShadow: styles.boxShadow,
              }}
            >
              <nav className="container mx-auto z-50 flex justify-between items-center py-3">
                <Image
                  src="https://ucarecdn.com/bb753d1e-cabb-489c-9586-594c45a45c14/"
                  alt="logo"
                  width={100}
                  height={100}
                />

                <ul className="hidden md:flex">
                  {links.map((link, i) => (
                    <li
                      key={`main_nav_${i}`}
                      className="nav-item text-black py-5 px-3"
                    >
                      <Link href={link.path}>{link.name}</Link>
                    </li>
                  ))}
                </ul>

                <ul className="flex items-center">
                  <div className="block md:hidden mr-2">
                    <DropDown
                      config={{
                        useClick: true,
                        useBackDrop: true,
                      }}
                      className="-right-3"
                    >
                      <DropDownHeader>
                        <FaBars />
                      </DropDownHeader>
                      <DropDownChildren className="bg-primary p-3 shadow-lg">
                        <ul className="flex flex-col items-start">
                          {links.map((link, i) => (
                            <li
                              key={`main_nav_${i}`}
                              className="nav-item py-1 text-white hover:text-white hover:opacity-40"
                            >
                              <Link href={link.path}>{link.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </DropDownChildren>
                    </DropDown>
                  </div>

                  <li className="nav-item py-5 px-3 text-black">
                    <Link href="/login">
                      <FormattedMessage id="nav.login" />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        )}
      </NavWrapper>
    </>
  );
};
