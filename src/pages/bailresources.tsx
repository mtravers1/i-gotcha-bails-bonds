import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';
import Link from 'next/link';
import bottomImg from 'assets/bar.png';
import { BannerSection } from 'components/bannerSection/bailResources';
import { PageSection } from 'components/pageSection';
import data from 'data/bailresources.json';
import { PageLayout } from 'layouts/pageLayout';

const Bailresources: FC = () => {
  return (
    <PageLayout pageTitle="bail-resources.page.title">
      <BannerSection />

      <PageSection
        className="flex flex-col-reverse md:flex-row items-center"
        useBorder={false}
      >
        <div className="w-full md:w-1/2 mr-0 md:mr-20">
          <h1 className="text-3xl md:text-4xl text-black font-black mb-5">
            <FormattedMessage id="bail-resources.page.info.title" />
          </h1>

          <div>
            {data.cases.map((item: any, index: number) => (
              <div className="mb-5" key={`infoProps_index_${index}`}>
                <h1 className="text-3xl text-blue font-bold mb-3">
                  {item.title}
                </h1>

                <div>
                  <span className="font-bold">
                    <FormattedMessage id="jail" />:{' '}
                    <Link href={item.links.jail}>
                      <FormattedMessage id="click.here" />
                    </Link>
                  </span>
                </div>

                <div>
                  <span className="font-bold">
                    <FormattedMessage id="case.search" />:{' '}
                    <Link href={item.links.caseSearch}>
                      <FormattedMessage id="click.here" />
                    </Link>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 max-w-md h-40 mb-10 md:mb-0 relative">
          <Image src={bottomImg} alt="bar" fill />
        </div>
      </PageSection>

      <PageSection>
        <h1 className="text-black text-2xl font-bold">
          <FormattedMessage id="bail-resources.info.title" />
        </h1>

        <ul className="flex flex-col mt-4">
          {data.bondTypes.map((item: any) => (
            <li
              className="nav-item mb-1 list-disc ml-5"
              key={`bond_types_${item.title}`}
            >
              <Link href={item.link}>
                <FormattedMessage id={item.title} />
              </Link>
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection>
        <h1 className="text-black text-2xl font-bold">
          <span className="text-red-500">*</span>{' '}
          <FormattedMessage id="bail-resources.info.bonds-def.title" />
        </h1>

        <div className="mt-5">
          {data.bailBondsDef.map((item: any, index: number) => (
            <div className="mb-5" key={`bail_bonds_def_${index}`}>
              <h1 className="text-xl text-blue font-bold mb-3">
                <FormattedMessage id={item.title} />
              </h1>

              <p>
                <FormattedMessage id={item.desc} />
              </p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <h1 className="text-black text-2xl font-bold">
          <FormattedMessage id="bail-resources.info.bonds.cost-ananlisis.title" />
        </h1>

        <div className="flex flex-col md:flex-row-reverse items-start mt-5">
          <div className="w-full flex-grow-1">
            <h1 className="text-2xl font-bold mb-5">
              <FormattedMessage id="bail-resources.info.bonds.cost-ananlisis.subtitle" />
            </h1>

            <p>
              <FormattedMessage id="bail-resources.info.bonds.cost-ananlisis.desc" />
            </p>
          </div>

          <div className="w-full max-w-md h-40 mb-10 md:mb-0 relative mr-0 md:mr-20">
            <Image src={bottomImg} alt="bar" fill />
          </div>
        </div>
      </PageSection>

      <footer className="bg-mono">
        <div className="flex flex-col md:flex-row justify-between container mx-auto mt-14 py-14">
          {data.footer.map((item: any, index: number) => (
            <div className="mb-5" key={`footer_index_${index}`}>
              <h1 className="text-3xl text-white font-bold mb-3">
                <FormattedMessage id={item.title} />
              </h1>

              <div>
                {item.elements.map((element: any, index: number) => (
                  <ul
                    className="mb-5 text-white"
                    key={`footer_element_${index}`}
                  >
                    <li>
                      <FormattedMessage id={element.title} />
                    </li>
                    <li>
                      <FormattedMessage id={element.address} />
                    </li>
                    {element.hours && (
                      <li>
                        <FormattedMessage id="hours" />:{' '}
                        <FormattedMessage id={element.hours} />
                      </li>
                    )}
                    <li>
                      <Link href={`tel:${element.phone}`}>
                        <FormattedMessage id="phone" />:{' '}
                        <FormattedMessage id={element.phone} />
                      </Link>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
      </footer>
    </PageLayout>
  );
};

export default Bailresources;
