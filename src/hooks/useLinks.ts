import { useIntl } from 'react-intl';

interface Link {
  name: string;
  path: string;
}

interface UseLinksReturn {
  links: Array<Link>;
  authLinks: Array<Link>;
}

export const UseLinks = (): UseLinksReturn => {
  const intl = useIntl();

  const links = [
    {
      name: intl.formatMessage({ id: 'nav.home', defaultMessage: 'Home' }),
      path: '/',
    },
    {
      name: intl.formatMessage({
        id: 'nav.bail-resources',
        defaultMessage: 'Bail Resources',
      }),
      path: '/bailresources',
    },
    {
      name: intl.formatMessage({
        id: 'nav.post-bail-option',
        defaultMessage: 'Post Bail Options',
      }),
      path: '/postbail',
    },
    {
      name: intl.formatMessage({ id: 'nav.about', defaultMessage: 'About' }),
      path: '/about',
    },
    {
      name: intl.formatMessage({
        id: 'nav.reviews',
        defaultMessage: 'Reviews',
      }),
      path: '/reviews',
    },
  ];

  const authLinks = [
    {
      name: intl.formatMessage({ id: 'account', defaultMessage: 'Account' }),
      path: '/account/my-account',
    },
    {
      name: intl.formatMessage({ id: 'forms', defaultMessage: 'Forms' }),
      path: '/account/forms',
    },
    {
      name: intl.formatMessage({ id: 'nav.logout', defaultMessage: 'Logout' }),
      path: '/logout',
    },
  ];

  return { links, authLinks };
};
