import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';
import Link from 'next/link';
import { InfoTextProps } from 'helpers/interfaces';

export const InfoText: FC<InfoTextProps> = ({ src, title, links }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full relative h-48 overflow-hidden rounded-xl">
        <Image src={src} fill alt="k" />
      </div>

      <div className="p-3">
        <h1 className="text-lg font-bold leading-6 lg:min-h-[80px] mb-3 text-primary">
          <FormattedMessage
            id={title.id}
            defaultMessage={title.defaultMessage}
          />
        </h1>
        <div className="flex flex-col justify-end">
          {links.map((item, index) => (
            <div key={`${item.id}_${index}`} className="nav-item mb-2.5">
              <Link href={item.href}>
                <FormattedMessage
                  id={item.id}
                  defaultMessage={item.defaultMessage}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
