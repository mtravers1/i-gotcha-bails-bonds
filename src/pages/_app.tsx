import { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { useAppSelector } from 'hooks/reduxHooks';
import English from 'lang/en.json';
import Spanish from 'lang/es.json';
import { wrapper } from '../store';
import '../styles/index.scss';
import '../styles/tailwind_index.scss';

function App({ Component, pageProps }: AppProps): any {
  const [langOptions, setLangOptions] = useState({
    locale: 'en',
    lang: English,
  });

  const setLang = (locale: string) => {
    switch (locale) {
      case 'es':
        setLangOptions({
          locale: 'es',
          lang: Spanish,
        });
        break;
      default:
        setLangOptions({
          locale: 'en',
          lang: English,
        });
        break;
    }
  };

  const { lang } = useAppSelector((state) => state.generals);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLang(localStorage.getItem('lang') || navigator.language);
    }
  }, []);

  useEffect(() => {
    if (!lang) return;
    setLang(lang);
  }, [lang]);

  // This is a hack to get the translations to work
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, [show]);

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

      <IntlProvider locale={langOptions.locale} messages={langOptions.lang}>
        {show && <Component {...pageProps} />}
      </IntlProvider>
    </>
  );
}

export default wrapper.withRedux(App);
