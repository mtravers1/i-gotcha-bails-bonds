import { FC } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import loader from 'assets/loader.gif';

export const Button: FC<{
  className?: string;
  onClick?: any;
  children: any;
  btnRef?: any;
  loading?: boolean;
}> = ({ children, className, onClick, btnRef, loading }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        className,
        'bg-black text-base rounded-8 py-2 px-4 text-white hover:bg-primary transition-colors duration-300 ease-in-out flex items-center'
      )}
      ref={btnRef}
      disabled={loading}
    >
      {children}
      {loading && (
        <Image
          src={loader}
          alt="loader"
          width={20}
          height={20}
          className="ml-3"
        />
      )}
    </button>
  );
};
