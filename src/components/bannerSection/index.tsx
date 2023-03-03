import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';
import { BannerLayout } from 'layouts/bannerLayout';
import { Button } from '../button';

export const BannerSection: FC = () => {
  return (
    <BannerLayout
      imageSrc="https://ucarecdn.com/242c7642-c045-4fff-a260-4e181207ad48/"
      useBackDrop
    >
      <div className="container mx-auto flex flex-col justify-center items-center h-full">
        <div className="h-[150px] p-2 relative w-[200px]">
          <Image
            src="https://ucarecdn.com/d02e271a-5235-453d-852d-e7f74b7c08cc/-/preview/-/quality/smart/-/format/auto/"
            alt="Banner Woman"
            fill
          />
        </div>

        <div
          className="flex flex-col items-center"
          style={{
            textShadow: '0 0 10px rgba(0,0,0,0.5)',
          }}
        >
          <h1 className="text-center text-white text-bold text-3xl md:text-6xl font-bold">
            <FormattedMessage
              id="banner.title"
              defaultMessage="The Go to Bail Bonds Agency"
            />

            <div>
              <h3 className="text-primary text-2xl md:text-5xl lg:text-6xl">
                Broward<span className="text-white">,</span> palm beach{' '}
                <span className="text-white">&</span> Miami
              </h3>
            </div>
          </h1>

          <div className="text-white mt-3 text-base md:text-lg text-center">
            <p>
              <FormattedMessage
                id="banner.sub-one"
                defaultMessage="The best choice bail bonds agency in Florida!"
              />
            </p>
            <p>
              <FormattedMessage
                id="banner.sub-two"
                defaultMessage="Our areas of focus include: Reliability, Professionalism, and Quality care."
              />
            </p>
          </div>

          <Button className="mt-6 !bg-white-0.6 py-3 text-base md:text-md !rounded-sm flex flex-col">
            <a
              href="tel:954-530-0166"
              className="text-black block border-b border-black w-full px-16"
            >
              <FormattedMessage id="office" defaultMessage="Office" />:
              954-530-0166
            </a>
            <a href="tel:954-290-7235" className="text-black">
              <FormattedMessage id="cell" defaultMessage="Cell" />: 954-290-7235
            </a>
          </Button>
        </div>
      </div>
    </BannerLayout>
  );
};
