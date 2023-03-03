import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';
import data from 'data/postbail.json';
import { BannerLayout } from 'layouts/bannerLayout';

export const BannerSection: FC = () => {
  return (
    <BannerLayout
      imageSrc="https://ucarecdn.com/74c8490d-3d0a-43f7-8560-54dbea478270/"
      blurImage={false}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center h-full">
        <div className="flex-grow md:mr-5 mb-10 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            <FormattedMessage
              id="k62Lpm"
              defaultMessage="Post Nationwide Bail Bonds Online"
            />
          </h1>

          <p className="text-white mt-5 whitespace-pre-line">
            <FormattedMessage
              id="OAV9SU"
              defaultMessage="Lexington National Insurance Corporation is licensed in all 50-states and the District of Columbia\n Post Nationwide Bail Bonds Online PRIOR TO COMPLETING THIS FORM PLEASE CONTACT OUR OFFICE TO MAKE SURE THAT WE HAVE COVERAGE IN THE AREA THAT YOU WOULD LIKE TO POST BOND.\nWHEN REQUESTING A TRANSFER BOND, EITHER THE DEFENDANT OR THE PERSON WISHING TO POST BAIL IS IDEALLY NEAR MY LOCATION IN FLORIDA.\nThis service is NOT AVAILABLE in the following states Arkansas, Colorado, Illinois, Kentucky, Maine, Massachusetts, Nebraska, Oregon, or Wisconsin.\nFill out the form below to start your local or nationwide bail bonds process. Once you have submitted the form, call us at 954 463-6363 to complete the process. Entering credit card information is optional and can be given over the phone"
            />
          </p>
        </div>

        <div className="w-full md:max-w-sm">
          <h1 className="text-primary text-xl mb-3 font-bold">
            <FormattedMessage
              id="vi3l/b"
              defaultMessage="Downloadable Forms"
            />
          </h1>

          <ul className="text-white">
            {data.banner.links.map((item: any, index: number) => {
              let link = item.link;
              if (item.title === 'phone' || item.title === 'email') {
                link =
                  item.title === 'phone'
                    ? `tel:${item.link}`
                    : `mailto:${item.link}`;
              }

              return (
                <li
                  className="text-white"
                  key={`bail_respurce_banner_${index}`}
                >
                  <Link href={link}>
                    <FormattedMessage
                      id={item.title.id}
                      defaultMessage={item.title.defaultMessage}
                    />
                    {(item.title === 'phone' || item.title === 'email') && (
                      <> : {item.link}</>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </BannerLayout>
  );
};
