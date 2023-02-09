import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';
// import Link from 'next/link';
import bottomImg from 'assets/bar.png';
import { BannerSection } from 'components/bannerSection';
import { Button } from 'components/button';
import { InfoText } from 'components/infoText';
import data from 'data/homepage.json';
import { InfoTextProps } from 'helpers/interfaces';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { PageLayout } from 'layouts/pageLayout';
import { setlanguage } from 'redux/actions/general';

const Home: FC = () => {
  const { lang } = useAppSelector((state) => state.generals);
  const dispatch = useAppDispatch();

  let langSelected = lang;

  if (!langSelected && typeof window !== 'undefined') {
    langSelected = localStorage.getItem('lang') || navigator.language;
  }

  const handleClick = () => {
    window.scrollTo(0, 0);
    localStorage.setItem('lang', langSelected.includes('en') ? 'es' : 'en');
    dispatch(setlanguage(langSelected.includes('en') ? 'es' : 'en'));
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
              <FormattedMessage id="footer.switch.lang.title" />
            </h1>
            <p className="text-white text-xl  font-normal">
              <FormattedMessage id="footer.switch.lang.desc" />
            </p>
          </div>
          <div className="mt-5 lg:mt-0">
            <Button
              className="!bg-white text-black rounded-none !text-2xl px-10 font-bold"
              onClick={handleClick}
            >
              <FormattedMessage id="footer.switch.lang.cta" />
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
