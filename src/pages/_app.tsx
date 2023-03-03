import { FC, useMemo, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';
import Cookies from 'js-cookie';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { axiosInstance } from 'helpers';
import { getAppData, initializeStore } from 'helpers/config';
import { EXCLUDED_PAGES, Q_TOKEN, TOKEN_COOKIE_NAME } from 'helpers/constants';
import English from '../../lang/en.json';
import Spanish from '../../lang/es.json';
import { wrapper } from '../store';
import '../styles/index.scss';
import '../styles/tailwind_index.scss';

const App: FC<{
  pageProps: any;
  Component: any;
}> = ({ Component, pageProps }) => {
  const { locale, pathname, asPath } = useRouter();
  const [shortLocale] = locale ? locale.split('-') : ['en'];

  const messages: any = useMemo(() => {
    switch (shortLocale) {
      case 'es':
        return Spanish;
      default:
        return English;
    }
  }, [shortLocale]);

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        if (
          err.response?.status === 401 &&
          !EXCLUDED_PAGES.some((page) => pathname.includes(page))
        ) {
          localStorage.removeItem(Q_TOKEN);
          Cookies.remove(TOKEN_COOKIE_NAME);
          location.href = `/login?redirect=${asPath}`;
        }
        return Promise.reject(err);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath]);

  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.i-gotchabailbonds.com/',
          site_name: 'I Gotcha Bail Bonds',
          images: [],
        }}
        twitter={{
          handle: '@igotchabailbonds',
          site: '@igotchabailbonds',
          cardType: 'summary_large_image',
        }}
        title="I Gotcha Bail Bonds"
        description="I Gotcha Bail Bonds is a family owned and operated bail bonds company. We are here to help you get your loved one out of jail as quickly as possible. We are available 24/7 to help you with your bail bond needs."
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: '/logo192.png',
          },
          {
            rel: 'manifest',
            href: '/manifest.json',
          },
        ]}
      />

      <ToastProvider>
        <IntlProvider locale={shortLocale} messages={messages}>
          <Component {...pageProps} />
        </IntlProvider>
      </ToastProvider>
    </>
  );
};

const BailBonds = ({ Component, ...rest }: AppProps): any => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <App pageProps={props.pageProps} Component={Component} />
    </Provider>
  );
};

BailBonds.getInitialProps = wrapper.getInitialPageProps(
  (store) => async (context: any) => {
    if (typeof window === 'undefined' && context?.ctx?.req?.headers?.cookie) {
      if (!EXCLUDED_PAGES.some((page) => context.ctx.asPath.includes(page))) {
        const appData = await getAppData(context);

        // @ts-ignore
        store.dispatch(initializeStore(appData)); // You can dispatch initial actions here

        return {
          // You can return any props you want
          pageProps: {
            error: appData.error,
          },
        };
      }
    }
  }
);

export default BailBonds;
