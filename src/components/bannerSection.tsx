import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';
import { Button } from './button';

export const BannerSection: FC = () => {
  return (
    <div className="h-[450px] md:h-[600px] relative">
      <div className="w-full h-full z-0 relative bg-black-0.4">
        <div className="container mx-auto flex flex-col justify-center items-center h-full">
          <div className="h-1/3 p-2 relative w-[200px]">
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
              <FormattedMessage id="banner.title" />

              <p className="text-primary text-2xl md:text-5xl lg:text-6xl">
                Broward<span className="text-white">,</span> palm beach{' '}
                <span className="text-white">&</span> Miami
              </p>
            </h1>

            <div className="text-white mt-3 text-base md:text-lg text-center">
              <p>
                <FormattedMessage id="banner.sub-one" />
              </p>
              <p>
                <FormattedMessage id="banner.sub-two" />
              </p>
            </div>

            <Button className="mt-6 !bg-white py-3 text-base md:text-md">
              <a
                href="tel:954-530-0166"
                className="text-black  block border-b border-gray-300 w-full px-16"
              >
                <FormattedMessage id="office" />: 954-530-0166
              </a>
              <a href="tel:954-290-7235" className="text-black ">
                <FormattedMessage id="cell" />: 954-290-7235
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div
        className="w-full h-full absolute top-0"
        style={{
          zIndex: -1,
        }}
      >
        <picture>
          <source
            media="(min-width:1100px)"
            srcSet={
              'https://ucarecdn.com/242c7642-c045-4fff-a260-4e181207ad48/-/smart_resize/1440x750/-/quality/best/-/format/webp/-/blur/20'
            }
          />
          <source
            media="(min-width:600px)"
            srcSet={
              'https://ucarecdn.com/242c7642-c045-4fff-a260-4e181207ad48/-/smart_resize/820x600/-/quality/best/-/format/webp/-/blur/20'
            }
          />
          <img
            src={
              'https://ucarecdn.com/242c7642-c045-4fff-a260-4e181207ad48/-/smart_resize/390x450/-/quality/best/-/format/webp/-/blur/10'
            }
            alt="Banner"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </picture>
      </div>
    </div>
  );
};
