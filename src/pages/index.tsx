import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';
import { useRouter } from 'next/router';
import bottomImg from 'assets/bar.png';
import { BannerSection } from 'components/bannerSection';
import { Button } from 'components/button';
import { InfoText } from 'components/infoText';
import data from 'data/homepage.json';
import { InfoTextProps } from 'helpers/interfaces';
import { PageLayout } from 'layouts/pageLayout';

const Home: FC = () => {
  const { locale, pathname, push, asPath, query } = useRouter();
  const [shortLocale] = locale ? locale.split('-') : ['en'];
  const toLocale = shortLocale === 'en' ? 'es' : 'en';

  const changeLocale = () => {
    push(
      {
        pathname,
        query,
      },
      asPath,
      { locale: toLocale }
    );
  };

  return (
    <PageLayout useTopNav={false}>
      <BannerSection />

      <section className="container mx-auto my-14">
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {data.map((item: InfoTextProps, index: number) => (
            <InfoText
              src={item.src}
              title={item.title}
              links={item.links}
              key={`infoProps_index_${index}`}
            />
          ))}
        </div>
      </section>

      <section className="container mx-auto">
        <div className="w-full h-40 relative">
          <Image src={bottomImg} alt="bar" fill />
        </div>
      </section>

      <section className="mt-14 bg-primary py-9 px-3.5">
        <div className="container mx-auto flex flex-wrap lg:items-center flex-col lg:flex-row">
          <div className="flex-1 flex flex-col items-start">
            <h1 className="text-white font-bold text-3xl lg:text-5xl mb-3">
              <FormattedMessage
                id="footer.switch.lang.title"
                defaultMessage="¿Necesita una fianza? Se Habla Español"
              />
            </h1>
            <p className="text-white text-xl  font-normal">
              <FormattedMessage
                id="footer.switch.lang.desc"
                defaultMessage="Haga clic en este enlace para visitar nuestro sitio web en español"
              />
            </p>
          </div>
          <div className="mt-5 lg:mt-0">
            <Button
              onClick={changeLocale}
              className="!bg-white !text-txt rounded-none !text-2xl px-10 font-bold"
            >
              <FormattedMessage
                id="footer.switch.lang.cta"
                defaultMessage="Español"
              />
            </Button>
          </div>
        </div>
      </section>

      {/* {footer.map((f) => (
        <div className="text-white font-normal" key="jde">
          <div style={{ backgroundColor: f.bcolor }}>
            <p
              style={{
                fontSize: f.fsize,
                fontFamily: f.ffamily,
                color: f.tcolor,
              }}
            >
              {f.text}
            </p>
            <button>{f.button}</button>
          </div>
          <div className="bg-blue	">
            <h1 className="">
              <b>Forms</b>
            </h1>
            <div className="flex justify-center flex-wrap flex-col">
              <Link href="./form4">
                Premium Receipt And Statement of Charges |
              </Link>

              <Link href="./premium">Premium Reciept</Link>
              <Link href="./sab">GENERAL SURETY APPEARANCE BOND</Link>
              <Link href="./checklist">Checklist</Link>
            </div>
          </div>
        </div>
      ))} */}
    </PageLayout>
  );
};

export default Home;
