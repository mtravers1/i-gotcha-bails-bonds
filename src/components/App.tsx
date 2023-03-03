'use client';
import { FC, useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import { DefaultSeo } from 'next-seo';
import English from 'lang/en.json';
import Spanish from 'lang/es.json';
import { useAppSelector } from 'hooks/reduxHooks';

export const App: FC<{
  pageProps: any;
  Component: any;
}> = ({ Component, pageProps }) => {
  const langConfig: {
    [key: string]: any;
  } = {
    en: English,
    es: Spanish,
  };

  const { lang } = useAppSelector((state) => state.generals);

  const locale = useMemo(() => {
    if (typeof window === 'undefined') return 'en';
    return lang || localStorage.getItem('lang') || navigator.language;
  }, [lang]);

  // This is a hack to get the translations to work

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

      <IntlProvider locale={locale} messages={langConfig[locale]}>
        <Component {...pageProps} />
      </IntlProvider>
    </>
  );
};
