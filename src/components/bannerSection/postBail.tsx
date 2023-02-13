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
            <FormattedMessage id="post-bail.banner.title" />
          </h1>

          <p className="text-white mt-5 whitespace-pre-line">
            <FormattedMessage id="post-bail.banner.desc" />
          </p>

          {/* <FormattedMessage id="post-bail.banner.desc">
            {(msg) => (
              <p
                className="text-white mt-5 whitespace-pre-line"
                dangerouslySetInnerHTML={{
                  __html: msg,
                }}
              ></p>
            )}
          </FormattedMessage> */}
        </div>

        <div className="w-full md:max-w-sm">
          <h1 className="text-primary text-xl mb-3 font-bold">
            <FormattedMessage id="post-bail.banner.info.title" />
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
                    <FormattedMessage id={item.title} />
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
