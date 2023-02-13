import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { BannerLayout } from 'layouts/bannerLayout';

export const BannerSection: FC = () => {
  return (
    <BannerLayout
      imageSrc="https://ucarecdn.com/74c8490d-3d0a-43f7-8560-54dbea478270/"
      blurImage={false}
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row justify-center items-center h-full">
        <div className="flex-grow">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            <FormattedMessage id="post-bail.banner.title" />
          </h1>

          <p className="text-white mt-5 whitespace-pre-line">
            <FormattedMessage id="post-bail.banner.desc" />
          </p>
        </div>

        <div className="w-full max-w-sm"></div>
      </div>
    </BannerLayout>
  );
};
