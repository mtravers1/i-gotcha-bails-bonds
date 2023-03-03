import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { SlArrowDown } from 'react-icons/sl';
import {
  DropDown,
  DropDownChildren,
  DropDownHeader,
} from 'components/dropDown';
import { NavLink } from 'components/navLink';
import { useAppSelector } from 'hooks/reduxHooks';
import { UseLinks } from 'hooks/useLinks';
import { NavWrapper } from './navWrapper';

export const Navbar: FC = () => {
  const { links, authLinks } = UseLinks();
  const { user } = useAppSelector((state) => state.auth);

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
          <header className="w-full z-10 " style={styles}>
            <div
              className="w-full absolute top-0 bg-white flex justify-between items-center"
              style={{
                boxShadow: styles.boxShadow,
                height: '88px',
              }}
            >
              <nav className="container mx-auto z-50 flex justify-between items-center">
                <Image
                  src="https://ucarecdn.com/bb753d1e-cabb-489c-9586-594c45a45c14/"
                  alt="logo"
                  width={100}
                  height={100}
                />

                <ul className="hidden lg:flex">
                  {links.map((link, i) => (
                    <li key={`main_nav_${i}`}>
                      <NavLink
                        href={link.path}
                        className="nav-item py-5 px-3 transition-colors duration-300 hover:text-primary"
                        activeClassName="text-primary"
                        exact
                      >
                        <>{link.name}</>
                      </NavLink>
                    </li>
                  ))}
                </ul>

                <ul className="flex items-center">
                  <div className="block lg:hidden mr-2">
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

                  {!user?.firstName ? (
                    <li className="nav-item py-5 px-3 text-black">
                      <Link href="/login-register">
                        <FormattedMessage
                          id="nav.login"
                          defaultMessage="Login"
                        />
                      </Link>
                    </li>
                  ) : (
                    <div>
                      <DropDown
                        config={{
                          useClick: true,
                          useBackDrop: true,
                        }}
                        className="-right-3"
                      >
                        <DropDownHeader>
                          <h2 className="font-bold text-primary flex items-center">
                            Hi {user?.firstName}{' '}
                            <SlArrowDown className="stroke-2 ml-2" />
                          </h2>
                        </DropDownHeader>
                        <DropDownChildren className="bg-primary p-3 shadow-lg">
                          <ul className="flex flex-col items-start">
                            {authLinks.map((link, i) => (
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
                  )}
                </ul>
              </nav>
            </div>
          </header>
        )}
      </NavWrapper>
    </>
  );
};
