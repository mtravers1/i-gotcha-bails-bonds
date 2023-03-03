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
    <PageLayout
      pageTitle={{
        id: 'bail-resources.page.title',
        defaultMessage: 'BAIL RESOURCES',
      }}
    >
      <BannerSection />

      <PageSection
        className="flex flex-col-reverse md:flex-row items-center"
        useBorder={false}
      >
        <div className="w-full md:w-1/2 mr-0 md:mr-20">
          <h1 className="text-3xl md:text-4xl text-black font-black mb-5">
            <FormattedMessage
              id="4cxnSK"
              defaultMessage="Case, Arrest, and Warrant Search"
            />
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
                      <FormattedMessage
                        id="MutiiU"
                        defaultMessage="Click Here"
                      />
                    </Link>
                  </span>
                </div>

                <div>
                  <span className="font-bold">
                    <FormattedMessage id="case.search" />:{' '}
                    <Link href={item.links.caseSearch}>
                      <FormattedMessage
                        id="MutiiU"
                        defaultMessage="Click Here"
                      />
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
          <FormattedMessage
            id="7Sc82z"
            defaultMessage="Here are some of the types of bonds we offer"
          />
        </h1>

        <ul className="flex flex-col mt-4">
          {data.bondTypes.map((item: any) => (
            <li
              className="nav-item mb-1 list-disc ml-5"
              key={`bond_types_${item.title}`}
            >
              <Link href={item.link}>
                <FormattedMessage
                  id={item.title.id}
                  defaultMessage={item.title.defaultMessage}
                />
              </Link>
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection>
        <p className="m-6">
          <FormattedMessage
            id={data.felony.header.id}
            defaultMessage={data.felony.header.defaultMessage}
          />
        </p>

        <h1 className="text-black text-2xl font-bold ">
          <FormattedMessage
            id={data.felony.title.id}
            defaultMessage={data.felony.title.defaultMessage}
          />
        </h1>

        <FormattedMessage
          id={data.felony.description.id}
          defaultMessage={data.felony.description.defaultMessage}
        />

        {data.felony.elements.map((i: any, index: any) => (
          <div key={`felony_elements_${index}`}>
            <h1 className="text-xl text-blue font-bold mb-3 mt-3">
              <FormattedMessage id={i.subheader} />
            </h1>
            <p>
              <FormattedMessage id={i.description} />
            </p>
          </div>
        ))}

        {/*        
        <h1 className="text-black text-2xl font-bold ">
          <FormattedMessage id="Felony" />
        </h1>
        <p>
          A felony is any criminal offense which is punishable by more than one
          year in state prison or federal prison and a fine of more than $1,000,
          Capital Felonies — An example of a capital felony is first-degree
          murder.
        </p> */}

        {/* <h1 className="text-xl text-blue font-bold mb-3  mt-3">
          <FormattedMessage id="First-degree Felonies " />
        </h1>
        <p>
          An example of a first-degree felony is aggravated assault of a police
          officer while that officer is on duty, which is the most severe degree
          after capital and life felonies. These top three are related to
          profoundly serious crimes. Second and third-degree felonies are
          serious as well, and all require legal representation from a criminal
          defense attorney. What is a second-degree felony in Florida?
        </p>
        <h1 className="text-xl text-blue font-bold mb-3  mt-3">
          <FormattedMessage id="Second-degree Felonies " />
        </h1>
        <p>
          A drug offense such as selling marijuana to a minor would be an
          example of a second-degree felony in Florida. What is a 3rd-degree
          felony in Florida?
        </p>
        <h1 className="text-xl text-blue font-bold mb-3 mt-3">
          <FormattedMessage id="Third-degree Felonies " />
        </h1>
        <p>
          Examples of third-degree felonies in Florida include grand theft,
          felony battery, and a third-time DUI, which took place within ten
          years of a prior DUI conviction. There are multiple types of crimes
          that constitute a felony charge in Florida, such as:
        </p>
        <ul className="list-disc list-inside ml-6">
          <li>Murder</li>
          <li>Rape and other sex crimes</li>
          <li>Aggravated Battery & Aggravated Assault</li>
          <li>Child Abuse</li>
          <li>Incest</li>
          <li>Domestic Violence</li>
          <li>Stalking</li>
          <li>Burglary</li>
          <li>Grand theft</li>
          <li>Kidnapping</li>
          <li>Battery on a law enforcement officer or firefighter</li>
          <li>Resisting a law enforcement officer using violence</li>
          <li>
            Possession of a controlled substance (not including marijuana under
            20 grams)
          </li>
          <li>Drug trafficking</li>
          <li>Robbery</li>
          <li>Carrying a concealed firearm</li>
        </ul>

        <h1 className="text-xl text-blue font-bold mb-3 mt-3">
          <FormattedMessage id="Nebbia Hearing" />
        </h1>
        <p>
          A Nebbia hearing, also known as a bail source hearing, is a court
          procedure during which you must disclose the source of funds used to
          acquire the assets you are posting for bail. If you convince the court
          that those assets were obtained with legitimate funds, you may be
          released.
        </p> */}
      </PageSection>

      <PageSection>
        <h1 className="text-black text-2xl font-bold">
          <span className="text-red-500">*</span>{' '}
          <FormattedMessage
            id="1TxmTI"
            defaultMessage="All bail bond agencies are required and regulated by the Florida Department Of Financial Services to charge 10% on state bonds and 15% on federal bonds."
          />
        </h1>

        <div className="mt-5">
          {data.bailBondsDef.map((item: any, index: number) => (
            <div className="mb-5" key={`bail_bonds_def_${index}`}>
              <h1 className="text-xl text-blue font-bold mb-3">
                <FormattedMessage
                  id={item.title.id}
                  defaultMessage={item.title.defaultMessage}
                />
              </h1>

              <p>
                <FormattedMessage
                  id={item.desc}
                  defaultMessage={item.desc.defaultMessage}
                />
              </p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <h1 className="text-black text-2xl font-bold">
          <FormattedMessage
            id="Z/4YLg"
            defaultMessage="Bail Bond Premium and Cost Explained"
          />
        </h1>

        <div className="flex flex-col md:flex-row-reverse items-start mt-5">
          <div className="w-full flex-grow-1">
            <h1 className="text-2xl font-bold mb-5">
              <FormattedMessage
                id="UhBFsS"
                defaultMessage="Bail Bonds Cost"
              />
            </h1>

            <p>
              <FormattedMessage
                id="I71k96"
                defaultMessage="The bail bond cost is the entire amount of bail decided by the courts. The bail bond premium is the amount of money a bail bondsman charges for pre-trial release and is typically 10% of the total bail amount ordered by the court system."
              />
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
                <FormattedMessage
                  id={item.title.id}
                  defaultMessage={item.title.defaultMessage}
                />
              </h1>

              <div>
                {item.elements.map((element: any, index: number) => (
                  <ul
                    className="mb-5 text-white"
                    key={`footer_element_${index}`}
                  >
                    <li>
                      <FormattedMessage
                        id={element.title.id}
                        defaultMessage={element.title.defaultMessage}
                      />
                    </li>
                    <li>
                      <FormattedMessage
                        id={element.address.id}
                        defaultMessage={element.address.defaultMessage}
                      />
                    </li>
                    {element.hours && (
                      <li>
                        <FormattedMessage id="hours" />:{' '}
                        <FormattedMessage
                          id={element.hours.id}
                          defaultMessage={element.hours.defaultMessage}
                        />
                      </li>
                    )}
                    <li>
                      <Link href={`tel:${element.phone}`}>
                        <FormattedMessage id="phone" />:{' '}
                        <FormattedMessage
                          id={element.phone.id}
                          defaultMessage={element.phone.defaultMessage}
                        />
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
