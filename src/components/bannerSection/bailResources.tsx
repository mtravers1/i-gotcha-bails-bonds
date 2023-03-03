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
            <FormattedMessage
              id="aZycHu"
              defaultMessage="Bail Bond Resources"
            />
          </h1>

          <p className="text-white mt-5">
            <FormattedMessage
              id="2MoNF+"
              defaultMessage="Bail Bond Resources We know that getting arrested, or having a loved one get arrested, can be a daunting and scary experience. Our bail bond resource section will help guide you through the difficult experience a bit easier. Whether you need a Dade, Broward or Palm Beach bail bond, we’re here for you… we even have bail agents available nationwide! As always, you can call us or email us anytime."
            />
          </p>

          <Button className="!text-txt !bg-white w-fit font-bold my-5">
            <FormattedMessage
              id="1P4ckX"
              defaultMessage="Send us a text"
            />{' '}
            : <Link href="tel:954-290-7235">954-290-7235</Link>
          </Button>

          <Button className="!text-txt !bg-white w-fit font-bold">
            <FormattedMessage
              id="sbyZbi"
              defaultMessage="Send us an email"
            />{' '}
            :{' '}
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
