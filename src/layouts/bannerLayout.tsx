import React, { FC } from 'react';

export const BannerLayout: FC<{
  children: any;
  useBackDrop?: boolean;
  imageSrc: string;
  blurImage?: boolean;
}> = ({ children, useBackDrop = false, imageSrc, blurImage = true }) => {
  const blurIdentifier = blurImage ? 'blur' : 'sharp';

  return (
    <section className="md:h-[600px] relative">
      {useBackDrop ? (
        <div className="w-full h-full z-0 relative bg-black-0.4 py-20 md:py-0">
          {children}
        </div>
      ) : (
        <div className="py-20 md:py-0 w-full h-full">{children}</div>
      )}

      <div
        className="w-full h-full absolute top-0"
        style={{
          zIndex: -1,
        }}
      >
        <picture>
          <source
            media="(min-width:1100px)"
            srcSet={`${imageSrc}/-/preview/1440x750/-/quality/best/-/format/webp/-/${blurIdentifier}/20`}
          />
          <source
            media="(min-width:600px)"
            srcSet={`${imageSrc}/-/preview/820x600/-/quality/best/-/format/webp/-/${blurIdentifier}/20`}
          />
          <img
            src={`${imageSrc}/-/preview/390x450/-/quality/best/-/format/webp/-/${blurIdentifier}/10`}
            alt="Banner"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </picture>
      </div>
    </section>
  );
};
