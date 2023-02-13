import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';
import Link from 'next/link';
import { BannerLayout } from 'layouts/bannerLayout';
import { Button } from '../button';

export const BannerSection: FC = () => {
  return (
    <BannerLayout
      imageSrc="https://ucarecdn.com/74c8490d-3d0a-43f7-8560-54dbea478270/"
      blurImage={false}
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row justify-center items-center h-full">
        <div className="md:w-1/2 flex flex-col mr-0 md:mr-10 ">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            <FormattedMessage id="bail-resources.page.banner.title" />
          </h1>

          <p className="text-white mt-5">
            <FormattedMessage id="bail-resources.page.banner.desc" />
          </p>

          <Button className="text-black !bg-white w-fit font-bold my-5">
            <FormattedMessage id="bail-resources.page.banner.btn-one" /> :{' '}
            <Link href="tel:954-290-7235">954-290-7235</Link>
          </Button>

          <Button className="text-black !bg-white w-fit font-bold">
            <FormattedMessage id="bail-resources.page.banner.btn-two" /> :{' '}
            <Link href="emailTo:info@i-gotchabailbonds.com">
              info@i-gotchabailbonds.com
            </Link>
          </Button>
        </div>

        <div className="h-56 p-2 relative w-56">
          <Image
            src="https://ucarecdn.com/d02e271a-5235-453d-852d-e7f74b7c08cc/-/preview/-/quality/smart/-/format/auto/"
            alt="Banner Woman"
            fill
          />
        </div>
      </div>
    </BannerLayout>
  );
};
